#!/bin/bash
set -e
SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OPENNEXT_DIR="$SITE_DIR/.open-next"
DEPLOY_DIR="$SITE_DIR/.deploy"

echo "=== Step 1: OpenNext build ==="
cd "$SITE_DIR"
npx opennextjs-cloudflare build

echo "=== Step 2: Prepare deploy directory ==="
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

cp -r "$OPENNEXT_DIR/.build" "$DEPLOY_DIR/.build" 2>/dev/null || true
cp -r "$OPENNEXT_DIR/server-functions" "$DEPLOY_DIR/server-functions"
cp -r "$OPENNEXT_DIR/cloudflare" "$DEPLOY_DIR/cloudflare"
cp -r "$OPENNEXT_DIR/middleware" "$DEPLOY_DIR/middleware"
cp -r "$OPENNEXT_DIR/dynamodb-provider" "$DEPLOY_DIR/dynamodb-provider"
cp -r "$OPENNEXT_DIR/cache" "$DEPLOY_DIR/cache"
cp -r "$OPENNEXT_DIR/cloudflare-templates" "$DEPLOY_DIR/cloudflare-templates"
cp "$OPENNEXT_DIR/worker.js" "$DEPLOY_DIR/worker.js"
cp -r "$OPENNEXT_DIR/assets/"* "$DEPLOY_DIR/"

echo "=== Step 3: Create _worker.js ==="
cat > "$DEPLOY_DIR/_worker.js" << 'WORKER'
import worker from "./worker.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (
      url.pathname.startsWith("/_next/static/") ||
      url.pathname === "/favicon.ico" ||
      url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff2?|ttf|eot)$/)
    ) {
      try {
        const asset = await env.ASSETS.fetch(request);
        if (asset.status !== 404) {
          return asset;
        }
      } catch (e) {}
    }

    return worker.fetch(request, env, ctx);
  }
};
WORKER

echo "=== Step 4: Deploy to Pages ==="
npx wrangler pages deploy "$DEPLOY_DIR" --project-name muntasirmahdi

echo "=== Done ==="

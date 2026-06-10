# Manual Setup Steps

These are steps that require manual intervention (your GitHub token lacks `actions/secrets` scope).

---

## 1. Add GitHub Secrets

Go to: https://github.com/muntasirrmahdi/muntasirmahdi.com/settings/secrets/actions

Click **New repository secret** and add these two:

| Name | Value |
|------|-------|
| `CLOUDFLARE_API_TOKEN` | `<YOUR_API_TOKEN>` (created via Cloudflare Dashboard > My Profile > API Tokens) |
| `CLOUDFLARE_ACCOUNT_ID` | `aa682ebf2772839e1bfa895b373a8bb2` |

After adding both, the GitHub Actions deploy workflow (`.github/workflows/deploy.yml`) will work on every push to `main`.

---

## 2. Configure Sanity Webhook (Auto-Rebuild)

When you publish content in Sanity, you want the site to auto-rebuild. Set up a webhook:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to **API** > **Webhooks**
4. Click **Create webhook**
5. Fill in:
   - **Name**: `Cloudflare Pages Deploy`
   - **URL**: `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/51d2c0a2-49f3-4fb4-b83f-3032c3f327ac`
   - **Trigger**: On create, update, delete (or whichever events you want)
   - **HTTP Method**: POST
   - Leave headers/body as default
6. Click **Save**

Now every Sanity content change triggers a Cloudflare Pages rebuild.

---

## 3. GA4 Measurement ID (Already Done)

The GA4 Measurement ID has already been configured:

- **Google Account**: muntasirrahmanmahdi@gmail.com
- **Account ID**: 196036004
- **Property**: muntasirmahdi.com - GA4 (p401834526)
- **Measurement ID**: `G-3PQF00WX6C`
- **Cloudflare Pages env var**: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-3PQF00WX6C`

The GA4 script in `layout.tsx` reads this env var. No action needed.

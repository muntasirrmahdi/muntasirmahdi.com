import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === "true";
  const { pathname } = request.nextUrl;

  if (
    maintenanceMode &&
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/studio/") &&
    !pathname.startsWith("/_next/") &&
    !pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js)$/)
  ) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Under Maintenance — Muntasir Mahdi</title>
<style>
  body{font-family:system-ui,sans-serif;background:#09090b;color:#fafafa;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:2rem}
  main{text-align:center;max-width:480px}
  h1{font-size:2rem;margin:0 0 .75rem;color:#c9a233}
  p{color:#a1a1aa;line-height:1.6;margin:0}
  a{color:#c9a233}
</style>
</head>
<body>
<main>
<h1>Under Maintenance</h1>
<p>We're making things better. Back shortly.</p>
<p style="margin-top:1.5rem">Questions? <a href="mailto:muntasir1315@gmail.com">Email me</a></p>
</main>
</body>
</html>`,
      {
        status: 503,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "retry-after": "3600",
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

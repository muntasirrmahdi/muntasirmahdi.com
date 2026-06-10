import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-api-key");
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json();
  const postType = body._type;

  // Revalidate based on what changed
  if (postType === "post") {
    revalidateTag("thoughts", { expire: 0 });
    revalidateTag("articles", { expire: 0 });
  }

  // Always revalidate categories when anything changes
  revalidateTag("categories", { expire: 0 });

  return NextResponse.json({ revalidated: true });
}

import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = bodySchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const listId = process.env.BREVO_NEWSLETTER_LIST_ID;

    if (!listId) {
      console.error("BREVO_NEWSLETTER_LIST_ID not configured");
      return NextResponse.json(
        { error: "Newsletter list not configured" },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo API error (${res.status}): ${err}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Something went wrong";
    console.error("Newsletter API error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

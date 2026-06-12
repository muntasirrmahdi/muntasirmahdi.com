import { NextResponse } from "next/server";
import { z } from "zod";

const subjectEnum = z.enum([
  "General Inquiry",
  "Speaking Engagement",
  "Partnership",
  "Press/Media",
  "Feedback",
  "Other",
]);

const bodySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: subjectEnum,
  message: z.string().min(1, "Message is required"),
});

const EMAIL_ROUTES: Record<string, string> = {
  "General Inquiry": "hello@muntasirmahdi.com",
  "Speaking Engagement": "muntasirrahmanmahdi@gmail.com",
  "Partnership": "muntasirrahmanmahdi@gmail.com",
  "Press/Media": "muntasirrahmanmahdi@gmail.com",
  "Feedback": "hello@muntasirmahdi.com",
  "Other": "hello@muntasirmahdi.com",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendBrevoEmail(
  data: z.infer<typeof bodySchema>
) {
  const { firstName, lastName, email, subject, message } = data;
  const toEmail = EMAIL_ROUTES[subject];
  if (!toEmail) {
    throw new Error(`Unknown subject: ${subject}`);
  }

  const fullName = `${firstName} ${lastName}`;
  const safeName = escapeHtml(fullName);
  const safeMessage = escapeHtml(message);
  const safeSubject = escapeHtml(subject);

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY || "",
    },
    body: JSON.stringify({
      sender: { name: "Muntasir Mahdi", email: "muntasirrahmanmahdi@gmail.com" },
      to: [{ email: toEmail }],
      replyTo: { name: safeName, email },
      subject: `[muntasirmahdi.com] ${safeSubject} — ${safeName}`,
      htmlContent: `
        <h3>New contact form submission</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${safeName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Subject</td><td style="padding:8px">${safeSubject}</td></tr>
        </table>
        <hr style="margin:16px 0"/>
        <p style="white-space:pre-wrap">${safeMessage}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Brevo API error (${res.status}): ${err}`);
  }

  return res.json();
}

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

    await sendBrevoEmail(parsed.data);

    return NextResponse.json({ success: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Something went wrong";
    console.error("Contact API error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

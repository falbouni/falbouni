import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
      from: "Falbouni Productions <noreply@falbouni.com>",
      to: "fadi@falbouni.com",
      subject: `New enquiry from ${name}`,
      replyTo: email,
      text: `
New Website Enquiry

Name:
${name}

Company:
${company || "Not provided"}

Email:
${email}

Project Type:
${projectType}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
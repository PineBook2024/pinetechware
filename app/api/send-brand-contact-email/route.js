export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();

    // ✅ quick env validation
    const missing = ["SMTP_USER", "SMTP_PASS", "SMTP_FROM", "SMTP_TO"].filter(
      (k) => !process.env[k]
    );
    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Missing env vars: ${missing.join(", ")}` },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ verify connection/auth (THIS will tell the real error)
    await transporter.verify();

    const { fullName, email, phoneNumber, message } = payload;

    await transporter.sendMail({
      from: `"Pine Book Publishing" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `📝 Brand Contact - ${fullName || "User"}`,
      html: `
        <p><b>Name:</b> ${fullName || ""}</p>
        <p><b>Email:</b> ${email || ""}</p>
        <p><b>Phone:</b> ${phoneNumber || ""}</p>
        <p><b>Message:</b> ${message || ""}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Pine Book Publishing" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "Thank You for Contacting Pine Book Publishing 📚",
      html: `<p>Hi ${fullName || ""},</p><p>Thanks for reaching out. We’ll contact you shortly.</p>`,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Nodemailer error:", error);

    // ✅ return real error details (for debugging)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error: error?.message || String(error),
        code: error?.code || null,
        response: error?.response || null,
      },
      { status: 500 }
    );
  }
}

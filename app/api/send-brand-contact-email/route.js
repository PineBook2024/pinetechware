export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();

    // ✅ Quick env validation
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
        user: 'pinetechware@gmail.com',
        pass: 'aegccziiizvcokox',
      },
    });

    // ✅ Verify connection/auth
    await transporter.verify();

    const { name, email, phone, message } = payload;

    // Send notification to admin
    await transporter.sendMail({
      from: `"Pine Tech Ware Contact" <${process.env.SMTP_FROM}>`,
      to: "dudley@pinetechware.com, info@pinetechware.com",
      subject: `📧 New Contact Form Submission - ${name || "User"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #333; border-bottom: 2px solid #3BB9E1; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name || "N/A"}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email || "N/A"}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone || "N/A"}</a></p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #3BB9E1; margin: 10px 0;">${message || "N/A"}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px; text-align: center;">This email was sent from the Pine Techware contact form</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: `"Pine Techware" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "Thank You for Contacting Pine Techware",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #333;">Thank You for Getting in Touch!</h2>
            <p style="color: #555; line-height: 1.6;">Hi ${name || "there"},</p>
            <p style="color: #555; line-height: 1.6;">Thank you for reaching out to Pine TechWare. We've received your message and our team will review it shortly.</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #666;"><strong>Your Message:</strong></p>
              <p style="margin: 5px 0; color: #666;">${message || "N/A"}</p>
            </div>
            <p style="color: #555; line-height: 1.6;">Best regards,<br><strong>The Pine Techware Team</strong></p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #999; font-size: 12px; text-align: center;">Pine Techware | info@pinetechware.com | (307) 522-1099</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    console.error("❌ Nodemailer error:", error);

    // ✅ Return real error details (for debugging)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
        error: error?.message || String(error),
        code: error?.code || null,
        response: error?.response || null,
      },
      { status: 500 }
    );
  }
}
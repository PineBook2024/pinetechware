export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json().catch(() => null);

    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Empty/invalid JSON body" },
        { status: 400 }
      );
    }

    const {
      fullName,
      email,
      phoneNumber,
      message,
      referringPage,
      currentPage,
      userIP,
      userCity,
      userRegion,
      userCountry,
    } = payload;

    if (!email || !fullName) {
      return NextResponse.json(
        { success: false, message: "fullName and email are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "saad.siddiqui1002@gmail.com",
        pass: "wvdoqcvokporrplp", 
      },
    });

    // Admin email
    await transporter.sendMail({
      from: `"Pine Book Publishing" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `📝 Brand Contact - ${fullName || "User"}`,
      html: `
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phoneNumber || ""}</p>
        <p><b>Message:</b> ${message || ""}</p>
        <hr/>
        <p><b>IP:</b> ${userIP || ""}</p>
        <p><b>Location:</b> ${userCity || ""}, ${userRegion || ""}, ${userCountry || ""}</p>
        <p><b>Referrer:</b> ${referringPage || ""}</p>
        <p><b>Current Page:</b> ${currentPage || ""}</p>
      `,
    });

    // User email
    await transporter.sendMail({
      from: `"Pine Book Publishing" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: "Thank You for Contacting Pine Book Publishing 📚",
      html: `<p>Hi ${fullName},</p><p>Thanks for reaching out. We’ll contact you shortly.</p>`,
    });

    return NextResponse.json(
      { success: true, message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ success: true, message: "Use POST" }, { status: 200 });
}

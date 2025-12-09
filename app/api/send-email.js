// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // yahan wohi SMTP user/pass use karo jo upar wale handler me use ho raha hai
        user: "saad.siddiqui1002@gmail.com",
        pass: "wvdoqcvokporrplp",
      },
    });

    // ---------- Admin Email ----------
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:#117d6b; color:#ffffff; padding:16px 24px; border-radius:8px 8px 0 0;">
            <h2 style="margin:0;">📧 New Side Popup Lead - ${name}</h2>
            <p style="margin:8px 0 0 0; font-size:14px; opacity:0.9;">Source: Side Popup Form</p>
          </div>
          <div style="padding:24px; color:#333333;">
            <p style="margin-bottom:16px; font-size:15px;">You have received a new inquiry from the website side popup:</p>
            <table style="width:100%; border-collapse:collapse;">
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Name:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Email:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">
                  <a href="mailto:${email}" style="color:#0d6efd; text-decoration:none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr style="background:#f8f9fa;">
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef;">Phone:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${phone}</td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding:12px 8px; font-weight:600; border-bottom:1px solid #e9ecef; vertical-align:top;">Message:</td>
                <td style="padding:12px 8px; border-bottom:1px solid #e9ecef;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background:#f1f3f5; color:#555; padding:12px 24px; border-top:1px solid #e9ecef; border-radius:0 0 8px 8px; font-size:13px;">
            <p style="margin:0;">📬 This email was automatically generated from your website side popup.</p>
          </div>
        </div>
      </div>
    `;

    // ---------- User "Thank You" Email ----------
    const userHtmlContent = `
      <div style="font-family: Arial, sans-serif; background-color:#f8f9fa; padding: 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
          <div style="background:linear-gradient(135deg, #117d6b 0%, #15184c 100%); color:#ffffff; padding:32px 24px; border-radius:8px 8px 0 0; text-align:center;">
            <h1 style="margin:0 0 8px 0; font-size:28px;">Thank You, ${name}!</h1>
          </div>
          <div style="padding:32px 24px; color:#333333;">
            <p style="font-size:16px; line-height:1.6; margin-bottom:16px;">
              We’ve received your project details and our team will review them shortly.
            </p>
            <p style="font-size:16px; line-height:1.6; margin-bottom:16px;">
              We’ll get back to you as soon as possible to discuss next steps.
            </p>
            <div style="background:#f8f9fa; padding:20px; border-radius:8px; border-left:4px solid #117d6b; margin:24px 0;">
              <p style="margin:0 0 10px 0; font-weight:600; color:#117d6b; font-size:15px;">📋 Summary of your message:</p>
              <p style="margin:0; font-size:14px; line-height:1.6;">
                <strong>Name:</strong> ${name}<br/>
                <strong>Email:</strong> ${email}<br/>
                ${phone ? `<strong>Phone:</strong> ${phone}<br/>` : ""}
                <strong>Message:</strong> ${message}
              </p>
            </div>
            <p style="font-size:16px; line-height:1.6; margin-bottom:8px;">
              Thank you and best regards,
            </p>
            <p style="font-size:16px; line-height:1.6; margin-bottom:16px;">
              <strong>Pine Book Publishing Team</strong>
            </p>
          </div>
          <div style="background:#f1f3f5; color:#666; padding:24px; border-top:1px solid #e9ecef; border-radius:0 0 8px 8px; text-align:center;">
            <p style="margin:0; font-size:14px;">
              If you did not submit this request, you can safely ignore this email.
            </p>
          </div>
        </div>
      </div>
    `;

    // Admin email
    await transporter.sendMail({
      from: `"Pine Book Publishing" <sales@pinebookpublishing.com>`,
      to: "sales@pinebookpublishing.com",
      subject: `📧 New Side Popup Lead - ${name}`,
      html: adminHtmlContent,
    });

    // User email
    await transporter.sendMail({
      from: `"Pine Book Publishing" <sales@pinebookpublishing.com>`,
      to: email,
      subject: "We’ve received your message",
      html: userHtmlContent,
    });

    return res.status(200).json({
      success: true,
      message: "✅ Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "❌ Failed to send message.",
      error: error.message,
    });
  }
}

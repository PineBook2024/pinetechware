"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./utils/LenisProvider";
import { PopupProvider } from "@/context/PopupContext";
import Script from "next/script";
import SocialSidebar from "@/components/SocialSidebar/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "PineTechware | Software & Digital Solutions",
//   description:
//     "Expert web and software Marketing Company for modern businesses.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="zoho-salesiq-init" strategy="beforeInteractive">
          {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqbd2efc989c2066a4e9c5a1d1fc2a2e5aa947de2ffdfc7fef65f0b82ad608ba33"
          strategy="afterInteractive"
          defer
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SDVD9HEY4L"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDVD9HEY4L');
          `}
        </Script>

        <Script id="linkedin-partner-id" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "10531185";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>

        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <noscript>
          <a
            href="https://www.text.com/chat-with-ai-agent/eacfe277-ea71-4ece-b8fc-b4c78fd34c3d/"
            rel="nofollow"
          >
            Chat with AI Agent
          </a>
          {", powered by "}
          <a href="https://www.text.com/" rel="noopener nofollow" target="_blank">
            Text
          </a>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=10531185&fmt=gif"
          />
        </noscript>
        <LenisProvider>
          <PopupProvider>
            <SocialSidebar />
            {children}
          </PopupProvider>
        </LenisProvider>
      </body>
    </html>
  );
}

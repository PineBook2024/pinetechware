"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ZendeskChat() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const checkZendesk = setInterval(() => {
      if (typeof window.$zopim !== "undefined" && window.$zopim.livechat) {
        window.$zopim.livechat.window.show();
        clearInterval(checkZendesk);
      }
    }, 1000);

    return () => clearInterval(checkZendesk);
  }, []);

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=6ad75b0f-d085-4cae-9a7a-48abeb69b973"
      strategy="afterInteractive"
    />
  );
}

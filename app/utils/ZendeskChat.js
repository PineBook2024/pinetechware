"use client";

import { useEffect } from "react";
import Script from "next/script";

function showZendeskWidget() {
  if (typeof window === "undefined") return false;

  const isDesktop = window.innerWidth >= 768;

  if (typeof window.zE === "function") {
    try {
      window.zE("messenger", "show");
      if (isDesktop) window.zE("messenger", "open");
      return true;
    } catch {
      // Fall back to Web Widget Classic API below.
    }

    try {
      window.zE("webWidget", "show");
      if (isDesktop) window.zE("webWidget", "open");
      return true;
    } catch {
      return false;
    }
  }

  if (window.$zopim?.livechat) {
    if (isDesktop) window.$zopim.livechat.window.show();
    return true;
  }

  return false;
}

export default function ZendeskChat() {
  useEffect(() => {
    const checkZendesk = setInterval(() => {
      if (showZendeskWidget()) {
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
      onLoad={showZendeskWidget}
    />
  );
}

"use client";

import { useEffect } from "react";

const DEFAULT_ZENDESK_KEY = "6ad75b0f-d085-4cae-9a7a-48abeb69b973";

export default function ZendeskChat({ zendeskKey = DEFAULT_ZENDESK_KEY }) {
  useEffect(() => {
    const showZendeskWidget = () => {
      if (typeof window.zE !== "function") return false;

      try {
        window.zE("webWidget", "show");
        return true;
      } catch {
        return false;
      }
    };

    const bindZendeskEvents = () => {
      if (typeof window.zE !== "function") return;

      window.zE("webWidget:on", "chat:connected", () => {
        window.zE("webWidget:on", "chat:message", (event) => {
          if (event?.nick !== "agent") return;

          window.zE("webWidget:get", "chat:status", (status) => {
            if (status === "closed") {
              window.zE("webWidget", "open");
            }
          });
        });
      });
    };

    const loadZendesk = () => {
      const existingScript = document.getElementById("ze-snippet");

      if (existingScript) {
        showZendeskWidget();
        bindZendeskEvents();
        return;
      }

      const script = document.createElement("script");
      script.id = "ze-snippet";
      script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
      script.async = true;
      script.onload = () => {
        showZendeskWidget();
        bindZendeskEvents();
      };

      document.body.appendChild(script);
    };

    if (!window.zE) {
      loadZendesk();
    } else {
      showZendeskWidget();
      bindZendeskEvents();
    }

    const checkZendesk = setInterval(() => {
      if (showZendeskWidget()) {
        clearInterval(checkZendesk);
      }
    }, 500);

    return () => {
      clearInterval(checkZendesk);

      if (typeof window.zE === "function") {
        window.zE("webWidget", "hide");
      }
    };
  }, [zendeskKey]);

  return null;
}

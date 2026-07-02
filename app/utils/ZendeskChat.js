"use client";

import { useEffect } from "react";

const DEFAULT_ZENDESK_KEY = "6ad75b0f-d085-4cae-9a7a-48abeb69b973";
const ZENDESK_SCRIPT_ID = "ze-snippet";

export default function ZendeskChat({ zendeskKey = DEFAULT_ZENDESK_KEY }) {
  useEffect(() => {
    let checkZendesk;
    let attempts = 0;

    const hasZendeskFrame = () =>
      Boolean(
        document.querySelector(
          'iframe[id*="launcher"], iframe[id*="webWidget"], iframe[title*="Chat"], iframe[title*="chat"], iframe[src*="zendesk"], iframe[src*="zopim"], iframe[src*="zdassets"]'
        )
      );

    const runZendeskCommand = (...args) => {
      if (typeof window.zE !== "function") return;

      try {
        window.zE(...args);
      } catch {
        // Zendesk Messaging and Classic Web Widget use different commands.
        // Unsupported commands throw after the snippet finishes booting.
      }
    };

    const showZendeskWidget = () => {
      runZendeskCommand("messenger", "show");
      runZendeskCommand("webWidget", "show");
      runZendeskCommand("webWidget", "updateSettings", {
        webWidget: {
          launcher: {
            mobile: {
              labelVisible: true,
            },
          },
        },
      });

      return hasZendeskFrame();
    };

    const startZendeskCheck = () => {
      if (showZendeskWidget()) return;

      checkZendesk = window.setInterval(() => {
        attempts += 1;

        if (showZendeskWidget() || attempts >= 60) {
          window.clearInterval(checkZendesk);
        }
      }, 500);
    };

    const existingScript = document.getElementById(ZENDESK_SCRIPT_ID);

    if (existingScript) {
      startZendeskCheck();
      return () => {
        if (checkZendesk) window.clearInterval(checkZendesk);
      };
    }

    window.zESettings = {
      webWidget: {
        color: {
          theme: "#046bd2",
        },
        offset: {
          horizontal: "20px",
          vertical: "20px",
        },
        launcher: {
          chatLabel: {
            "*": "Chat with us",
          },
          mobile: {
            labelVisible: true,
          },
        },
      },
    };

    const script = document.createElement("script");
    script.id = ZENDESK_SCRIPT_ID;
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
    script.async = true;
    script.onload = startZendeskCheck;
    script.onerror = () => {
      if (checkZendesk) window.clearInterval(checkZendesk);
    };

    document.body.appendChild(script);

    startZendeskCheck();

    return () => {
      if (checkZendesk) window.clearInterval(checkZendesk);

      if (script.parentNode) {
        script.onload = null;
        script.onerror = null;
      }
    };
  }, [zendeskKey]);

  return null;
}

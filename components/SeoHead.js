"use client";
import { useEffect } from "react";

const SITE_URL = "https://www.pinetechware.com";

const seoByPath = {
  "/": { canonicalPath: "/", keywords: "Pine Techware, software development company, digital solutions" },
  "/website-designing-services": { canonicalPath: "/website-designing-services", keywords: "website designing services" },
  "/website-development-services": { canonicalPath: "/website-development-services", keywords: "website development services" },
  "/e-commerce-solution": { canonicalPath: "/e-commerce-solution", keywords: "ecommerce solutions" },
  "/custom-application-services": { canonicalPath: "/custom-application-services", keywords: "custom application services" },
  "/shopify-store-development": { canonicalPath: "/shopify-store-development", keywords: "shopify store development" },
  "/asp-net-development": { canonicalPath: "/asp-net-development", keywords: "asp net development" },
  "/ios-app-development-services": { canonicalPath: "/ios-app-development-services", keywords: "ios app development services" },
  "/android-app-development-services": { canonicalPath: "/android-app-development-services", keywords: "android app development services" },
  "/kotlin-app-development": { canonicalPath: "/kotlin-app-development", keywords: "kotlin app development" },
  "/react-native-app": { canonicalPath: "/react-native-app", keywords: "react native app" },
  "/flutter-app-development-services": { canonicalPath: "/flutter-app-development-services", keywords: "flutter app development services" },
  "/swift-app-development": { canonicalPath: "/swift-app-development", keywords: "Swift App Development Services" },
  "/mobile-game-development": { canonicalPath: "/mobile-game-development", keywords: "mobile game development services" },
  "/unity-game-development": { canonicalPath: "/unity-game-development", keywords: "unity game development company" },
  "/unreal-game-development": { canonicalPath: "/unreal-game-development", keywords: "unreal game development company" },
  "/blockchain-game-development": { canonicalPath: "/blockchain-game-development", keywords: "blockchain game development company" },
  "/2d-game-development": { canonicalPath: "/2d-game-development", keywords: "2d game development" },
  "/3d-game-development": { canonicalPath: "/3d-game-development", keywords: "3d game development services" },
  "/web3-game-development": { canonicalPath: "/web3-game-development", keywords: "web 3 game development services" },
  "/multiplayer-game-development": { canonicalPath: "/multiplayer-game-development", keywords: "multiplayer game development" },
  "/game-testing": { canonicalPath: "/game-testing", keywords: "game testing services" },
  "/email-marketing-service": { canonicalPath: "/email-marketing-service", keywords: "email marketing services" },
  "/search-engine-optimization": { canonicalPath: "/search-engine-optimization", keywords: "Search Engine optimization Services" },
  "/social-media-marketing": { canonicalPath: "/social-media-marketing", keywords: "social media marketing services" },
  "/ppc-management": { canonicalPath: "/ppc-management", keywords: "ppc management services" },
  "/custom-graphic-design": { canonicalPath: "/custom-graphic-design", keywords: "custom graphic design services" },
  "/logo-design-services": { canonicalPath: "/logo-design-services", keywords: "Logo design Services" },
  "/branding-services": { canonicalPath: "/branding-services", keywords: "branding services" },
  "/video-animation-services": { canonicalPath: "/video-animation-services", keywords: "video animation services usa" },
};

const aliases = {
  "/Website-Designing": "/website-designing-services",
  "/Website-Development": "/website-development-services",
  "/E-Commerce-Solution": "/e-commerce-solution",
  "/Custom-Application": "/custom-application-services",
  "/Shopify-Store": "/shopify-store-development",
  "/ASP-App": "/asp-net-development",
  "/IOS-App": "/ios-app-development-services",
  "/Android-App": "/android-app-development-services",
  "/Kotlin-App": "/kotlin-app-development",
  "/React-Native-App": "/react-native-app",
  "/Flutter-App": "/flutter-app-development-services",
  "/Swift-App": "/swift-app-development",
  "/Mobile-Game-Development": "/mobile-game-development",
  "/Unity-Game-Development": "/unity-game-development",
  "/Unreal-Game-Development": "/unreal-game-development",
  "/Blockchain-Game-Development": "/blockchain-game-development",
  "/2D-Game-Development": "/2d-game-development",
  "/3D-Game-Development": "/3d-game-development",
  "/Web3-Game-Development": "/web3-game-development",
  "/Multiplayer-Game-Development": "/multiplayer-game-development",
  "/Game-Testing": "/game-testing",
  "/Email-Marketing-Service": "/email-marketing-service",
  "/Search-Engine-Optimization": "/search-engine-optimization",
  "/Social-Media-Marketing": "/social-media-marketing",
  "/PPC-Management": "/ppc-management",
  "/Custom-Graphic-Design": "/custom-graphic-design",
  "/Logo-Design": "/logo-design-services",
  "/Professional-Branding": "/branding-services",
  "/Video-Animation": "/video-animation-services",
};

function upsertMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function upsertCanonical(href) {
  if (!href) return;
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

export default function SeoHead({ title, description, keywords, canonical }) {
  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    const mappedPath = aliases[currentPath] || currentPath;
    const pageSeo = seoByPath[mappedPath];

    //  Title 
    if (title) document.title = title;

    //  Meta description 
    upsertMeta("description", description);
    upsertMeta("keywords", keywords || pageSeo?.keywords);
    upsertCanonical(canonical || (pageSeo?.canonicalPath ? `${SITE_URL}${pageSeo.canonicalPath === "/" ? "/" : pageSeo.canonicalPath}` : undefined));

    //  Favicon
    const existingFavicon = document.querySelector("link[rel='icon']");
    const faviconUrl = "/images/favicon.jpg"; 

    if (!existingFavicon) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = faviconUrl;
      document.head.appendChild(link);
    } else {
      existingFavicon.href = faviconUrl;
    }
  }, [title, description, keywords, canonical]);

  return null; }

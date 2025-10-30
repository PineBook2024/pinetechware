"use client";
import { useEffect } from "react";

export default function SeoHead({ title, description }) {
  useEffect(() => {
    //  Title 
    if (title) document.title = title;

    //  Meta description 
    if (description) {
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

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
  }, [title, description]);

  return null; }

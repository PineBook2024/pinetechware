"use client";

import { useMemo, useState } from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import SeoHead from "@/components/SeoHead";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import Trigger from "@/components/Trigger/Trigger";
import { usePopup } from "@/context/PopupContext";

import { pricingPackages, pricingTabs } from "./pricingData";
import styles from "./pricing.module.css";

const customWebPortalPackage = {
  title: "Customized Web Portal",
  price: "$4,999.99",
  oldPrice: "$9,999.98",
  features: [
    "Complete Custom Design & Development",
    "Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)",
    "Unique, User Friendly, Interactive, Dynamic, High End UI Design",
    "Unlimited Banner Designs",
    "Interactive Sliding Banners",
    "Special Hover Effects",
    "Unlimited Stock Images",
    "User Signup Area",
    "Client/User Dashboard Area",
    "Custom Coding and Development",
    "Content Management System (Custom)",
    "Online Appointment/Scheduling/Online Ordering Integration (Optional)",
    "Online Payment Integration (Optional)",
    "Multi Lingual (Optional)",
    "Custom Dynamic Forms (Optional)",
    "Shopping Cart Integration (Optional)",
    "Complete Database Creation",
    "Signup Automated Email Authentication",
    "Web Traffic Analytics Integration",
    "3rd Party API Integrations",
    "Signup Area (For Newsletters, Offers etc.)",
    "Search Bar for Easy Search",
    "Live Feeds of Social Networks integration (Optional)",
    "Search Engine Submission",
    "Module-wise Architecture",
    "Extensive Admin Panel",
    "Award Winning Team of Expert Designers and Developers",
    "Complete Deployment",
    "Complete Source Files",
    "Dedicated Project Manager",
    "100% Ownership Rights",
    "100% Satisfaction Guarantee",
    "100% Money Back Guarantee",
  ],
};

const isPriceLike = (value) => /\d/.test(value || "");

const normalizePrice = (value) => {
  if (!value) return "Custom Quote";
  const trimmed = value.trim();

  if (trimmed === "$" || trimmed === "$$") return "Custom Quote";

  const fixedEdgeDollar = trimmed.replace(/^(\d[\d,.]*)\$$/, "$$$1");
  return fixedEdgeDollar;
};

const normalizeFeatures = (features, title) => {
  const cleaned = (features || []).map((item) => item.trim()).filter(Boolean);

  if (title === "Social App") {
    const note = "Note: Customizable modules and revisions included depending on your requirements.";
    if (!cleaned.includes(note)) cleaned.push(note);
  }

  if (title === "BASIC") {
    const needsLine = "Around 5 Integrations";
    if (!cleaned.includes(needsLine)) cleaned.splice(1, 0, needsLine);
  }

  return cleaned;
};

export default function PricingPage() {
  const { openPopup } = usePopup();
  const [activeTab, setActiveTab] = useState("website");
  const isAppDevelopmentTab = activeTab === "APP1";

  const packages = useMemo(() => {
    const tabPackages = [...(pricingPackages[activeTab] || [])].map((pkg) => ({
      ...pkg,
      price: normalizePrice(pkg.price),
      oldPrice: isPriceLike(pkg.oldPrice) ? pkg.oldPrice : "",
      features: normalizeFeatures(pkg.features, pkg.title),
    }));

    if (activeTab === "website") {
      tabPackages.push(customWebPortalPackage);
    }

    return tabPackages;
  }, [activeTab]);

  return (
    <div className="bg-white">
      <SeoHead
        title="Pricing Packages | Pine Techware"
        description="Explore pricing packages across web design, ecommerce, WordPress, app development, branding, logo, video animation, and SEO."
      />

      <div data-theme="light">
        <Navbar />
      </div>

      <section className="bg-white">
        <div className="container xl:max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-32 pb-16 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-7xl mx-auto">
            <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl text-black xl:!leading-[58px]">
              Pricing Packages
            </h1>
            <p className="text-black/70 mt-5 max-w-3xl text-base xl:text-lg leading-7">
              Choose a package that matches your business stage. Same services, clear pricing, and fast delivery.
            </p>

            <div className="flex gap-3 flex-wrap pt-10 pb-8">
              {pricingTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-semibold rounded-full transition cursor-pointer border ${
                    activeTab === tab.id
                      ? "bg-black border-black text-white"
                      : "bg-white border-black/15 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
              {packages.map((pkg, index) => (
                <article
                  key={`${pkg.title}-${index}`}
                  className="rounded-3xl border border-black/15 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-7 border-b border-black/10">
                    <h3 className="text-2xl font-extrabold text-black leading-tight">{pkg.title}</h3>

                    <div className="pt-4">
                      {!isAppDevelopmentTab && (
                        <>
                          <p className="text-5xl font-extrabold tracking-tight text-black">{pkg.price}</p>
                          {pkg.oldPrice && (
                            <p className="pt-2 text-black/70 line-through font-semibold">{pkg.oldPrice}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  <div className="p-7">
                    <h4 className="text-xl font-bold text-black">Package Includes</h4>

                    <ul className="mt-4 space-y-2 max-h-[320px] overflow-y-auto pr-2 text-black/80 text-[15px] leading-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={`${pkg.title}-feature-${featureIndex}`} className="flex items-start gap-2">
                          <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#3BB9E1] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 flex items-center justify-between gap-3 border-t border-black/10 mt-6">
                      <button
                        onClick={openPopup}
                        className="text-sm font-semibold text-black hover:underline text-left"
                      >
                        Live Chat
                      </button>
                      <a href="tel:+13075221099" className="text-sm font-semibold text-black hover:underline">
                        (307) 522-1099
                      </a>
                    </div>

                    <button onClick={openPopup} className={styles.button}>
                      <span className={styles.button_lg}>
                        <span className={styles.button_sl} />
                        <span className={styles.button_text}>
                          {isAppDevelopmentTab ? "Get a Quote" : "Order Now"}
                        </span>
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Trigger
        title="Ready to choose a package and get started?"
        description="Let's build your next digital product."
        buttonText="Start Your Project"
      />

      <Sidepopup />
      <Footer />
    </div>
  );
}

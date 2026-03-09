'use client'

import { useMemo, useState } from "react";
import Image from "next/image";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import { usePopup } from "@/context/PopupContext";
import SeoHead from "@/components/SeoHead";
import Trigger from "@/components/Trigger/Trigger";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

function PortfolioStackCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[320px] mx-auto h-[270px] sm:h-[300px] cursor-pointer"
      onClick={onClick}
    >
      {/* Left */}
      <div
        className="
          absolute left-0 top-1/2 z-10 w-[78%] -translate-y-1/2
          translate-x-6 rotate-[-7deg]
          transition-all duration-500 ease-out
          group-hover:-translate-x-2 group-hover:rotate-[-12deg]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-black/5">
          <Image
            src={item.images[0]}
            alt={`${item.title} preview 1`}
            width={500}
            height={700}
            className="h-[210px] sm:h-[235px] w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Right */}
      <div
        className="
          absolute right-0 top-1/2 z-10 w-[78%] -translate-y-1/2
          -translate-x-6 rotate-[7deg]
          transition-all duration-500 ease-out
          group-hover:translate-x-2 group-hover:rotate-[12deg]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-black/5">
          <Image
            src={item.images[2]}
            alt={`${item.title} preview 3`}
            width={500}
            height={700}
            className="h-[210px] sm:h-[235px] w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Center */}
      <div
        className="
          absolute left-1/2 top-1/2 z-20 w-[82%] -translate-x-1/2 -translate-y-1/2
          transition-all duration-500 ease-out
          group-hover:-translate-y-[54%]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-black/5">
          <Image
            src={item.images[1]}
            alt={`${item.title} preview 2`}
            width={500}
            height={700}
            className="h-[240px] sm:h-[265px] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function PortfolioSingleCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[360px] mx-auto aspect-[1/1] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-3xl bg-white shadow-md opacity-40 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-3xl bg-white shadow-lg opacity-70 -translate-x-2 -translate-y-2" />

      <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/5">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={700}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function PortfolioVideoCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[360px] mx-auto aspect-[1/1] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-3xl bg-white shadow-md opacity-40 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-3xl bg-white shadow-lg opacity-70 -translate-x-2 -translate-y-2" />

      <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/5">
        <Image
          src={item.poster}
          alt={item.title}
          width={700}
          height={700}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
            <span className="ml-1 text-black text-2xl">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { openPopup } = usePopup();

  const serviceTabs = [
    "Web",
    "Logo",
    "Branding",
    "2D/3D Illustration",
    "Video",
    "Mobile App",
  ];

  const webCategories = [
    "All",
    "Financial Services",
    "Ecommerce",
    "Informative",
    "Real Estate",
    "Restaurants",
    "Loan & Mortgage Services",
    "Healthcare",
    "Contractors",
    "Wellness",
    "Law Firms",
  ];

  const logoCategories = [
    "All",
    "Animals And Pets",
    "Beauty And Cosmetics",
    "Business And Marketing",
    "Cannabis",
    "Cleaning",
    "Clothing And Apparel",
    "Dentist",
    "Education",
    "Entertainment And Events-Music",
    "Fitness And Gym",
    "Home Real Estate And Renovation",
  ];

  const portfolioItems = [
    // WEB
    {
      title: "Cuisine Culture",
      service: "Web",
      category: "Restaurants",
      images: [
        "/images/Portfolio/Web-Development/pack-1-1.webp",
        "/images/Portfolio/Web-Development/pack-2-2.webp",
        "/images/Portfolio/Web-Development/pack-3-3.webp",
      ],
      link: "https://cuisineculture.tv",
    },
    {
      title: "Boulevard Cafe",
      service: "Web",
      category: "Restaurants",
      images: [
        "/images/Portfolio/Web-Development/pack-4-4.webp",
        "/images/Portfolio/Web-Development/pack-5-5.webp",
        "/images/Portfolio/Web-Development/pack-6-6.webp",
      ],
      link: "https://theboulevardcafe.com",
    },
    {
      title: "Urban Dining",
      service: "Web",
      category: "Restaurants",
      images: [
        "/images/Portfolio/Web-Development/pack-7-7.webp",
        "/images/Portfolio/Web-Development/pack-8-8.webp",
        "/images/Portfolio/Web-Development/pack-9-9.webp",
      ],
      link: "https://urban-dining.example.com",
    },
    {
      title: "Define Financial",
      service: "Web",
      category: "Financial Services",
      images: [
        "/images/Portfolio/Web-Development/pack-1-1.webp",
        "/images/Portfolio/Web-Development/pack-4-4.webp",
        "/images/Portfolio/Web-Development/pack-7-7.webp",
      ],
      link: "https://www.definefinancial.com",
    },
    {
      title: "CC Homes",
      service: "Web",
      category: "Real Estate",
      images: [
        "/images/Portfolio/Web-Development/pack-2-2.webp",
        "/images/Portfolio/Web-Development/pack-5-5.webp",
        "/images/Portfolio/Web-Development/pack-8-8.webp",
      ],
      link: "https://cchomes.com",
    },
    {
      title: "Physician One",
      service: "Web",
      category: "Healthcare",
      images: [
        "/images/Portfolio/Web-Development/pack-3-3.webp",
        "/images/Portfolio/Web-Development/pack-6-6.webp",
        "/images/Portfolio/Web-Development/pack-9-9.webp",
      ],
      link: "https://physicianoneurgentcare.com",
    },
    {
      title: "Mortgage Plus",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [
        "/images/Portfolio/Web-Development/pack-1-1.webp",
        "/images/Portfolio/Web-Development/pack-5-5.webp",
        "/images/Portfolio/Web-Development/pack-9-9.webp",
      ],
      link: "https://mortgage-plus.example.com",
    },
    {
      title: "Contractor Build",
      service: "Web",
      category: "Contractors",
      images: [
        "/images/Portfolio/Web-Development/pack-2-2.webp",
        "/images/Portfolio/Web-Development/pack-6-6.webp",
        "/images/Portfolio/Web-Development/pack-7-7.webp",
      ],
      link: "https://contractor-build.example.com",
    },

    // LOGO
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-1.webp",
    },
    {
      title: "Pacifica Consulting",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-2.webp",
    },
    {
      title: "San & San Consultant",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-3.webp",
    },
    {
      title: "Fifth Element",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-4.webp",
    },
    {
      title: "A&R Insurance",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-5.webp",
    },
    {
      title: "Mitosky Communications",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-6.webp",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-7.webp",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-8.webp",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Business And Marketing",
      image: "/images/Portfolio/Logo/logo-9.webp",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "/images/Portfolio/Logo/logo-1.webp",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "/images/Portfolio/Logo/logo-2.webp",
    },

    // BRANDING
    {
      title: "Erö Brand Kit",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-1.webp",
    },
    {
      title: "High Life Packaging",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-2.webp",
    },
    {
      title: "Geometric Identity",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-3.webp",
    },
    {
      title: "Planable Brand Assets",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-4.webp",
    },
    {
      title: "Minimal Box Design",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-5.webp",
    },
    {
      title: "Black Angus Packaging",
      service: "Branding",
      image: "/images/Portfolio/Branding/branding-6.webp",
    },

    // 2D/3D ILLUSTRATION
    {
      title: "Character Concept",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-1.webp",
    },
    {
      title: "Product Render",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-2.webp",
    },
    {
      title: "Creative Scene",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-3.webp",
    },
    {
      title: "Architectural Visual",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-4.webp",
    },
    {
      title: "Product Modeling",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-5.webp",
    },
    {
      title: "Environment Art",
      service: "2D/3D Illustration",
      image: "/images/Portfolio/Illustration/illustration-6.webp",
    },

    // VIDEO
    {
      title: "Restaurant Promo",
      service: "Video",
      poster: "/images/Portfolio/Video/video-1-poster.webp",
      videoSrc: "/videos/Portfolio/video-1.mp4",
    },
    {
      title: "Brand Campaign Reel",
      service: "Video",
      poster: "/images/Portfolio/Video/video-2-poster.webp",
      videoSrc: "/videos/Portfolio/video-2.mp4",
    },
    {
      title: "Healthcare Ad",
      service: "Video",
      poster: "/images/Portfolio/Video/video-3-poster.webp",
      videoSrc: "/videos/Portfolio/video-3.mp4",
    },
    {
      title: "Real Estate Showcase",
      service: "Video",
      poster: "/images/Portfolio/Video/video-4-poster.webp",
      videoSrc: "/videos/Portfolio/video-4.mp4",
    },
    {
      title: "Social Media Reel",
      service: "Video",
      poster: "/images/Portfolio/Video/video-5-poster.webp",
      videoSrc: "/videos/Portfolio/video-5.mp4",
    },
    {
      title: "Corporate Intro",
      service: "Video",
      poster: "/images/Portfolio/Video/video-6-poster.webp",
      videoSrc: "/videos/Portfolio/video-6.mp4",
    },

    // MOBILE APP
    {
      title: "Finance App",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-1.webp",
    },
    {
      title: "Health Tracker",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-2.webp",
    },
    {
      title: "Shop Smart",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-3.webp",
    },
    {
      title: "Home Connect",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-4.webp",
    },
    {
      title: "Travel Planner",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-5.webp",
    },
    {
      title: "Food Delivery UI",
      service: "Mobile App",
      image: "/images/Portfolio/App-Development/app-6.webp",
    },
  ];

  const [activeService, setActiveService] = useState("Web");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const showSidebar = activeService === "Web" || activeService === "Logo";

  const currentCategories = useMemo(() => {
    if (activeService === "Web") return webCategories;
    if (activeService === "Logo") return logoCategories;
    return [];
  }, [activeService]);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const serviceMatch = item.service === activeService;

      if (!showSidebar) return serviceMatch;

      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      return serviceMatch && categoryMatch;
    });
  }, [activeService, activeCategory, showSidebar]);

  const gallerySlides = useMemo(() => {
    return filteredItems.flatMap((item) => {
      if (item.service === "Video") {
        return [
          {
            type: "video",
            width: 1280,
            height: 720,
            poster: item.poster,
            sources: [
              {
                src: item.videoSrc,
                type: "video/mp4",
              },
            ],
          },
        ];
      }

      if (item.service === "Web" && item.images?.length) {
        return item.images.map((img) => ({
          src: img,
          alt: item.title,
          width: 1400,
          height: 1800,
        }));
      }

      return [
        {
          src: item.image,
          alt: item.title,
          width: 1400,
          height: 1400,
        },
      ];
    });
  }, [filteredItems]);

  const getSlideIndex = (clickedItemIndex) => {
    let count = 0;

    for (let i = 0; i < clickedItemIndex; i++) {
      if (filteredItems[i].service === "Web" && filteredItems[i].images?.length) {
        count += filteredItems[i].images.length;
      } else {
        count += 1;
      }
    }

    return count;
  };

  const handleTabChange = (tab) => {
    setActiveService(tab);
    setActiveCategory("All");
  };

  const openWebLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <SeoHead
        title="Our Work & Case Studies in Innovation | Pine Techware"
        description="Explore Pine Techware's portfolio across websites, logos, branding, illustration, video, and mobile applications."
      />

      <div data-theme="light">
        <Navbar />
      </div>

      <section className="bg-white">
        <div className="container xl:max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-32 pb-16 lg:pb-32 lg:px-8">
          <div className="max-w-3xl xl:max-w-7xl mx-auto">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl text-black lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>
                  Happy Clients
                  <br />
                  of Pine Techware
                </span>
              </h2>
            </div>

            <p className="text-black/70 mt-6 max-w-3xl text-base xl:text-lg leading-7">
              Explore our portfolio across websites, logos, branding, illustration,
              video, and mobile applications.
            </p>

            {/* Tabs */}
            <div className="flex gap-4 flex-wrap pt-10 pb-8">
              {serviceTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 font-semibold rounded-full transition cursor-pointer ${
                    activeService === tab
                      ? "bg-black text-white"
                      : "bg-white border border-black/15 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              className={
                showSidebar
                  ? "grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10 xl:gap-14"
                  : ""
              }
            >
              {/* Sidebar */}
              {showSidebar && (
                <aside className="lg:sticky lg:top-28 h-fit border border-black/10 rounded-3xl p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-5">
                    Categories
                  </h3>

                  <div className="flex flex-col gap-3">
                    {currentCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-left rounded-2xl px-4 py-3 font-medium transition ${
                          activeCategory === category
                            ? "bg-black text-white"
                            : "bg-[#f8f8f8] text-black hover:bg-black hover:text-white"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </aside>
              )}

              {/* Content */}
              <div>
                <div
                  className={
                    activeService === "Web"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 md:gap-y-16 gap-x-8 xl:gap-x-10"
                      : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-8 xl:gap-x-10"
                  }
                >
                  {filteredItems.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="group">
                      {item.service === "Web" ? (
                        <>
                          <PortfolioStackCard
                            item={item}
                            onClick={() => openWebLink(item.link)}
                          />

                          <div className="pt-5 px-1 text-center">
                            <div className="flex items-center justify-center gap-3 flex-wrap">
                              <h4 className="text-lg font-bold text-black">
                                {item.title}
                              </h4>
                              <span className="text-xs rounded-full border border-black/10 px-3 py-1 text-black/70 whitespace-nowrap">
                                {item.category}
                              </span>
                            </div>

                            <button
                              onClick={() => openWebLink(item.link)}
                              className="inline-block mt-3 text-sm font-semibold text-black hover:underline"
                            >
                              Visit Website
                            </button>
                          </div>
                        </>
                      ) : item.service === "Video" ? (
                        <>
                          <PortfolioVideoCard
                            item={item}
                            onClick={() => {
                              setLightboxIndex(getSlideIndex(index));
                              setLightboxOpen(true);
                            }}
                          />

                          <div className="pt-5 px-1 text-center">
                            <h4 className="text-lg font-bold text-black">
                              {item.title}
                            </h4>
                          </div>
                        </>
                      ) : (
                        <>
                          <PortfolioSingleCard
                            item={item}
                            onClick={() => {
                              setLightboxIndex(getSlideIndex(index));
                              setLightboxOpen(true);
                            }}
                          />

                          <div className="pt-5 px-1 text-center">
                            <h4 className="text-lg font-bold text-black">
                              {item.title}
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-black/20 p-10 text-center text-black/60">
                    No portfolio items found for this selection.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={gallerySlides}
        plugins={[Video]}
      />

      <Trigger
        title="Ready to turn your ideas into impactful digital experiences?"
        description="Create Without Limits!"
        buttonText="Start Your Project"
      />

      <Sidepopup />
      <Footer />
    </div>
  );
}
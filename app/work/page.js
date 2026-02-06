'use client'
import { useState } from "react";
import Image from 'next/image'
import Featured from '@/components/Featured/Featured'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import SeoHead from "@/components/SeoHead";
import Trigger from '@/components/Trigger/Trigger'


import React from 'react'

export default function work() {
    const { openPopup, closePopup, isOpen } = usePopup();

   const tabData = {
  "Web Development": {
    images: [
      "/images/Portfolio/web-development/pack-1-1.webp",
      "/images/Portfolio/web-development/pack-1-2.webp",
      "/images/Portfolio/web-development/pack-1-3.webp",
      "/images/Portfolio/web-development/pack-1-4.webp",
      "/images/Portfolio/web-development/pack-1-5.webp",
      "/images/Portfolio/web-development/pack-1-6.webp",
      "/images/Portfolio/web-development/pack-1-7.webp",
      "/images/Portfolio/web-development/pack-1-8.webp",
      "/images/Portfolio/web-development/pack-1-9.webp",
    ],
  },

  "Branding": {
    images: [
      "/images/Portfolio/branding/branding-1.webp",
      "/images/Portfolio/branding/branding-2.webp",
      "/images/Portfolio/branding/branding-3.webp",
      "/images/Portfolio/branding/branding-4.webp",
      "/images/Portfolio/branding/branding-5.webp",
      "/images/Portfolio/branding/branding-6.webp",
      "/images/Portfolio/branding/branding-7.webp",
      "/images/Portfolio/branding/branding-8.webp",
      "/images/Portfolio/branding/branding-9.webp",
    ],
  },

  "Logo": {
    images: [
      "/images/Portfolio/logo/logo-1.webp",
      "/images/Portfolio/logo/logo-2.webp",
      "/images/Portfolio/logo/logo-3.webp",
      "/images/Portfolio/logo/logo-4.webp",
      "/images/Portfolio/logo/logo-5.webp",
      "/images/Portfolio/logo/logo-6.webp",
      "/images/Portfolio/logo/logo-7.webp",
      "/images/Portfolio/logo/logo-8.webp",
      "/images/Portfolio/logo/logo-9.webp",
    ],
  },

  "App Development": {
    images: [
      "/images/Portfolio/app-development/app-1.webp",
      "/images/Portfolio/app-development/app-2.webp",
      "/images/Portfolio/app-development/app-3.webp",
      "/images/Portfolio/app-development/app-4.webp",
      "/images/Portfolio/app-development/app-5.webp",
      "/images/Portfolio/app-development/app-6.webp",
      "/images/Portfolio/app-development/app-7.webp",
      "/images/Portfolio/app-development/app-8.webp",
      "/images/Portfolio/app-development/app-9.webp",
    ],
  },
};




    const tabKeys = Object.keys(tabData);
    const [activeTab, setActiveTab] = useState(tabKeys[0]);

    return (
        <div>

            <SeoHead
                title="Our Work & Case Studies in Innovation | Pine Techware"
                description="Explore Pine Techware's portfolio - Our real-world solutions across FinTech, E-commerce, and more. See how we turn ideas into best digital experiences."
            />

            <div data-theme="light">
                <Navbar />
            </div>

            <section className="bg-white">
                <div className="container xl:max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-32 pb-16 lg:pb-32 lg:px-8">
                    <div className="max-w-3xl xl:max-w-7xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl text-black lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span> Happy Clients<br /> of Pine Techware </span></h2>
                        </div>

                        <div className="w-full mx-auto mt-10">

                            {/* Tabs */}
                            <div className="flex gap-4 justify-center pb-10 flex-wrap">
                                {tabKeys.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 font-semibold rounded-full cursor-pointer 
                          ${activeTab === tab ? "bg-black text-white" : "bg-white border text-black"}`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-16 md:gap-x-10 xl:gap-x-16 mx-auto">
                                    {tabData[activeTab].images.map((src, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full max-w-xs mx-auto aspect-[3/4]"
                                        >
                                            {/* Back card 1 */}
                                            <div className="absolute inset-0 rounded-3xl bg-white shadow-md opacity-40 transform translate-x-4 translate-y-4" />
                                            {/* Back card 2 */}
                                            <div className="absolute inset-0 rounded-3xl bg-white shadow-lg opacity-70 transform -translate-x-2 -translate-y-2" />
                                            {/* Front card */}
                                            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white">
                                                <div className="absolute inset-0 overflow-hidden">
                                                    <Image
                                                        src={src}
                                                        alt={`Web project ${index + 1}`}
                                                        width={400}
                                                        height={800}
                                                        className="
    w-full 
    h-full 
    object-cover 
    object-top 
    transition-all 
    duration-[3500ms] 
    ease-linear 
  "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Featured /> */}

            {/* <section className="start-project bg-dark relative w-full lg:min-h-[80vh] z-50 flex items-center justify-center top-[0px]">
                <div className="mx-auto reveal-text text-center max-w-7xl md:pb-24 pb-14 lg:px-8">
                    <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Pull the Trigger!</p>
                    <div className="overflow-hidden">
                        <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl pb-2 2xl:pb-[11px]" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>Ready to turn your ideas  <br className="min-[580px]:block hidden" />into impactful digital experiences?</h2>

                         

                    </div>
                    <div className="flex mx-auto justify-center mt-6 md:mt-8 lg:mt-11 w-fit">
                        <button
                            className="buttonChange buttonChangeBlack bg-black text-white w-[180px] h-[45px] border-transparent rounded-full font-extrabold text-sm" onClick={openPopup}
                        >
                            <span className="pb-[3px] md:pb-1.5">Start Your Project</span>
                            <span className="pb-[3px] md:pb-1.5">Start Your Project</span>
                        </button>
                    </div>
                </div>
            </section> */}


            <Trigger
                title="Ready to turn your ideas into impactful digital experiences?"
                description="Create Without Limits!"
                buttonText="Start Your Project"
            />


            <Sidepopup />
            <Footer />

        </div>
    )
}

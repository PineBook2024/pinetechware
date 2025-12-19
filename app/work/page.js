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
                "/images/pack-1-1.jpg",
                "/images/pack-2-1.jpg",
                "/images/pack-4-1.jpg",
                "/images/pack-6-1.jpg",
                "/images/pack-7-1.jpg",
                "/images/pack-8-1.jpg",
                "/images/pack-12-1.jpg",
                "/images/pack-10-1.png",
                "/images/pack-11-1.png",
            ],
        },

        "Branding": {
            images: [
                "/images/branding-1.png",
                "/images/branding-2.png",
                "/images/branding-3.png",
                "/images/branding-4.png",
                "/images/branding-5.png",
                "/images/branding-6.png",
                "/images/branding-7.png",
                "/images/branding-8.png",
                "/images/branding-9.png",
            ],
        },

        "Logo": {
            images: [
                "/images/logo-1.jpg",
                "/images/logo-2.jpg",
                "/images/logo-3.jpg",
                "/images/logo-4.jpg",
                "/images/logo-5.jpg",
                "/images/logo-6.jpg",
                "/images/logo-7.jpg",
                "/images/logo-8.jpg",
                "/images/logo-9.jpg",
            ],
        },
        "App Development": {
            images: [
                "/images/app-1.png",
                "/images/app-2.png",
                "/images/app-3.png",
                "/images/app-4.png",
                "/images/app-5.png",
                "/images/app-6.png",
                "/images/app-7.png",
                "/images/app-8.png",
                "/images/app-9.png",
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
                            <div className="flex gap-4 justify-center pb-10">
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
                                                <Image
                                                    src={src}
                                                    alt={`Web project ${index + 1}`}
                                                    className="w-full h-full object-fit"
                                                    width={350}
                                                    height={450}
                                                />
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

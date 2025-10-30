'use client'
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

    return (
        <div>

            <SeoHead
                title="Our Work & Case Studies in Innovation | Pine Techware"
                description="Explore Pine Techware's portfolio - Our real-world solutions across FinTech, E-commerce, and more. See how we turn ideas into best digital experiences."
            />

            <div data-theme="light">
                <Navbar />
            </div>

            <Featured />

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

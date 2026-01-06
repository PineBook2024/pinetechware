"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import serviceBoll from "@/public/images/serviceBoll.webp"
import serviceHand from "@/public/images/serviceHand.webp"
import Navbar from '@/components/Navbar/Navbar'
import serMob from "@/public/images/serMob.png"
import OurClients from "@/components/OurClients/OurClients";
import Trigger from "@/components/Trigger/Trigger";
import Footer from "@/components/Footer/Footer";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import AllIndustries from '@/components/AllIndustries'
import { allIndustriesData } from "@/components/allIndustriesData";




export default function services() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // sab elements jinke paas ye class ho

        const elements = gsap.utils.toArray(".reveal-text");

        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);


    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Strategy & Consulting",
            content:
                "We start by understanding your goals, audience, and market. With research, competitive analysis, and a well-defined roadmap, we help you make informed decisions that drive growth.",
        },
        {
            title: "UI / UX Design",
            content:
                "Crafting user interfaces and experiences isn’t just about looking good; it’s about feeling intuitive. Our UX audits, wireframes, and prototyping ensure seamless, delightful journeys for your users.",
        },
        {
            title: "Web & Mobile App Development",
            content:
                "From responsive websites to powerful native apps, we bring your vision to life with clean architecture, cutting-edge tech, and agile delivery. Whether you’re building SaaS, marketplaces, or platforms, we’ve got you covered.",
        },
        {
            title: "E-commerce & Retail Solutions",
            content:
                "We design online stores and commerce platforms that sell— optimized for performance, mobile experience, secure payments, and conversion. Think beautiful storefronts with powerful backend integrations.",
        },
        {
            title: "Branding & Marketing",
            content:
                "Turn data into insights and hand off repetitive tasks. Our branding models, predictive analytics, and frameworks enhance efficiency and uncover opportunities you might not see otherwise.",
        },
        {
            title: "Support & Optimization",
            content:
                "Launch isn’t the finish line. We offer ongoing maintenance, updates, performance tuning, feature enhancements, and support, so your product stays ahead and delivers consistently.",
        },
    ];
    return (
        <div>

            <Navbar />

            <section className='service-module--heroGradient--bed34 hero relative overflow-x-hidden' data-theme="light">
                <div className='min-h-screen flex justify-center items-center flex-col max-w-7xl mx-auto relative'>
                    <div className='reveal-text mx-auto w-full md:w-8/12 xl:w-3/5 2xl:w-5/6 px-4 lg:px-8'>

                        <h1

                            className="font-extrabold text-black leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl"
                        >
                            <span className="text-theme text-[#3BB9E1]">Fueling Growth Through</span> Advanced Digital Services
                        </h1>
                        <p className=" text-black mt-5 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">We build intelligent, scalable digital products that help businesses grow, innovate, and lead. From strategy through design, development, launch, and maintenance, PineTechware is your full-cycle partner in creating real value.</p>

                    </div>
                </div>

                <div className="absolute top-28 lg:top-24 sm:top-36 -left-10 ">
                    <Image src={serviceBoll} className="w-24 md:w-28 2xl:w-36" alt="teach Asset" />
                </div>

                {/* <div className="absolute bottom-20 2xl:-right-28 -right-12 hidden lg:block">
                    <Image src={serviceHand} className="w-[28rem] 2xl:w-[42rem]" alt="teach Asset" />
                </div> */}
            </section>



            <section className="reveal-text service-provided bg-white " id="mobile-services">
                <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:py-[10.5rem] max-w-7xl mx-auto">
                    <div className="max-w-3xl xl:max-w-4xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-8 md:pb-12 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black"><span>Services We Offer</span></h2></div>
                    </div>
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-10">
                        <div className="lg:col-span-5">
                            <Image className="w-full fade-in lg:sticky lg:top-20" src={serMob} alt="" />
                        </div>

                        {/* <div className="lg:col-span-7 lg:pt-0 pt-10">
                            <div className="space-y-6 lg:space-y-10">

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Customized Software Development</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className=" text-theme font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Audit and Consulting</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal rotate-180 text-theme mt-[5px]">-</span></span>
                                    </button>
                                    <div className="overflow-hidden">
                                        <dd className="mt-6 pr-12">
                                            <p className=" text-black mt-3 mb-7 text-sm lg:text-md xl:text-lg 2xl:text-xl">Audit and Consulting services provide expert guidance and thorough evaluations to ensure financial accuracy, regulatory compliance, and strategic business improvements.</p>
                                            <p className=" text-black font-bold pb-2 text-xs xl:text-sm 2xl:text-base"></p>
                                        </dd>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Delivery</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                                <div className="pt-2">
                                    <button className="flex w-full justify-between text-left">
                                        <h3 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Support and Maintenance</h3>
                                        <span className="ml-6 flex h-7 items-center"><span className="transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px]">+</span></span>
                                    </button>
                                </div>

                            </div>
                        </div> */}


                        <div className="lg:col-span-7 lg:pt-0 pt-10">
                            <div className="space-y-6 lg:space-y-10">
                                {data.map((item, index) => (
                                    <div key={index} className="pt-2">
                                        <button
                                            className="flex w-full justify-between text-left"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <h3
                                                className={`font-bold text-2xl text-black xl:text-3xl 2xl:text-4xl tracking-[0px] ${openIndex === index ? "text-theme" : ""
                                                    }`}
                                            >
                                                {item.title}
                                            </h3>
                                            <span className="ml-6 flex h-7 items-center text-black">
                                                <span
                                                    className={` transform transition-transform duration-[200ms] ease-in-out text-5xl font-normal mt-[8px] ${openIndex === index
                                                        ? "rotate-180 text-black mt-[5px]" : ""}`}>
                                                    {openIndex === index ? "-" : "+"}
                                                </span>
                                            </span>
                                        </button>

                                        {/* Accordion Content with Animation */}
                                        <div
                                            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? "max-h-[500px]" : "max-h-0"
                                                }`}>
                                            <dd className="mt-6 pr-12">
                                                <p className="text-black mt-3 mb-7 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                                    {item.content}
                                                </p>
                                                <p className="dark:invert font-bold pb-2 text-xs xl:text-sm 2xl:text-base"></p>
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="reveal-text teach-guarantees bg-[#3BB9E1] pt-20">
                <div className="px-6 lg:px-8 pb-14 md:pb-24 lg:pb-[10.5rem] max-w-7xl mx-auto">
                    <div className="2xl:max-w-4xl lg:max-w-3xl pb-12 lg:pb-20">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span><span className="!normal-case">Why </span> Choose Us</span></h2></div>
                    </div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            <article className=" cursor-auto group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Client-First Mindset</h3>
                                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Your needs shape every decision; we deliver more than what was promised.</p>
                                    </div>
                                </a>
                            </article>

                            <article className=" cursor-auto group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Integrity & Transparency</h3>
                                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Clear communication, honest reporting, and no surprises.</p>
                                    </div>
                                </a>
                            </article>

                            <article className=" cursor-auto group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Cutting-Edge Tech</h3>
                                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We stay ahead of trends—AI, PWA, cloud, etc.—so you get innovation baked in.</p>
                                    </div>
                                </a>
                            </article>

                            <article className=" cursor-auto group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300">
                                <a>
                                    <div className="flex flex-col h-full justify-between gap-y-16 lg:gap-y-20">
                                        <h3 className=" font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Quality at Every Level</h3>
                                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">From design polish to code cleanliness to performance—excellence is non-negotiable.</p>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

             <AllIndustries
                heading={allIndustriesData.heading}
                items={allIndustriesData.items}
            />


            <OurClients />

            <Trigger
                // title="Ready to turn your ideas into impactful digital experiences?"
                // description="Create Without Limits!"
                buttonText="Start Your Project"
            />

            <Sidepopup />

            <Footer />
        </div>
    )
}

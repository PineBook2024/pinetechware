'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/banner-inner/video-animation-banner.webp";
import Img2 from "@/public/images/check.svg";
import AllIndustries from '@/components/AllIndustries'
import IndSlider from '@/components/IndSlider/IndSlider'
import { allIndustriesData } from "@/components/allIndustriesData";



import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import OurClients from '@/components/OurClients/OurClients';

export default function page() {
    const counterRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setStartCounter(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    return (
        <div>


            <SeoHead
                title="Custom Software & Digital Solutions | Pine Techware"
                description="PineTechware offers expert website design, development, and digital solutions to help businesses grow through innovation and technology." />

            <div data-theme="light">
                <Navbar />
            </div>

            <section className="HalfTextContent-sec bg-white">
                <div className="px-6 lg:px-8 pt-40 lg:pt-[10.5rem] max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <div className="overflow-hidden">
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span className='text-theme text-[#3BB9E1]'>Bring Your Brand</span>  to Life Through Motion</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Video animation turns ideas into experiences. We create visually engaging animations that explain, inspire, and convert—helping brands connect with their audience through powerful storytelling and motion design.</p>
                        </div>
                        <div className="!flex lg:mt-0 mt-6 lg:col-span-5 justify-start lg:justify-start items-start">
                            <Image className="w-full" src="/images/video-animation.png" alt="Top Mobile App Developers" width="500" height="500" />
                        </div>
                    </div>
                </div>
            </section>



            <Image src={Img1} sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px" alt="iPhone App Development Services" className="w-full object-cover max-w-full h-auto" width="1920" height="1080" />

            <section ref={counterRef} className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-14 md:pt-24  lg:py-24 lg:px-8 ">
                    <div className="max-w-3xl xl:max-w-4xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-black lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                                <span>Pine Techware’s 5+ Years Of Successful Journey</span>
                            </h2>
                        </div>
                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl text-black  2xl:text-2xl">
                            We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8" id="project-stats">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">

                        {/* Completed Projects */}
                        <div className="flex flex-col gap-y-2 w-max">
                            <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                                <div className="inline-flex">
                                    <span className="font-bold text-black text-4xl xl:text-5xl 2xl:text-6xl">
                                        {startCounter && (
                                            <CountUp
                                                start={0}
                                                end={1300}
                                                duration={3}
                                                separator=","
                                            />
                                        )}
                                        +
                                    </span>
                                </div>
                                <p className="group-hover:underline text-black underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Completed Projects
                                </p>
                            </span>
                        </div>

                        {/* Talented Cubixians */}
                        <div className="flex flex-col gap-y-2 w-max">
                            <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                                <div className="inline-flex">
                                    <span className="font-bold text-black text-4xl xl:text-5xl 2xl:text-6xl">
                                        {startCounter && (
                                            <CountUp
                                                start={0}
                                                end={750}
                                                duration={3}
                                                separator=","
                                            />
                                        )}
                                        +
                                    </span>
                                </div>
                                <p className="group-hover:underline text-black underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Satisfied Clients
                                </p>
                            </span>
                        </div>

                        {/* Satisfied Clients */}
                        <div className="flex flex-col gap-y-2 w-max md:pb-20">
                            <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                                <div className="inline-flex">
                                    <span className="font-bold text-black text-4xl xl:text-5xl 2xl:text-6xl">
                                        {startCounter && (
                                            <CountUp
                                                start={0}
                                                end={600}
                                                duration={3}
                                                separator=","
                                            />
                                        )}
                                        +
                                    </span>
                                </div>
                                <p className="group-hover:underline underline-offset-[9px] text-black decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                    Tech Experts
                                </p>
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem] ">
                    <div className="lg:overflow-hidden">
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our Full-Cycle Video Animation Services</span></h2></div>
                    <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black"></p>
                    <div className="mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Explainer Videos</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Short, clear animations that simplify your product, service, or concept and boost audience understanding.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">2D Animation</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Clean, engaging animations ideal for marketing, social media, websites, and educational content.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">3D Animation</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">High-impact visuals with depth and realism for product demos, presentations, and promotional campaigns.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Motion Graphics</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Dynamic text, icons, and transitions designed to enhance brand storytelling and visual appeal.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Whiteboard Animation</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Simple, educational animations perfect for training, tutorials, and informational videos.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Brand Story Videos</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Narrative-driven animations that communicate your brand’s mission, values, and journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ProcessSection-sec bg-white">
                <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-6 lg:pb-0 pb-12 lg:pr-14 2xl:pr-20">
                            <div className="lg:sticky top-20">
                                <div className="lg:overflow-hidden">
                                    <h2 className="text-black font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase"><span>Our Approach</span></h2></div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="flex flex-col gap-y-5">
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">01</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Concept & Script Development</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We start by understanding your goals and audience, then develop a clear concept and engaging script.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">02</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Storyboarding</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Visual frames are created to map out scenes, timing, and flow before animation begins.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">03</span>
                                    <h3 className=" font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Design & Illustration</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Custom characters, backgrounds, icons, and visual elements are designed to match your brand style.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">04</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Animation Production</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our animators bring everything to life using smooth motion, transitions, and visual effects.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">05</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Voiceover & Sound Design</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Professional voiceovers and sound effects are added to enhance clarity and engagement.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">06</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Revisions & Refinement</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We refine the animation based on your feedback to ensure it aligns perfectly with your vision.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">07</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Final Delivery</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">You receive high-quality videos in all required formats, optimized for web, social, and presentations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


                   <AllIndustries
                heading={allIndustriesData.heading}
                items={allIndustriesData.items}
            />
            {/* <IndSlider /> */}


            {/* <section className="textContent-sec bg-white">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]" >
                    <div className="2xl:max-w-4xl lg:max-w-3xl" >
                        <div className="lg:overflow-hidden" >
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase text-black"><span>related services</span></h2></div>
                        <p className="text-black lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                    </div>
                </div>

                <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-12 lg:mt-20">
                    <div className="grid grid-cols-12 gap-y-4 md:gap-7">
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Mobile App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Android App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li>
                                    <a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">eCommerce App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">visionOS App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Enterprise App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Cross Platform App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Flutter App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Hybrid App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Ionic App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Sencha App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">NativeScript App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">AR App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">VR App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Metaverse App</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">IoT App</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}
            
            <videoRelatedServices />

            <Trigger />

            <OurClients />

            {/* <Test/> */}

            <Footer />

            <Sidepopup />




        </div>
    )
}


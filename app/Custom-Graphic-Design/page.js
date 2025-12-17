'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/banner-inner/custom-graphic-design-banner.webp";
import Img2 from "@/public/images/check.svg";

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
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span className='text-theme text-[#3BB9E1]'>Transforming</span> Ideas Into Visual Experiences</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">We create visuals that define your brand, tell your story, and make your audience care. From branding to marketing assets, our designs blend creativity with strategy so your business stands out everywhere it appears.</p>
                        </div>
                        <div className="!flex lg:mt-0 mt-6 lg:col-span-5 justify-start lg:justify-start items-start">
                            <Image className="w-full" src="/images/custom-graphic-design.png" alt="Top Mobile App Developers" width="500" height="500" />
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

            <section className='bg-gray-50'>
                <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem] ">
                    <div className="lg:overflow-hidden">
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our Full-Cycle <span className="!normal-case">Custom</span> Graphic Design Services</span></h2></div>
                    <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black"></p>
                    <div className="mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Brand Identity Design</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Logos, color palettes, typography, and assets crafted to express your brand’s personality and set the foundation for all visual communication.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Marketing & Promotional Design</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Flyers, brochures, banners, posters, pitch decks, presentations, social media visuals, and everything you need to promote your business.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">UI/UX Graphics & Digital Assets</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Custom icons, illustrations, interface elements, and digital graphics that enhance your website, platform, or mobile app experience.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Product Packaging Design</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Unique, shelf-worthy packaging that increases product appeal and communicates your values instantly.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Print Design</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Business cards, booklets, company profiles, menus, invitations, and professional print-ready artworks for any requirement.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Custom Illustrations</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Detailed hand-drawn or digital illustrations for books, branding, storytelling, or product lines.</p>
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
                                    <h2 className="text-black font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase vertical"><span>our approach</span></h2></div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="flex flex-col gap-y-5">
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">01</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Discovery & Research</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We begin by understanding your brand, audience, and design goals. This helps us create visuals that align with your message and marketing direction.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">02</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Concept Development</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our designers craft initial directions, mood boards, and creative concepts so you can visualize the tone and direction early on.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">03</span>
                                    <h3 className=" font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Design Execution</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Once the concept is approved, we refine it into polished graphic designs across the required formats and platforms.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">04</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Revisions & Refinement</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We provide structured revisions to perfect the artwork and ensure everything aligns with your expectations.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">05</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Final Delivery</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">You receive clean, high-resolution, print-ready and web-ready files in all required formats.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">06</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Asset Packaging</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We organize your full set of branding and graphic assets for long-term, consistent use across your business.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">07</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Ongoing Support</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Need updates or new variations later? Our team is here to support your brand’s continued growth and design needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="textContent-sec bg-white relative">
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
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Logo Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Branding Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li>
                                    <a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Social Media Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">UI/UX Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl" >Web Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Packaging Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Illustration</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Print Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Motion Graphics</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Marketing Material Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Presentation Design</a></li>
                            </ul>
                        </div>
                        <div className=" md:col-span-4  text-black col-span-12 lg:pr-[55] flex lg:gap-5 gap-3 items-start" >
                            <Image src={Img2} className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]" alt="Pine Tech Wear Asset" loading="lazy" />
                            <ul>
                                <li><a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Book Cover Design</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Trigger />

            <OurClients />

            {/* <Test/> */}

            <Footer />

            <Sidepopup />
        </div>
    )
}


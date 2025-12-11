'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/iphone-app-development-banner.webp";
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
                <div className="px-6 lg:px-8 py-40 lg:py-[10.5rem] max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-7">
                            <div className="overflow-hidden">
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">iPhone App Development Services</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">We build custom iPhone app solutions that boost engagement, brand value, and revenue while delivering experiences that ensure users keep coming back.</p>
                        </div>
                        <div className="!flex lg:mt-0 mt-6 lg:col-span-5 justify-start lg:justify-end items-end">
                            <Image className="w-[170px] " src="https://cdn.cubix.co/73z7hm_Ua_Dfqfuj_Oys_Vp5yf_6ddd983374.svg" alt="Top Mobile App Developers" width="170" height="100" />
                        </div>
                    </div>
                </div>
            </section>


            <Image src={Img1} sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px" alt="iPhone App Development Services" className="mt-8 lg:mt-24 w-full object-cover max-w-full h-auto" width="1920" height="1080" />

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
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>our full-cycle <span className="!normal-case">iPhone</span> app development services</span></h2></div>
                    <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black"></p>
                    <div className="mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Mobile Strategy &amp; Consulting</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our experts consult you on all aspects of app development, from staying current with market trends to defining your target audience to creating a roadmap for success.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">UI/UX Design for iPhone</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Following Apple’s Human Interface Guidelines is our core priority. This enables us to deliver beautiful, functional designs that are compliant with iPhone’s usability standards.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Custom iPhone Development</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">With a strong focus on the latest technologies. Cubix offers customized iPhone app solutions that enhance your brand values and perfectly align with your business needs.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Platform Migration</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We transition your app from other platforms to iPhone and ensure it retains its core functionalities while taking advantage of iPhone-specific features.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">iPhone Software Testing</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our team of QA engineers and testers helps you release bug-free apps with exceptional functionality, usability, and performance testing for a flawless user experience across devices.</p>
                        </div>
                        <div>
                            <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Cross-Platform Development</h3>
                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We use frameworks like Flutter and React Native to develop quality iPhone apps that provide exceptional UX across different devices, which can reduce development time and costs.</p>
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
                                    <h2 className="text-black font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase"><span>our approach</span></h2></div>
                            </div>
                        </div>
                        <div className="lg:col-span-6">
                            <div className="flex flex-col gap-y-5">
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">01</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Planning &amp; Research</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We gather requirements, define goals, and conduct market analysis to ensure the app meets user needs and attunes to your business objectives.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">02</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">UI/UX Design</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our proficient UI/UX developers prepare interfaces and user experiences that are easy to navigate and optimized for iPhone devices.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">03</span>
                                    <h3 className=" font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">App Development</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We then initiate our development process, creating and testing builds simultaneously to ensure exceptional performance, security, and scalability.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">04</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">QA &amp; Testing</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Our team thoroughly tests the final build for functionality, usability, performance, and compatibility across iPhone devices to identify and resolve any issues.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">05</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">App Refinement</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We refine the final build based on feedback from testing, fixing features, UI elements, and the overall user experience to enhance app usability and quality.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">06</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Final Deployment</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Next, our focus is to ensure a secure launch of your iPhone app, adhering to Apple’s strict guidelines and ensuring all necessary documentation and assets are in place.</p>
                                </div>
                                <div className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"><span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">07</span>
                                    <h3 className="text-black font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Post-launch Support</h3>
                                    <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">After the final deployment, we provide ongoing support, monitor app performance, collect user feedback, and release updates if required.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="textContent-sec bg-white">
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
            </section>

            <Trigger />

            <OurClients />

            {/* <Test/> */}

            <Footer />

            <Sidepopup />




        </div>
    )
}


'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/banner-inner/Custom-Application-banner.webp";
import Img2 from "@/public/images/check.svg";
import AllIndustries from '@/components/AllIndustries'
import IndSlider from '@/components/IndSlider/IndSlider'
import { allIndustriesData } from "@/components/allIndustriesData";

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import OurClients from '@/components/OurClients/OurClients';
import App from 'next/app'
import AppRelatedServices from '@/components/AppRelatedServices/AppRelatedServices';



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


const webServices = [
    {
        heading: "Custom Web Applications",
        description:
            "Robust, scalable web apps designed to meet your specific workflows and business requirements.",
    },
    {
        heading: "Mobile Application Development",
        description:
            "Native and cross-platform mobile apps built for performance, usability, and reliability.",
    },
    {
        heading: "Enterprise Application Solutions",
        description:
            "Large-scale applications that support complex operations, data management, and integrations.",
    },
    {
        heading: "Cloud-Based Applications",
        description:
            "Secure cloud applications with high availability, scalability, and optimized performance.",
    },
    {
        heading: "API Development & Integration",
        description:
            "Custom APIs and third-party integrations that extend functionality and enable system communication.",
    },
    {
        heading: "UI/UX Design for Applications",
        description:
            "User-focused interfaces that ensure smooth navigation and engaging experiences.",
    },
];



const processSteps = [
  {
    number: "01",
    title: "Requirement Discovery",
    desc: "We analyze your business processes, goals, and technical needs to define a clear application roadmap.",
  },
  {
    number: "02",
    title: "Solution Architecture",
    desc: "We design a secure, scalable architecture aligned with your functional and growth requirements.",
  },
  {
    number: "03",
    title: "UI/UX & Prototyping",
    desc: "Wireframes and prototypes are created to validate user flow and functionality early.",
  },
  {
    number: "04",
    title: "Development & Integration",
    desc: "Our developers build clean, efficient code and integrate necessary tools and services.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "Rigorous testing ensures performance, security, and reliability across environments.",
  },
  {
    number: "06",
    title: "Deployment & Launch",
    desc: "We deploy the application with final checks, configurations, and documentation.",
  },
  {
    number: "07",
    title: "Support & Scaling",
    desc: "We provide long-term support and help scale features as your business evolves.",
  },
];





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
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span className='text-theme text-[#3BB9E1]'>Tailor-Made    </span>  Applications Built Around Your Business</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Off-the-shelf software doesn’t always fit. We design and develop custom applications that solve real business problems, streamline operations, and scale as your organization grows</p>
                        </div>
                         <div  className="lg:col-span-5 flex justify-center items-center mt-10 lg:mt-0 rounded-4xl">
                                        <Image
                                            src="/images/custom-graphic-design/01.webp"
                                            alt="Custom Graphic Design Services"
                                            width={500}
                                            height={500}
                                            className="w-full max-w-[420px] h-auto object-contain bg-transparent rounded-4xl mb-3.5"
                                            priority
                                        />
                                    </div>
                        
                                </div>
                            </div>
                        </section>
                        
                        
                        
                                        <Image  src="/images/custom-graphic-design/02.webp" sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px" alt="iPhone App Development Services" className="w-full object-cover max-w-full h-auto" width="1920" height="1080" />
                        
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
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our Full-Cycle Custom Application Services</span></h2></div>
                    <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black"></p>
                    <div className="mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 lg:gap-14 gap-6 md:gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                        {webServices.map((item, index) => (
                            <div key={index}>
                                <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                                    {item.heading}
                                </h3>

                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    {item.description}
                                </p>
                            </div>
                        ))}

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
                                {processSteps.map((item, index) => (
                                    <div
                                        key={index}
                                        className="theProcess px-7 pt-9 pb-7 lg:rounded-[30px] rounded-2xl text-black bg-[#dddddd]"
                                    >
                                        <span className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px]">
                                            {item.number}
                                        </span>

                                        <h3 className="font-bold my-3 text-2xl xl:text-3xl 2xl:text-4xl">
                                            {item.title}
                                        </h3>

                                        <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
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
   
        <AppRelatedServices />

            <Trigger />

            <OurClients />

            {/* <Test/> */}

            <Footer />

            <Sidepopup />




        </div>
    )
}


'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/banner-inner/Mobile-Game-Development-banner.webp";
import Img2 from "@/public/images/check.svg";
import AllIndustries from '@/components/AllIndustries'
import { allIndustriesData } from "@/components/allIndustriesData";

import IndSlider from '@/components/IndSlider/IndSlider'


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

    const webServices = [
  {
    heading: "Custom Unity Game Development",
    description:
      "End-to-end Unity game development tailored to your concept, genre, and target audience.",
  },
  {
    heading: "2D & 3D Unity Games",
    description:
      "Visually rich 2D and 3D games developed using Unity’s advanced rendering and animation capabilities.",
  },
  {
    heading: "Cross-Platform Game Development",
    description:
      "Single-build deployment enabling smooth performance across iOS, Android, PC, and console platforms.",
  },
  {
    heading: "Unity AR & VR Development",
    description:
      "Immersive augmented and virtual reality experiences powered by Unity’s AR and VR toolsets.",
  },
  {
    heading: "Multiplayer & Online Games",
    description:
      "Real-time multiplayer systems with matchmaking, leaderboards, and secure server-side integration.",
  },
  {
    heading: "Game UI/UX Design",
    description:
      "Player-friendly menus, controls, HUDs, and navigation systems designed for optimal gameplay.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Game Concept & Technical Planning",
    desc: "We understand your vision, target platform, and technical requirements.",
  },
  {
    number: "02",
    title: "Game Design & Prototyping",
    desc: "Gameplay mechanics, environments, and interactive prototypes are developed.",
  },
  {
    number: "03",
    title: "Art & Asset Creation",
    desc: "High-quality characters, environments, animations, and effects are created.",
  },
  {
    number: "04",
    title: "Unreal Development",
    desc: "Game logic, physics, AI systems, and features are built using Unreal Engine.",
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    desc: "Rigorous testing ensures performance, stability, and visual consistency across devices.",
  },
  {
    number: "06",
    title: "Deployment & Publishing",
    desc: "Publishing support for PC, consoles, and mobile platforms.",
  },
  {
    number: "07",
    title: "Post-Launch Support & Scaling",
    desc: "Ongoing updates, expansions, and long-term technical support.",
  },
];

const relatedServices = [
  { name: "Unity Game Development" },
  { name: "Mobile Game Development" },
  { name: "2D & 3D Game Development" },
  { name: "AR & VR Development" },
  { name: "UI/UX Design" },
  { name: "Backend Development" },
  { name: "Cloud Solutions" },
  { name: "Multiplayer Game Development" },
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
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">Cinematic, High-Performance Games Built With Unreal Engine</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Unreal Engine is known for stunning visuals, realistic physics, and cinematic experiences. We build high-end Unreal games that deliver immersive gameplay, next-level graphics, and powerful performance across platforms.</p>
                        </div>
                         <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
                                                               <Image
                                                                   src="/images/Unreal-Game-Development/01.webp"
                                                                   alt="Professional Unreal Game Development Services"
                                                                   width={500}
                                                                   height={500}
                                                                   priority
                                                                   className="w-full max-w-[420px] h-auto object-contain bg-transparent rounded-4xl mb-3"
                                                               />
                                                           </div>
                                               
                                                       </div>
                                                   </div>
                                               </section>
                                               
                                               
                                                               <Image src="/images/Unreal-Game-Development/02.webp" sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px" alt="Professional Unreal Game Development Services" className="w-full object-cover max-w-full h-auto" width="1920" height="1080" />
                        
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
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our Full-Cycle Unity Game Development Services</span></h2></div>
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


            <section className="textContent-sec bg-white">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
                    <div className="2xl:max-w-4xl lg:max-w-3xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase text-black">
                                <span>Related Services</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-12 lg:mt-20">
                    <div className="grid grid-cols-12 gap-y-4 md:gap-7">

                        {relatedServices.map((item, index) => (
                            <div
                                key={index}
                                className="md:col-span-4 col-span-12 text-black flex lg:gap-5 gap-3 items-start"
                            >
                                <Image
                                    src={Img2}
                                    className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]"
                                    alt="Pine Tech Wear Asset"
                                    loading="lazy"
                                />
                                <ul>
                                    <li>
                                        <a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}

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

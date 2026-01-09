'use client'

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Trigger from '@/components/Trigger/Trigger'
import Footer from '@/components/Footer/Footer'
import SeoHead from '@/components/SeoHead'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import { usePopup } from "@/context/PopupContext";
import Image from 'next/image'
import Img1 from "@/public/images/banner-inner/automotive-software-development-banner.webp";
import Img2 from "@/public/images/check.svg";
import Cta from "@/components/Cta/Cta";
import { allIndustriesData } from "@/components/allIndustriesData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";





import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import OurClients from '@/components/OurClients/OurClients';
import AllIndustries from '@/components/AllIndustries'
import IndSlider from '@/components/IndSlider/IndSlider'
import StaffAugmentation from '@/components/StaffAugmentation/StaffAugmentation'
import ContactForm from '@/components/ContactForm/ContactForm'


export default function page() {

    const [activeTab, setActiveTab] = useState("tab1");
    const { openPopup, closePopup, isOpen } = usePopup();


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

    const DesignServices = [
        {
            title: "Legal Domain Expertise",
            description:
                "Our team understands legal workflows, compliance standards, and strict confidentiality requirements to deliver reliable legal software solutions.",
        },
        {
            title: "Custom-Built Solutions",
            description:
                "We design and develop legal software tailored to your firm’s internal processes, workflows, and specific practice areas.",
        },
        {
            title: "Data Security & Confidentiality",
            description:
                "We implement advanced security measures and best practices to protect sensitive legal data and ensure full confidentiality.",
        },
        {
            title: "QA & Testing",
            description:
                "Rigorous quality assurance and testing ensure software reliability, data accuracy, and consistent performance.",
        },
    ];



const slides = [
  {
    title: "Legal Software Consulting",
    desc: "Expert guidance for legal software strategy, planning, and digital transformation.",
    img: "/images/banner-inner/custom-graphic-design-banner.webp",
  },
  {
    title: "Dedicated Development Team",
    desc: "A dedicated team focused on building, scaling, and maintaining robust legal software solutions.",
    img: "/images/banner-inner/custom-graphic-design-banner.webp",
  },
  {
    title: "Staff Augmentation",
    desc: "Extend your in-house team with experienced legal software developers and QA specialists.",
    img: "/images/banner-inner/custom-graphic-design-banner.webp",
  },
  {
    title: "End-to-End Project Delivery",
    desc: "Complete ownership from planning and development to deployment and ongoing post-launch support.",
    img: "/images/banner-inner/custom-graphic-design-banner.webp",
  },
];


const bullets = [
  "Legal Software Developers & QA Engineers",
  "Flexible Engagement Models",
  "Faster Implementation",
  "Cost-Effective Solutions",
  "Ongoing Support & Maintenance",
];



    const techs = [
        { name: "Dart", src: "/images/Dart.svg" },
        { name: "ionic", src: "/images/Ionic.svg" },
        { name: "JavaScript", src: "/images/Javascrpt.svg" },
        { name: "React", src: "/images/React.svg" },
        { name: "Flutter", src: "/images/flutter.svg" },
        { name: "Xamarin", src: "/images/xamarin.svg" },
        { name: "Unity", src: "/images/unity.svg" },
        { name: "Hive", src: "/images/hive.svg" },
        { name: "C Sharp", src: "/images/C.svg" },
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
                                <h1 className=" font-bold text-black pb-6 lg:pb-[2.375rem]  text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span className='text-theme text-[#3BB9E1]'>Custom Legal  </span> Software Development Services</h1></div>
                            <p className="   text-black text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">We provide secure, scalable, and tailored legal software development services designed to help
                                law firms, legal departments, and legal service providers streamline operations, manage cases
                                efficiently, and ensure compliance with regulatory standards.</p>
                        </div>
                        <div className="!flex lg:mt-0 mt-6 lg:col-span-5 justify-start lg:justify-start items-start">
                            <Image className="w-full" src="/images/automotive-software-development.webp" alt="Top Mobile App Developers" width="500" height="500" />
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
                                <span>our industry expertise</span>
                            </h2>
                        </div>
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


            <section className="bg-white">
                <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
                    <div className="max-w-3xl xl:max-w-4xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-1 md:pb-0 text-black text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]">
                                <span>Our Vision for the Future</span>
                            </h2>
                        </div>
                        {/* <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Hire from our pool of 350+ specialized experts in web, mobile, and
              software engineering, specializing in the latest technologies and
              frameworks, ready to scale your development teams effortlessly.
            </p> */}

                        <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
                            {/* Left Tabs */}
                            <div className="w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
                                <ul className="text-lg lg:text-xl 2xl:text-2xl font-medium space-y-4 md:space-y-6 xl:space-y-10 2xl:space-y-8 pr-4 md:pr-0">
                                    <li
                                        onClick={() => setActiveTab("tab1")}
                                        className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab1" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                                    >
                                        Innovation
                                    </li>
                                    <li
                                        onClick={() => setActiveTab("tab2")}
                                        className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab2" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                                    >
                                        Excellence
                                    </li>
                                    <li
                                        onClick={() => setActiveTab("tab3")}
                                        className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab3" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                                    >
                                        People First
                                    </li>
                                    <li
                                        onClick={() => setActiveTab("tab4")}
                                        className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab4" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                                    >
                                        Honesty
                                    </li>
                                    <li
                                        onClick={() => setActiveTab("tab5")}
                                        className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab5" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                                    >
                                        Integrity
                                    </li>
                                </ul>
                            </div>

                            {/* Right Content */}
                            <div className="w-full md:w-[70%] lg:w-[78.5%] 2xl:w-[76%] pt-6 md:pt-0">

                                {activeTab === "tab1" && (
                                    <div className='pt-8 w-full mt-5 md:ps-12'>
                                        <div className=''>
                                            <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Innovation Starts with Imagination</h3>

                                            <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At Pine Techware, creativity isn’t just what we do, it’s who we are. We thrive on fresh ideas, bold imagination, and the thrill of turning visionary concepts into real-world solutions.</p>

                                            <div className="flex flex-col gap-5">
                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our culture is built on curiosity, experimentation, and the courage to push boundaries. This spirit empowers us to design innovative products that not only transform industries but also exceed expectations.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">For us, creativity is more than a skill; it’s a mindset. It drives us to see possibilities where others see limits, and it fuels our passion to shape a future filled with opportunity.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">When our talented team collaborates with purpose and passion, extraordinary things happen, and the results speak for themselves.</p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "tab2" && (
                                    <div className='pt-8 w-full mt-5 md:ps-12'>
                                        <div className=''>
                                            <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Relentless Quality</h3>

                                            <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Excellence is more than a goal here, it’s a way of working, thinking, and delivering. We pursue perfection in every detail, ensuring quality that speaks for itself.</p>

                                            <div className="flex flex-col gap-5">
                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our teams are driven by high standards, precision, and a relentless commitment to outperform expectations at every stage of the process.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We believe excellence is achieved through consistency, discipline, and a continuous drive to improve and innovate.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">From ideation to execution, we refine, test, and perfect every product until it stands out as the best in its class.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, excellence is not just about results; it’s about the mindset that pushes boundaries and inspires greatness in everything we do.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Through dedication and passion, we turn ordinary efforts into extraordinary achievements.</p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "tab3" && (
                                    <div className='pt-8 w-full mt-5 md:ps-12'>
                                        <div className=''>
                                            <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Bringing People Together</h3>

                                            <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At our company, people are at the heart of everything we do. We believe that empowered individuals create extraordinary outcomes.</p>

                                            <div className="flex flex-col gap-5">
                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our culture thrives on respect, collaboration, and shared growth, where every voice matters and every idea is valued.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We foster an environment that encourages learning, well-being, and balance — ensuring our teams feel inspired and supported in all they do.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Trust, empathy, and open communication define our relationships, both within our teams and with our clients.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, putting people first means nurturing potential, recognizing achievements, and building a workplace where everyone can thrive.</p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Together, we grow stronger, driven by unity, purpose, and the belief that success begins with our people.</p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "tab4" && (
                                    <div className='pt-8 w-full mt-5 md:ps-12'>
                                        <div className=''>
                                            <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Transparent Partnership </h3>

                                            <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Transparency is more than a principle at Pine Techware; it’s the foundation of how we work and grow together. We believe openness builds trust, fuels collaboration, and sparks innovation.
                                            </p>

                                            <div className="flex flex-col gap-5">
                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our approach is rooted in complete transparency; from project discussions to delivery milestones, ensuring our clients are always informed and confident in every decision.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We value accountability and sincerity, standing by our words and actions to create meaningful, long-term collaborations.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">By embracing openness, we eliminate barriers, encourage genuine dialogue, and foster mutual respect across every level of engagement.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, honesty and transparency are not just principles; they are promises that guide how we work, connect, and grow with our partners.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Together, we build partnerships defined by clarity, trust, and shared success.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "tab5" && (
                                    <div className='pt-8 w-full mt-5 md:ps-12'>
                                        <div className=''>
                                            <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Ethics that Inspire Trust
                                            </h3>

                                            <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At this agency, integrity is the foundation of everything we do. We uphold the highest ethical standards, ensuring that our actions consistently align with our values and commitments.
                                            </p>

                                            <div className="flex flex-col gap-5">
                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We believe that true success is built on honesty, responsibility, and doing what’s right — even when no one is watching.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our teams operate with fairness, respect, and accountability, fostering confidence among our clients, partners, and colleagues alike.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Every decision we make reflects our dedication to transparency and moral responsibility, shaping relationships rooted in trust and credibility.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, integrity is more than a principle — it’s a promise to act with sincerity, honor our word, and inspire confidence through ethical excellence.
                                                </p>

                                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Through unwavering integrity, we strengthen our reputation and create a legacy of trust and respect.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Cta />

            <section className="bg-gray-50">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
                    <div className="lg:overflow-hidden">
                        <h2 className="text-black font-bold pb-2 md:pb-0 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">Why Choose Us for Legal Software Development</h2>
                    </div>

                    <div className="mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 gap-6 md:gap-y-16 lg:gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
                        {DesignServices.map((service, index) => (
                            <div key={index}>
                                <h3 className="font-bold pb-6 lg:pb-[2.125rem] text-2xl xl:text-3xl 2xl:text-4xl text-black">
                                    {service.title}
                                </h3>
                                <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <AllIndustries
                heading={allIndustriesData.heading}
                items={allIndustriesData.items}
            />


            {/* <IndSlider /> */}


            {/* ================== Hard-coded IndSlider ================== */}
            <section className="overflow-x-hidden">

                {/* Desktop Slider */}
                <section className="hidden sm:block mx-auto py-14 md:py-24 lg:py-[10.5rem]">
                    <Splide
                        options={{
                            perPage: 2,
                            gap: "2rem",
                            arrows: false,
                            pagination: false,
                            padding: "4rem",
                            breakpoints: { 1024: { perPage: 1 } },
                        }}
                    >
                        {/* First text slide */}
                        <SplideSlide>
                            <div className="mr-16">
                                <h2 className="font-bold pb-6 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px]">
                                    Collaboration Models for Legal Software Development
                                </h2>
                                <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                    We offer flexible engagement models to meet diverse legal technology needs.
                                </p>
                            </div>
                        </SplideSlide>

                        {slides.map((item, i) => (
                            <SplideSlide key={i}>
                                <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 py-48 lg:rounded-[30px] lg:px-10 lg:pb-10 lg:py-80">
                                    <Image src={item.img} alt={item.title} fill className="object-cover -z-10" />
                                    <div className="absolute inset-0 bg-black/40 -z-10" />
                                    <h3 className="font-bold pb-4 text-white text-2xl xl:text-3xl 2xl:text-4xl">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                        {item.desc}
                                    </p>
                                </article>
                            </SplideSlide>
                        ))}
                    </Splide>
                </section>

                {/* Mobile Slider */}
                <section className="sm:hidden px-6 pt-14">
                    <h2 className="font-bold pb-6 text-4xl tracking-[-2px]">
                        Collaboration Models for Legal Software Development
                    </h2>
                    <p className="text-base mb-12">
                        We offer flexible engagement models to meet diverse legal technology needs.
                    </p>

                    <div className="flex flex-col gap-5">
                        {slides.map((item, i) => (
                            <article key={i} className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 py-48 lg:rounded-[30px] lg:px-10 lg:pb-10 lg:py-80">
                                <Image src={item.img} alt={item.title} fill className="object-cover -z-10" />
                                <div className="absolute inset-0 bg-black/40 -z-10" />
                                <h3 className="font-bold pb-4 text-white text-2xl xl:text-3xl 2xl:text-4xl">
                                    {item.title}
                                </h3>
                                <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                                    {item.desc}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </section>


            <Trigger />

            <section className="textContent-sec bg-white">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto">
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


            {/* <StaffAugmentation /> */}


            <section className="requestServiceAndroid-sec px-6 pt-14 md:py-24 lg:py-[10.5rem] md:px-8 bg-white" id="staff-augmentation">
                <div className="mx-auto max-w-7xl">
                    <div className="md:flex">
                        <div className="w-full xl:w-[60%] lg:w-[55%] md:w-[50%] mr-[5%]">
                            <h2 className="text-black font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px]">
                                Staff Augmentation for Legal Software Development
                            </h2>
                            <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                Enhance your legal technology initiatives with skilled professionals who integrate seamlessly with your team.
                            </p>

                            <div className="lg:mt-12 mt-6 space-y-4">
                                {bullets.map((text, index) => (
                                    <div key={index} className="flex gap-4 items-center">
                                        <p className="text-black font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">{text}</p>
                                    </div>
                                ))}
                            </div>



                            <button onClick={openPopup}
                                className="buttonChange buttonChangeBlack   bg-black text-white 2xl:w-[180px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm"
                            >

                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>

                            </button>
                        </div>

                        <div className="w-full xl:w-[35%] lg:w-[40%] md:w-[45%] mt-14 md:mt-48 2xl:mt-56 hidden md:flex flex-col justify-end">
                            <div className="grid grid-cols-12 gap-3">
                                {techs.map((tech, index) => (
                                    <div key={index} className="col-span-4">
                                        <a className="relative group h-[123px] bg-[#f1f1f1] w-full md:px-3.5 py-5 border-transparent rounded-xl md:rounded-3xl font-medium text-[12px] md:text-lg flex flex-col items-center justify-center gap-2 overflow-hidden transition duration-500">
                                            <div className="text-black flex flex-col gap-4 text-center transform translate-y-[-10%] group-hover:translate-y-[55%] transition-transform duration-[350ms] ease-[ease]">
                                                <span className="block text-md font-semibold leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-4">
                                                    {tech.name}
                                                </span>
                                                <Image
                                                    className="opacity-100 group-hover:opacity-0.5 transition-opacity duration-300"
                                                    src={tech.src}
                                                    alt={tech.name}
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <OurClients />


            <ContactForm />


            <Footer />

            <Sidepopup />
        </div>
    )
}


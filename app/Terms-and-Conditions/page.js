'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import Image from 'next/image'
import abtBanner from "@/public/images/abt-banner.webp"
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import bage2 from "@/public/images/bage2.png"
import bage3 from "@/public/images/bage3.png"
import bage4 from "@/public/images/bage4.png"
import bage12 from "@/public/images/bage12.png"
import bage13 from "@/public/images/bage13.png"
import bage14 from "@/public/images/bage14.png"
import c2 from "@/public/images/c2.webp"
import c3 from "@/public/images/c3.webp"
import c4 from "@/public/images/c4.webp"
import c5 from "@/public/images/c5.webp"
import c6 from "@/public/images/c6.webp"
import c7 from "@/public/images/c7.webp"
import c8 from "@/public/images/c8.webp"
import c9 from "@/public/images/c9.webp"
import c10 from "@/public/images/c10.webp"
import clutch from "@/public/images/clutch.webp"
import aboutBanner from "@/public/images/aboutteambanner.webp"
import t1 from "@/public/images/t1.svg"
import t2 from "@/public/images/t2.svg"
import t3 from "@/public/images/t3.svg"
import t4 from "@/public/images/t4.svg"
import y1 from "@/public/images/y1.svg"
import y2 from "@/public/images/y2.svg"
import y3 from "@/public/images/y3.svg"
import SeoHead from "@/components/SeoHead";




import React from 'react'
import Tech from '@/components/Tech/Tech'
import { Link } from 'lucide-react'
import Trigger from '@/components/Trigger/Trigger'
import Head from 'next/head'

// export const metadata = {
//   title: "About Us",
//   description: "Learn more about our team and company mission.",
// };

export default function about() {
    const [activeTab, setActiveTab] = useState("tab1"); // 👈 by default Tab1 active


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
                title="About Pine Techware | Global Software & Innovation"
                description="Pine Techware - A global tech partner building software & digital products. From startups to enterprises, we empower businesses with innovation & growth."
            />
            <div data-theme="light">
                <Navbar />
            </div>


            <section className="bg-white">
                <div className="container px-6 lg:px-8 pt-40 lg:py-[10.5rem] max-w-7xl mx-auto">
                    <div className="max-w-3xl xl:max-w-4xl">

                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-black xl:!leading-[55px] 2xl:!leading-[65px]">
                                <span>Terms and Conditions</span>
                            </h2>
                        </div>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Welcome to Pine Techware. By accessing our website or using our services, you agree to be bound by the following Terms and Conditions. Please read them carefully before engaging with our services.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            1. Company Overview
                        </h2>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Pine Techware is a digital design and development services company providing solutions including but not limited to:
                        </p>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Graphic & Branding Design</li>
                            <li>Website Design & Development</li>
                            <li>Mobile App Development</li>
                            <li>Game Development & Testing</li>
                            <li>Digital Marketing & Related Services</li>
                        </ul>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            All services are provided under these Terms and Conditions unless otherwise stated in a signed agreement.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            2. Acceptance of Terms
                        </h2>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            By using our website, requesting a quote, or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, you must discontinue use of our services.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            3. Scope of Services
                        </h2>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Services are delivered based on the agreed scope, timeline, and specifications outlined in written communication, proposal, or contract.</li>
                            <li>Any work outside the agreed scope may require additional charges and revised timelines.</li>
                            <li>Pine Techware reserves the right to refuse services that violate laws, ethical standards, or company policies.</li>
                        </ul>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            4. Client Responsibilities
                        </h2>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Provide accurate, complete, and timely information required for project execution.</li>
                            <li>Respond to approvals, feedback, and requests within reasonable timeframes.</li>
                            <li>Ensure legal ownership of all content, assets, or materials shared.</li>
                        </ul>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Delays caused by the client may affect project timelines and delivery dates.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            5. Payments & Billing
                        </h2>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>All payments must be made according to the agreed pricing and schedule.</li>
                            <li>Advance payments are non-refundable unless stated otherwise in writing.</li>
                            <li>Delayed payments may result in project suspension.</li>
                            <li>Additional work may require revised pricing.</li>
                        </ul>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            6. Refund Policy
                        </h2>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Refunds are not guaranteed once work has commenced.</li>
                            <li>Approved refunds depend on completed work.</li>
                            <li>No refunds for completed milestones or approved assets.</li>
                        </ul>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            7. Intellectual Property Rights
                        </h2>

                        <ul className="pt-6 list-disc pl-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Final deliverables are transferred upon full payment.</li>
                            <li>Pine Techware may showcase work unless restricted in writing.</li>
                            <li>Unused drafts remain Pine Techware’s property.</li>
                        </ul>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            8. Confidentiality
                        </h2>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Both parties agree to maintain confidentiality of all sensitive and proprietary information.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            9. Limitation of Liability
                        </h2>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Pine Techware shall not be liable for indirect damages, business losses, data loss, or third-party platform failures.
                        </p>

                        <h2 className="font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl text-black">
                            10. Contact Information
                        </h2>

                        <p className="pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            Pine Techware<br />
                            Email: support@pinetechware.com<br />
                            Website: www.pintechware.com
                        </p>

                    </div>
                </div>
            </section>


            <Footer />
            <Sidepopup />
        </div>
    )
}
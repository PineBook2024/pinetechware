'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import Image from 'next/image'
import abtBanner from "@/public/images/abt-banner.webp"
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
// import CEO from "@/public/images/CEO.webp"
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
                                <span>Privacy Policy</span>
                            </h2>
                        </div>
                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            This Privacy Policy explains how Pine Techware Design Services (“we,” “us,” or “our”) collects, uses, and protects your personal information when you visit our website or use our design and development services. It also describes your rights and choices regarding your data, and how you can contact us with questions or concerns.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            1. Information We Collect and How We Use It
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            1.1 We are responsible for the information collected through our website and our service channels. We only have access to information that you voluntarily provide to us via forms, email, phone, live chat, or other direct contact methods. We do not sell or rent your personal information to third parties.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            1.2 Depending on how you interact with us, we may collect the following types of information:
                        </p>
                        <ul className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Name, company name, and job title.</li>
                            <li>Contact details such as email address, phone number, website URL, and mailing address.</li>
                            <li>Project details, design preferences, brand assets, and any content you share for your project.</li>
                            <li>
                                Technical information, such as IP address, browser type, device information, and general usage data when you visit our website.
                            </li>
                        </ul>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            1.3 We use this information to:
                        </p>
                        <ul className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Understand your requirements and provide quotes, proposals, and project recommendations.</li>
                            <li>Deliver and manage our design, development, and related services.</li>
                            <li>Improve our website, services, and customer support.</li>
                            <li>Communicate with you about your project, invoices, updates, and feedback.</li>
                            <li>
                                Send you optional service updates or marketing communications, if you have consented (you may opt out at any time).
                            </li>
                        </ul>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            2. Your Rights and Control Over Your Information
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            2.1 You are in control of your personal information. At any time, you may:
                        </p>
                        <ul className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Request to know what personal information we hold about you.</li>
                            <li>Ask us to update or correct your information if it is incomplete or inaccurate.</li>
                            <li>Request that we delete your personal information, subject to legal or contractual obligations.</li>
                            <li>
                                Object to or restrict certain types of processing, such as direct marketing.
                            </li>
                        </ul>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            To exercise these rights, please contact us using the email address or phone number provided on our website.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            3. Security
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            3.1 We are committed to keeping your information secure. We use appropriate physical, technical, and administrative safeguards to protect personal data against unauthorized access, disclosure, alteration, or destruction.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            3.2 Access to personally identifiable information is limited to employees, contractors, and service providers who need the information to perform specific tasks (for example, project management, development, billing, or customer support).
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            3.3 We use Secure Sockets Layer (SSL) and other industry-standard security technologies to help protect data transmitted between you and our website.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            3.4 While we take reasonable steps to safeguard your personal data, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, but we work continuously to minimize risks.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            4. Payments
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            4.1 When you pay for our services, we may collect billing-related details such as your name, company name, billing address, email address, and phone number to process invoices and maintain records.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            4.2 Credit card and online payment information is processed securely by trusted third-party payment processors. We do not store your full credit card details on our servers. Our payment partners use their own secure systems in line with industry standards.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            5. IP Address, Cookies, and Analytics
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            5.1 When you visit our website, certain non-personal information such as your IP address, browser type, pages visited, and access times may be automatically logged. We use this information to analyze trends, administer the site, and improve user experience.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            5.2 Our website uses cookies and similar technologies to:
                        </p>
                        <ul className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            <li>Recognize your browser and remember certain preferences.</li>
                            <li>Maintain session information and improve navigation.</li>
                            <li>Gather aggregated usage data to help us understand how visitors use our site.</li>
                        </ul>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            5.3 Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies, delete existing cookies, or notify you when a cookie is being placed on your device. Please note that disabling cookies may affect some website features.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            5.4 We may use third-party tools (such as analytics or advertising partners) that collect anonymized or aggregated information about website usage. These third parties do not receive your personal information from us unless required to provide their services and subject to appropriate safeguards.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            6. Information About Our Services
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            6.1 We strive to ensure that all descriptions of our design, development, branding, and related services on our website are clear and accurate. If you believe that the services you received differ from what was described, please contact us so we can review and address your concern promptly.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            7. Ownership and Confidentiality
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            7.1 Any project materials, content, or assets you share with us are treated as confidential. We use them only for the purpose of delivering the services you have requested, unless you expressly allow us to use them in another way.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            7.2 Unless otherwise agreed in writing (for example, under a non-disclosure agreement), we may request your permission to display completed, non-sensitive work (such as logos, website designs, or branding) in our portfolio, marketing materials, or case studies. You are free to decline.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            7.3 Once all project fees have been paid in full, and unless stated otherwise in our agreement, the final deliverables we create for you (such as approved designs, source files, or website builds) are considered your property, subject to any third-party licenses or stock assets used in the project.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            8. Originality and Use of Third-Party Content
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            8.1 We make every effort to ensure that the designs, code, and content we create for you are original or properly licensed. We do not intentionally copy or reuse protected material from other sources without permission.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            8.2 When we use third-party resources (such as stock photos, fonts, icons, or plugins), they are incorporated under appropriate licenses. Where relevant, we will inform you of any ongoing license obligations or renewal requirements.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            9. Sharing Your Information with Third Parties
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            9.1 We do not sell or rent your personal information to third parties.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            9.2 We may share your information with trusted service providers who help us operate our business and deliver our services, such as hosting providers, payment processors, email service platforms, analytics providers, and subcontractors. These parties are only given access to the information necessary to perform their functions and are expected to protect it.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            9.3 We may also disclose your information if required by law, to respond to legal requests, enforce our agreements, or protect our rights, property, or the safety of our clients and users.
                        </p>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            9.4 Information collected through SMS opt-in (if applicable) will not be sold, rented, or shared with third parties for their own marketing purposes.
                        </p>

                        <h2 className=" font-bold mt-9 mb-6 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">
                            10. Contact Us
                        </h2>

                        <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                            If you have any questions about this Privacy Policy, or if you believe we are not complying with it, please contact us so we can address your concerns. You can reach us by email at [INSERT SUPPORT EMAIL] or by phone at [INSERT CONTACT NUMBER]. Our team will respond as soon as reasonably possible.
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
            <Sidepopup />
        </div>
    )
}
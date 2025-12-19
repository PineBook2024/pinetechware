import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo from "@/public/images/logo.png";
import styles from './Footer.module.css'
import Link from "next/link";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div>
            <footer className="text-white body-font brand-footer bg-black">
                <div className="container px-5 pt-10 pb-10 md:pt-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col position-relative">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly py-10">
                        <div className="lg:w-1/3 md:w-1/4 w-full px-4 widget-2 relative">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                                <Image src={logo} width={150} height={200} alt='logo'></Image>
                            </a>
                            <p className="mt-2 text-sm text-white leading-7 px-4">
                                Pine Techware is among the Leading Software Development Agencies in USA & UK. We are Committed to Provide Innovative Tech Products and Solutions with Affordability
                            </p>
                        </div>
                        <div className="lg:w-1/5 md:w-1/5 w-full px-4 widget-2 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Quick Links
                            </h2>
                            <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "/about"; }}>
                                        About
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = "/testimonials"; }}>
                                        Services
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = "/portfolio"; }}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/contact-us" onClick={(e) => { e.preventDefault(); window.location.href = "/contact-us"; }}>
                                        Contact Us
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/5 w-full px-4 widget-2 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Services
                            </h2>
                            <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/Professional-Branding" onClick={(e) => { e.preventDefault(); window.location.href = "/Professional-Branding"; }}>
                                        Branding
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/Website-Development" onClick={(e) => { e.preventDefault(); window.location.href = "/Website-Development"; }}>
                                        Web Design & Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/Social-Media-Marketing" onClick={(e) => { e.preventDefault(); window.location.href = "/Social-Media-Marketing"; }}>
                                        Digital Marketing
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Services
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/IOS-App" onClick={(e) => { e.preventDefault(); window.location.href = "/IOS-App"; }}>
                                        Mob App Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/Mobile-Game-Development" onClick={(e) => { e.preventDefault(); window.location.href = "/Mobile-Game-Development"; }}>
                                        Game Development
                                    </Link>
                                </li>

                                {/* <li className="mt-3">
                                    Testimonials
                                </li> */}
                                {/* <li className="mt-3">
                                    <Link href="/print-on-demand" onClick={(e) => { e.preventDefault(); window.location.href = "/print-on-demand"; }}>
                                        Website Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/document-processing" onClick={(e) => { e.preventDefault(); window.location.href = "/document-processing"; }}>
                                        E-Commerce Solution 
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/audio-book" onClick={(e) => { e.preventDefault(); window.location.href = "/audio-book"; }}>
                                        Custom Application
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/isbn-and-barcode" onClick={(e) => { e.preventDefault(); window.location.href = "/isbn-and-barcode"; }}>
                                       Email Marketing Services
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-marketing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-marketing"; }}>
                                        Search Engine Optimization
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/childrens-book-illustration" onClick={(e) => { e.preventDefault(); window.location.href = "/childrens-book-illustration"; }}>
                                        Social Media Marketing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-illustration-services" onClick={(e) => { e.preventDefault(); window.location.href = "/book-illustration-services"; }}>
                                        PPC Management
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Shopify Store
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        IOS App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Android App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        ASP App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Kotlin App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        React Native App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Flutter App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Swift App
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Mobile Game Development
                                    </Link>
                                </li> */}
                                {/* <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Unity Game Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Unreal Game Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Blockchain Game Development
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        2D Game Development
                                    </Link>
                                </li> */}
                            </nav>
                        </div>


                        <div className="lg:w-1/4 md:w-1/4 w-full px-4 widget-3 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl mb-3 font-poppins font-bold">
                                Contact Info
                            </h2>

                            <Link
                                href="tel:8887867135"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                Sales: (888) 786-7135
                            </Link>

                            <Link
                                href="tel:8668417469"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                Support: (866) 841-7469
                            </Link>

                            <Link
                                href="mailto:support@pinebookpublishing.com"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                support@pinebookpublishing.com
                            </Link>

                            {/* Canada Address */}
                            <h4 className="text-white font-bold text-xl font-poppins text-center lg:text-start uppercase">
                                Canada Address:
                            </h4>

                            <p className="text-white mb-3">
                                R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2
                            </p>

                            {/* <div className="w-full h-[200px] mb-6 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=10225+Yonge+St,+Richmond+Hill,+ON+L4C+3B2&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div> */}

                            {/* USA Address */}
                            <h4 className="text-white font-bold text-xl font-poppins text-center lg:text-start uppercase">
                                USA Address:
                            </h4>

                            <p className="text-white mb-3">
                                211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017
                            </p>

                            {/* <div className="w-full h-[200px] rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=211+E+43rd+St,+New+York,+NY+10017&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div> */}
                        </div>

                    </div>

                </div>
                <div className="copyright-sec">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2025 |
                            <Link
                                href="/terms-and-conditions"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Terms & Conditions |
                            </Link>

                            <Link
                                href="/privacy-policy"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Privacy Policy | {" "}
                            </Link>
                            Powered by <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" target="_blank">Pine Book Writing Inc.</Link></span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

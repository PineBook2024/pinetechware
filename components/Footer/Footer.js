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
            <footer className="footer bg-[#3bb9e1] lg:sticky left-0 z-10">
                <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8 lg:pt-20 pb-10 md:pt-24">

                    <div className="flex flex-wrap md:gap-y-0 gap-y-8" >
                        <div className="w-[50%] md:w-[21%]" >
                            <div >
                                <p className=" font-medium leading-6 text-white flex items-center text-xs lg:text-sm">Company</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <Link className={styles.menu_links} href="/about/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 leading-7 md:leading-12"><span>About Us</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/about/testimonial/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Testimonials</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/about/process/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Process</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/contact/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Contact</span></p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[22%] flex justify-center md:block" >
                            <div >
                                <p className=" font-medium leading-6 text-white flex items-center text-xs lg:text-sm">Resources</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <Link className={styles.menu_links}  href="/blog/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Blog</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/events/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Events</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/press-release/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Press Release</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/work/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Work</span></p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[32%]" >
                            <div >
                                <p className=" font-medium leading-6 text-white flex items-center text-xs lg:text-sm">Services</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <Link className={styles.menu_links}  href="/mobile-app-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Mobile App</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/game-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Game Development</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/blockchain-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Blockchain Development</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/artificial-intelligence/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>AI Development</span></p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[21%] flex justify-center md:block" >
                            <div >
                                <p className=" font-medium leading-6 text-white flex items-center text-xs lg:text-sm">Insights</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <Link href="/university/" target="_blank" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>University</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers/" target="_blank" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Careers</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className={styles.menu_links}  href="/about/manifesto/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Manifesto</span></p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/culture-book.pdf" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Culture Book</span></p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-b border-white my-10 md:my-16 md:py-16 py-10">
                        <p className=" font-medium leading-6 text-white flex items-center mb-3 md:mb-4 text-xs lg:text-sm">Locations</p>
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-16 gap-y-8">
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Canada Address</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">USA Address</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">73 211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Dubai</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">Building 11, Level 7, Bay Square,
                                    <br /> Business Bay, Dubai - 23304,
                                    <br />
                                </p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Karachi</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">54C, Kashmir Road, Block 2,
                                    <br /> PECHS, Karachi, Sindh - 75400,
                                    <br /> Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className=" font-medium leading-6 text-white flex items-center mb-4 text-xs lg:text-sm">Contact</p>
                            <ul className="mt-4 ">
                                <li><Link href="tel:866-841-7463" className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#3bb9e1] duration-500">866-841-7463</Link></li>
                                <li><Link href="mailto:info@pinetechware.com" className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#3bb9e1] duration-500">info@pinetechware.com</Link></li>
                            </ul>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <Link aria-current="page" className="justify-center mb-5 flex" href="/">
                            <Image src={logo} width="100" height="30" className="block" alt="logo"/>
                            </Link>

                            <p className=" text-white text-center block mb-3.5 text-xs lg:text-sm">© 2025 Cubix. All Rights Reserved</p>
                            <div className="flex gap-2 items-center">
                                <p className=" text-white text-center block text-xs lg:text-sm">Content protected by DMCA.com</p>
                        
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <Link aria-current="page" className="flex sm:hidden mb-3 sm:mb-0" href="/">
                            <Image src={logo} width="100" height="30" className="2xl:w-24 block" alt="logo"/>

                            </Link>
                            <div className="flex flex-col mb-2 sm:mb-5 space-y-4">
                                <div className="flex justify-end md:space-x-4 space-x-2.5">
                                    {/* <Link href="/" target="_blank">
                                    <FaLinkedinIn className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </Link> */}

                                    <Link href="https://www.instagram.com/pinetechware/" target="_blank">
                                    <FaInstagram className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </Link>


                                    <Link href="https://www.facebook.com/pinetechware" target="_blank" >
                                    <FaFacebookF className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </Link>
{/* 
                                    <Link href="" target="_blank">
                                    <FaYoutube className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </Link> */}
                                </div>
                            </div>
                            <div className="flex">
                                <Link href="/privacy-policy/">
                                    <p className="menu_links text-white hidden sm:block text-xs lg:text-sm">Privacy Policy</p>
                                </Link>
                                <p className="menu_links text-white hidden sm:block text-xs lg:text-sm">|</p>
                                <Link href="/terms-of-use/">
                                    <p className="menu_links text-white hidden sm:block text-xs lg:text-sm">Terms &amp; Conditions</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




            </footer>



              <footer className="text-white body-font brand-footer bg-black">
                <div className="container px-5 pt-10 pb-10 md:pt-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col position-relative">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly py-10">
                        <div className="lg:w-1/3 md:w-1/4 w-full px-4 widget-2 relative">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                                <Image src={logo} width={150} height={200}></Image>
                            </a>
                            <p className="mt-2 text-sm text-white leading-7 px-4">
                                Pine Book Publishing is a team of passionate book publishers that believe in the power of storytelling and the importance of writers' ability to tell their tales. Our streamlined process and dedicated support make book publishing service a realistic and rewarding goal for any author.
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
                                        About Us
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Services
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/testimonials" onClick={(e) => { e.preventDefault(); window.location.href = "/testimonials"; }}>
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/packages" onClick={(e) => { e.preventDefault(); window.location.href = "/packages"; }}>
                                        Packages
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = "/portfolio"; }}>
                                        Portfolio
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Testimonials
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/blog" onClick={(e) => { e.preventDefault(); window.location.href = "/blog"; }}>
                                        Blog
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
                                    <Link href="/book-publishing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-publishing"; }}>
                                        Book Publishing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-editing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-editing"; }}>
                                        Book Editing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/proofreading" onClick={(e) => { e.preventDefault(); window.location.href = "/proofreading"; }}>
                                        Proofreading
                                    </Link>
                                </li>
                                {/* <li className="mt-3">
                                    Services
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/book-formatting" onClick={(e) => { e.preventDefault(); window.location.href = "/book-formatting"; }}>
                                        Book Formatting
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/typesetting-layout-adjustment" onClick={(e) => { e.preventDefault(); window.location.href = "/typesetting-layout-adjustment"; }}>
                                        Typesetting & Layout
                                    </Link>
                                </li>

                                {/* <li className="mt-3">
                                    Testimonials
                                </li> */}
                                <li className="mt-3">
                                    <Link href="/print-on-demand" onClick={(e) => { e.preventDefault(); window.location.href = "/print-on-demand"; }}>
                                        Print On Demand
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/document-processing" onClick={(e) => { e.preventDefault(); window.location.href = "/document-processing"; }}>
                                        Document Processing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/audio-book" onClick={(e) => { e.preventDefault(); window.location.href = "/audio-book"; }}>
                                        Audio Book
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/isbn-and-barcode" onClick={(e) => { e.preventDefault(); window.location.href = "/isbn-and-barcode"; }}>
                                        ISBN & Barcode
                                    </Link>
                                </li>
                                 <li className="mt-3">
                                    <Link href="/book-marketing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-marketing"; }}>
                                        Book Marketing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/childrens-book-illustration" onClick={(e) => { e.preventDefault(); window.location.href = "/childrens-book-illustration"; }}>
                                        Children's Book Illustration
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-illustration-services" onClick={(e) => { e.preventDefault(); window.location.href = "/book-illustration-services"; }}>
                                        Book Illustration Services
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-translation" onClick={(e) => { e.preventDefault(); window.location.href = "/book-translation"; }}>
                                        Book Translation
                                    </Link>
                                </li>
                            </nav>
                        </div>


                        <div className="lg:w-1/4 md:w-1/4 w-full px-4 widget-3 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Contact Info
                            </h2>
                            <Link
                                href="tel:8887867135"
                                className="text-white text-sm hover:text-white font-poppins flex justify-center md:justify-start mb-5"
                            >
                                {/* <FontAwesomeIcon icon={faPhone} className="me-3" /> */}
                                Sales: (888) 786-7135
                            </Link>
                            <Link
                                href="tel:(866) 841-7469"
                                className="text-white text-sm hover:text-white font-poppins flex justify-center md:justify-start mb-5"
                            >
                                {/* <FontAwesomeIcon icon={faPhone} className="me-3" /> */}
                                Support: (866) 841-7469
                            </Link>
                            <Link
                                href="mailto:support@pinebookpublishing.com"
                                className="text-white hover:text-white font-poppins text-sm flex justify-center md:justify-start mb-5"
                            >
                                {/* <FontAwesomeIcon icon={faEnvelope} className="me-3" /> */}
                                {" "}
                                support@pinebookpublishing.com{" "}
                            </Link>
                            <h4 className="text-white leading-20 font-bold text-xl md:text-md font-poppins text-center lg:text-start uppercase">
                                Canada Address:
                            </h4>
                            <p className="text-white mb-5"> R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                            <h4 className="text-white leading-20 font-bold text-xl md:text-md font-poppins text-center lg:text-start uppercase">
                                USA Address:
                            </h4>
                            <p className="text-white mb-5">211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                            {/* <div>
                                <Link href="https://www.facebook.com/pinebookwriting0" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} className="me-3" />
                                </Link>
                                <Link href="https://www.instagram.com/pinebookwriting/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="me-3" />
                                </Link>
                                <Link href="https://x.com/pinebookwriting" target="_blank">
                                    <FontAwesomeIcon icon={faXTwitter} className="me-3" />
                                </Link>
                                <Link href="https://www.youtube.com/@Pinebookwriting" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} className="me-3" />
                                </Link>
                            </div> */}
                            {/* <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/book-editing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-editing"; }}>
                                        Book Editing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/proofreading" onClick={(e) => { e.preventDefault(); window.location.href = "/proofreading"; }}>
                                        Proofreading
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Book Formatting
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Typesetting & Layout
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/book-publishing" onClick={(e) => { e.preventDefault(); window.location.href = "/book-publishing"; }}>
                                        Book Publishing
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Audio Book
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Print on Demand
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href={'javascript:;'}>
                                        Document Processing
                                    </Link>
                                </li>
                            </nav> */}
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

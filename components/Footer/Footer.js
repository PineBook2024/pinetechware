import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo from "@/public/images/logo.png";
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black lg:sticky left-0 z-10">
                <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8 lg:pt-20 pb-10 md:pt-24">

                    <div className="flex flex-wrap md:gap-y-0 gap-y-8" >
                        <div className="w-[50%] md:w-[21%]" >
                            <div >
                                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">Company</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <a className={styles.menu_links} href="/about/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 leading-7 md:leading-12"><span>About Us</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/about/testimonial/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Testimonials</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/about/process/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Process</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/contact/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Contact</span></p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[22%] flex justify-center md:block" >
                            <div >
                                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">Resources</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <a className={styles.menu_links}  href="/blog/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Blog</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/events/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Events</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/press-release/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Press Release</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/work/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Work</span></p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[32%]" >
                            <div >
                                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">Services</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <a className={styles.menu_links}  href="/mobile-app-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Mobile App</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/game-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Game Development</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/blockchain-development/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Blockchain Development</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/artificial-intelligence/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>AI Development</span></p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[50%] md:w-[21%] flex justify-center md:block" >
                            <div >
                                <p className=" font-medium leading-6 text-neutral-500 flex items-center text-xs lg:text-sm">Insights</p>
                                <ul className="mt-2 md:mt-4 ">
                                    <li>
                                        <a href="/university/" target="_blank" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>University</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/careers/" target="_blank" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Careers</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a className={styles.menu_links}  href="/about/manifesto/">
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Manifesto</span></p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/culture-book.pdf" className={styles.menu_links} >
                                            <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-white hover:text-[#3bb9e1] duration-500 menu_links leading-7 md:leading-12"><span>Culture Book</span></p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-b border-white/10 my-10 md:my-16 md:py-16 py-10">
                        <p className=" font-medium leading-6 text-neutral-500 flex items-center mb-3 md:mb-4 text-xs lg:text-sm">Locations</p>
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-x-16 gap-y-8">
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">West Palm Beach</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">560 Village Blvd., Suite 120 #3,
                                    <br /> West Palm Beach, FL-33409,
                                    <br /> United States</p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Manchester</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">73 Meadway, Bramhall
                                    <br /> Stockport, Manchester - SK7 1LX,
                                    <br />United Kingdom</p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Dubai</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">Building 11, Level 7, Bay Square,
                                    <br /> Business Bay, Dubai - 23304,
                                    <br />
                                </p>
                            </div>
                            <div>
                                <p className=" undefined text-white mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Karachi</p>
                                <p className="undefined text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                                <p className=" undefined text-neutral-500 font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base hover:text-white duration-500">54C, Kashmir Road, Block 2,
                                    <br /> PECHS, Karachi, Sindh - 75400,
                                    <br /> Pakistan</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className=" font-medium leading-6 text-neutral-500 flex items-center mb-4 text-xs lg:text-sm">Contact</p>
                            <ul className="mt-4 ">
                                <li><a href="tel:866-978-2220" className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#3bb9e1] duration-500">866-978-2220</a></li>
                                <li><a href="mailto:info@cubix.co" className="text-white font-medium menu_links text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#3bb9e1] duration-500">info@cubix.co</a></li>
                            </ul>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <a aria-current="page" className="justify-center mb-5 flex" href="/">
                            <Image src={logo} width="100" height="30" className="block" alt="logo"/>
                            </a>

                            <p className=" text-neutral-500 text-center block mb-3.5 text-xs lg:text-sm">© 2025 Cubix. All Rights Reserved</p>
                            <div className="flex gap-2 items-center">
                                <p className=" text-neutral-500 text-center block text-xs lg:text-sm">Content protected by DMCA.com</p>
                                {/* <a href="https://www.dmca.com/Protection/Status.aspx?ID=e24518dd-1572-488a-a06f-e64b8b27d270&amp;refurl=https://www.cubix.co/" target="_blank" title="DMCA.com Protection Status" className="dmca-badge">
                                
                                <Image src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-06.png?ID=e24518dd-1572-488a-a06f-e64b8b27d270" alt="DMCA.com Protection Status" width="120"/>
                                </a> */}
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <a aria-current="page" className="flex sm:hidden mb-3 sm:mb-0" href="/">
                            <Image src={logo} width="100" height="30" className="2xl:w-24 block" alt="logo"/>

                            </a>
                            <div className="flex flex-col mb-2 sm:mb-5 space-y-4">
                                <div className="flex justify-end md:space-x-4 space-x-2.5">
                                    <a href="/" target="_blank">
                                    <FaLinkedinIn className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>


                                    </a>

                                    <a href="" target="_blank">
                                    <FaXTwitter className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </a>


                                    <a href="" target="_blank" >
                                    <FaFacebookF className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>
                                    </a>

                                    <a href="" target="_blank">
                                    <FaYoutube className="w-5 md:w-7 h-5 md:h-7 object-cover hover:text-white duration-500 text-[#3bb9e1]"/>


                                    </a>
                                </div>
                            </div>
                            <div className="flex">
                                <a href="/privacy-policy/">
                                    <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">Privacy Policy</p>
                                </a>
                                <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">|</p>
                                <a href="/terms-of-use/">
                                    <p className="menu_links text-neutral-500 hidden sm:block text-xs lg:text-sm">Terms &amp; Conditions</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




            </footer>
        </div>
    )
}

export default Footer

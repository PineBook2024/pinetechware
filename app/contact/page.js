'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import Trigger from '@/components/Trigger/Trigger'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import florida from '@/public/images/florida.webp';
import usa from '@/public/images/usa.webp';

import Image from 'next/image'




// import Link from 'next/link'

// Handle input changes
const handleChange = (e) => {
    const { name, value } = e.target; // Target ke name aur value ko destructure karein
    setFormData(prevState => ({
        ...prevState,
        [name]: value // Dynamic key value set karein
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setLoading(false);
        setResponseMessage(data.message);

        if (response.ok) {
            setFormData({ name: "", email: "", message: "" });
        }
    } catch (error) {
        console.error("❌ Fetch error:", error);
        setResponseMessage("❌ Failed to send message.");
        setLoading(false);
    }
};

export default function contact() {
    return (
        <div>

            <Head>
                {/* <title>Home - My Software Company</title>
        <meta name="description" content="We build software solutions..." /> */}
            </Head>
                <Navbar />

            <section className="px-6 lg:px-8 pt-24 md:pt-[10.5rem] bg-[#3BB9E1] ">
                <div className='md:flex max-w-7xl mx-auto '>
                    <div className='w-full md:w-[40%] md:pr-20'>
                        <div className='overflow-hidden'>
                            <h1 className=" font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">Got an idea for your project?</h1>
                        </div>
                        <p className=" text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">We’d love to learn more about you and what we can design and build together.</p>
                        <div className='mt-8 md:mt-[220px] 2xl:mt-[175px] flex flex-col wrap md:gap-x-0 gap-2 gap-x-4'>
                            <div className='flex items-center'>
                                <IoIosMail className='h-5 w-5 md:h-6 md:w-6 mr-4' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                    <Link href="mailto: info@pinetechware.com">info@pinetechware.com</Link></p>
                            </div>
                            <div className='flex items-center md:mt-4'>
                                <MdOutlineLocalPhone className='h-5 w-5 md:h-6 md:w-6 mr-4' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                    <Link href="phone: 866-841-7463">866-841-7463</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[60%]">
                        <form id="contact-form" data-hs-cf-bound="true">
                            <div className="grid grid-col-12 gap-x-2 md:gap-x-10 md:gap-y-10 gap-y-6">
                                <div className="col-span-12 mt-14 md:mt-0">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Name*</p>
                                    <div className="mt-2">
                                        <input onChange={handleChange} type="text" name="name" id="name" autoComplete="given-name" className="bg-[#F1F1F1] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl " />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Email*</p>
                                    <div className="mt-2">
                                        <input onChange={handleChange} type="email" name="email" id="email" autoComplete="given-email" className="bg-[#F1F1F1] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl " />
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Phone*</p>
                                    <div className="mt-2">
                                        <input type="number" name="number" id="number" autoComplete="off" onChange={handleChange} className="bg-[#F1F1F1] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                                    </div>
                                </div>
                                <div className="col-span-12">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Message*</p>
                                    <div className="mt-2">
                                        <textarea onChange={handleChange} id="message" rows="3" className="bg-[#F1F1F1] px-5 pt-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl h-[122]" />
                                    </div>
                                </div>
                                <div className="col-span-12 mt-2">
                                    {/* <button id="button_686890" type="submit" className="px-6 md:px-11 w-full h-[40px] md:h-[68px] border-transparent rounded-full bg-black text-white">
                                        <p className=" font-bold text-xs xl:text-sm 2xl:text-base">Send Message</p>
                                    </button> */}
                                    <button
                                        id="button_686890"
                                        type="submit"
                                        className="px-6 md:px-11 w-full h-[40px] md:h-[68px]  rounded-full bg-black text-white dark:bg-white dark:text-black font-bold text-xs xl:text-sm 2xl:text-base"
                                    >Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <section className="HalfTextContent-sec bg-[#3BB9E1] ">
                <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-7 xl:pr-4">
                            <div className="lg:overflow-hidden">
                                <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our global office locations</span></h2></div>
                            <p className=" lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">Find your team among 350 specialists in 4 offices from 3 countries.</p>
                        </div>
                    </div>
                </div>
            </section>


            <div className="px-6 lg:px-8 py-12 md:py-20 bg-[#3BB9E1] ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-x-10 sm:gap-y-10 max-w-7xl mx-auto ">
                    <div>
                        <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl" src={florida} alt="Location" />
                        <div>
                            <p className="   mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">Canada Address</p>
                            <p className="text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                        </div>
                    </div>
                    <div>
                        <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl" src={usa} alt="Location" />
                        <div>
                            <p className="  mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">USA Address</p>
                            <p className=" text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</p>
                        </div>
                    </div>

                    {/* <div>
                        <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl" src={florida} alt="Location" />
                        <div>
                            <p className="  text-black mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Dubai</p>
                            <p className=" text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">Building 11, Level 7, Bay Square,
                                <br /> Business Bay, Dubai - 23304,
                                <br /> United Arab Emirates</p>
                        </div>
                    </div>
                    <div>
                        <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl" src={florida} alt="Location" />
                        <div>
                            <p className="  text-black mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Karachi</p>
                            <p className=" text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">54C, Kashmir Road, Block 2,
                                <br /> PECHS, Karachi, Sindh - 75400,
                                <br /> Pakistan</p>
                        </div>
                    </div> */}

                </div>
            </div>


            <Trigger />


            <Footer />

            <Sidepopup />

        </div>
    )
}


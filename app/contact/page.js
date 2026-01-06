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
import { useState } from "react";
import Image from 'next/image'
import ContactForm from '@/components/ContactForm/ContactForm'




// import Link from 'next/link'

// Handle input changes


export default function contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Something went wrong");
            }

            setStatus({ type: "success", message: data.message });
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (err) {
            setStatus({
                type: "error",
                message: err.message || "Failed to send message",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>

            <Head>
                {/* <title>Home - My Software Company</title>
        <meta name="description" content="We build software solutions..." /> */}
            </Head>
            <div data-theme="light">
                <Navbar />
            </div>

            <ContactForm />


            <section className="HalfTextContent-sec bg-[#3BB9E1] ">
                <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
                    <div className="">
                        <div className="lg:col-span-7 xl:pr-4">
                            <div className="lg:overflow-hidden">
                                <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl text-center  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our global office locations</span></h2></div>
                            {/* <p className=" lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">Find your team among 350 specialists in 4 offices from 3 countries.</p> */}
                        </div>
                    </div>
                </div>
            </section>



            <div className="px-6 lg:px-8 py-12 md:py-20 bg-[#3BB9E1]">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-5 sm:gap-x-10 sm:gap-y-10 max-w-7xl mx-auto ">
                    <div>
                        {/* <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl" src={florida} alt="Location" /> */}
                        <div className="w-full h-[400px] mb-6 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=10225+Yonge+St,+Richmond+Hill,+ON+L4C+3B2&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        <div>
                            <p className="   mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">Canada Address</p>
                            <p className="text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</p>
                        </div>
                    </div>
                    <div>
                        {/* <Image className="mb-5 md:mb-[46px] lg:rounded-[30px] rounded-2xl w-full h-100" src={usa} alt="Location" /> */}
                        <div className="w-full h-[400px] mb-6 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.169376548553!2d-106.9549129!3d44.7977367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1767397484664!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        <div>
                            <p className="  mb-1 font-medium text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">USA Address</p>
                            <p className=" text-white mb-3 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"></p>
                            <p className="  text-white font-medium leading-5 md:leading-6 text-xs xl:text-sm 2xl:text-base">30 N Gould St 54593 Sheridan Wyoming 82801-6317</p>
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


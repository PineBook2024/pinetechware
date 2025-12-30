import React from 'react'
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from 'next/link';
import { useState } from "react";


const ContactForm = () => {

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

            <section className="px-6 lg:px-8 pt-24 md:py-[10.5rem] bg-white ">
                <div className='md:flex max-w-7xl mx-auto '>
                    <div className='w-full md:w-[40%] md:pr-20'>
                        <div className='overflow-hidden'>
                            <h1 className=" font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black">Got an idea for your project?</h1>
                        </div>
                        <p className=" text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black">We'd love to learn more about you and what we can design and build together.</p>
                        <div className='mt-8 md:mt-[220px] 2xl:mt-[175px] flex flex-col wrap md:gap-x-0 gap-2 gap-x-4'>
                            <div className='flex items-center'>
                                <IoIosMail className='h-5 w-5 md:h-6 md:w-6 mr-4 text-black' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    <Link href="mailto: info@pinetechware.com">info@pinetechware.com</Link></p>
                            </div>
                            <div className='flex items-center md:mt-4'>
                                <MdOutlineLocalPhone className='h-5 w-5 md:h-6 md:w-6 mr-4 text-black' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    <Link href="phone: 866-841-7463">866-841-7463</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[60%]">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="grid grid-col-12 gap-x-2 md:gap-x-10 md:gap-y-10 gap-y-6">
                                <div className="col-span-12 mt-14 md:mt-0">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Name*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            autoComplete="given-name"
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl "
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Email*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            autoComplete="email"
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl "
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12 sm:col-span-6">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Phone*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12">
                                    <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Message*
                                    </p>
                                    <div className="mt-2">
                                        <textarea
                                            onChange={handleChange}
                                            id="message"
                                            name="message"        // IMPORTANT: API ke saath match
                                            rows="3"
                                            value={formData.message}
                                            className="bg-[#dddd] px-5 pt-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl h-[122]"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-12 mt-2">
                                    <button
                                        id="button_686890"
                                        type="submit"
                                        disabled={loading}
                                        className="text-white px-6 md:px-11 w-full bg-black cursor-pointer h-[40px] md:h-[68px] rounded-full font-bold text-xs xl:text-sm 2xl:text-base disabled:opacity-60"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>

                                    {status && (
                                        <p
                                            className={`mt-3 text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"
                                                }`}
                                        >
                                            {status.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactForm

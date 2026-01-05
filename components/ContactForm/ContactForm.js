import React from 'react';
import { IoIosMail } from "react-icons/io";
import { MdOutlineLocalPhone } from "react-icons/md";
import Link from 'next/link';
import { useState, useMemo } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    // ✅ Validation helpers
    const validateName = (value) => {
        const v = value.trim();
        if (!v) return "Name is required";
        if (v.length < 2) return "Name must be at least 2 characters";
        return "";
    };

    const validateEmail = (value) => {
        const v = value.trim();
        if (!v) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(v)) return "Please enter a valid email address";
        return "";
    };

    const validatePhone = (value) => {
        const v = value.trim();
        if (!v) return "Phone number is required";
        const digitsOnly = /^\d+$/;
        if (!digitsOnly.test(v)) return "Phone number must contain digits only";
        if (v.length < 9) return "Phone number must be at least 9 digits";
        return "";
    };

    const validateMessage = (value) => {
        const v = value.trim();
        if (!v) return "Message is required";
        if (v.length < 10) return "Message must be at least 10 characters";
        return "";
    };

    // ✅ Validate all fields
    const validateAll = () => {
        const nextErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            message: validateMessage(formData.message),
        };

        setErrors(nextErrors);
        return Object.values(nextErrors).every((e) => !e);
    };

    // ✅ Check if form is valid
    const isFormValid = useMemo(() => {
        return (
            !validateName(formData.name) &&
            !validateEmail(formData.email) &&
            !validatePhone(formData.phone) &&
            !validateMessage(formData.message)
        );
    }, [formData]);

    // ✅ Handle change with live validation
    const handleChange = (e) => {
        const { name, value } = e.target;

        // For phone, only allow digits
        if (name === "phone") {
            if (value !== "" && !/^\d*$/.test(value)) {
                setErrors((prev) => ({ 
                    ...prev, 
                    phone: "Phone number must contain digits only" 
                }));
                return;
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Live validation
        if (name === "name") {
            setErrors((prev) => ({ ...prev, name: validateName(value) }));
        } else if (name === "email") {
            setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        } else if (name === "phone") {
            setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
        } else if (name === "message") {
            setErrors((prev) => ({ ...prev, message: validateMessage(value) }));
        }
    };

    // ✅ Handle blur
    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setErrors((p) => ({ ...p, name: validateName(value) }));
        } else if (name === "email") {
            setErrors((p) => ({ ...p, email: validateEmail(value) }));
        } else if (name === "phone") {
            setErrors((p) => ({ ...p, phone: validatePhone(value) }));
        } else if (name === "message") {
            setErrors((p) => ({ ...p, message: validateMessage(value) }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate all fields
        const ok = validateAll();
        if (!ok) {
            setStatus({
                type: "error",
                message: "Please fix the errors above before submitting"
            });
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch("/api/send-brand-contact-email", {
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
            setErrors({ name: "", email: "", phone: "", message: "" });

            // Optional: Scroll to success message
            setTimeout(() => {
                document.getElementById("contact-form")?.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                });
            }, 100);
        } catch (err) {
            setStatus({
                type: "error",
                message: err.message || "Failed to send message. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="px-6 lg:px-8 pt-24 md:py-[10.5rem] bg-white">
                <div className='md:flex max-w-7xl mx-auto'>
                    <div className='w-full md:w-[40%] md:pr-20'>
                        <div className='overflow-hidden'>
                            <h1 className="font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black">
                                Got an idea for your project?
                            </h1>
                        </div>
                        <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-black">
                            We'd love to learn more about you and what we can design and build together.
                        </p>
                        <div className='mt-8 md:mt-[220px] 2xl:mt-[175px] flex flex-col wrap md:gap-x-0 gap-2 gap-x-4'>
                            <div className='flex items-center'>
                                <IoIosMail className='h-5 w-5 md:h-6 md:w-6 mr-4 text-black' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    <Link href="mailto: info@pinetechware.com">info@pinetechware.com</Link></p>
                            </div>
                            <div className='flex items-center md:mt-4'>
                                <MdOutlineLocalPhone className='h-5 w-5 md:h-6 md:w-6 mr-4 text-black' />
                                <p className="mx-3 font-bold text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
                                    <Link href="tel:3075221099">(307) 522-1099</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-[60%]">
                        <form id="contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-col-12 gap-x-2 md:gap-x-10 md:gap-y-10 gap-y-6">
                                {/* Name Field */}
                                <div className="col-span-12 mt-14 md:mt-0">
                                    <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Name*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            autoComplete="given-name"
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                            required
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="col-span-12 sm:col-span-6">
                                    <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Email*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            autoComplete="email"
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                            required
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="col-span-12 sm:col-span-6">
                                    <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Phone*
                                    </p>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={formData.phone}
                                            className="bg-[#dddd] h-12 md:h-14 px-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                                            required
                                        />
                                        {errors.phone && (
                                            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="col-span-12">
                                    <p className="font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl text-black">
                                        Message*
                                    </p>
                                    <div className="mt-2">
                                        <textarea
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="message"
                                            name="message"
                                            rows="3"
                                            value={formData.message}
                                            className="bg-[#dddd] px-5 pt-5 block w-full rounded-[15px] border-0 py-1.5 text-black focus-visible:outline-[#3BB9E1] text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl h-[122px]"
                                            required
                                        />
                                        {errors.message && (
                                            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="col-span-12 mt-2">
                                    <button
                                        id="button_686890"
                                        type="submit"
                                        disabled={!isFormValid || loading}
                                        className="text-white px-6 md:px-11 w-full bg-black cursor-pointer h-[40px] md:h-[68px] rounded-full font-bold text-xs xl:text-sm 2xl:text-base disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>

                                    {status && (
                                        <div
                                            className={`mt-4 p-4 rounded-lg ${
                                                status.type === "success" 
                                                    ? "bg-green-50 text-green-700 border border-green-200" 
                                                    : "bg-red-50 text-red-700 border border-red-200"
                                            }`}
                                        >
                                            <p className="font-medium">{status.message}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
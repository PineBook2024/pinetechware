import React from "react";
import Image from "next/image";
import { usePopup } from "@/context/PopupContext"


export default function StaffAugmentation() {
    const bullets = [
        "Skilled in embedded systems, ADAS, infotainment, and mobility solutions",
        "Add engineers, architects, and testers as needed",
        "Integrates smoothly with your in-house team",
        "Cut recruitment costs while maintaining quality",
        "Proficient in ISO 26262, AUTOSAR, and industry standards",
        "Development, testing, and post-launch maintenance",
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

    const { openPopup, closePopup, isOpen } = usePopup();
    

    return (
        <section className="requestServiceAndroid-sec px-6 pt-14 md:py-24 lg:py-[10.5rem] md:px-8 bg-white" id="staff-augmentation">
            <div className="mx-auto max-w-7xl">
                <div className="md:flex">
                    <div className="w-full xl:w-[60%] lg:w-[55%] md:w-[50%] mr-[5%]">
                        <h2 className="text-black font-bold pb-6 lg:pb-[2.375rem] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px]">
                            our staff augmentation for automotive software
                        </h2>
                        <p className="text-black text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                            Enhance automotive software with Pine Techware staff augmentation. Our experts ensure efficiency, compliance, and innovation, seamlessly integrating with your team.
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
    );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/public/images/logo1.svg";
import Logo2 from "@/public/images/logo2.svg";
import Logo3 from "@/public/images/logo3.svg";
import styles from "./Logos.module.css";



export default function Logos() {

    return (
        <>
            <section className="logo-slider overflow-x-hidden sm:overflow-x-auto h-10vh] bg-[#3BB9E1]">
                <div className="border-b border-gray-300">
                    <div className="slider">
                        <div className="slide-track">
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo1} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo2} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo3} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo1} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo2} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo3} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo1} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo2} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo3} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo1} width="120" height={120} alt="logo-5" />
                            </div>
                            <div className="slide">
                                <Image className="invert h-[91px] mr-[52px]" loading="lazy" src={Logo3} width="120" height={120} alt="logo-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

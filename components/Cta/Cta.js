import React from "react";
import styles from "./Cta.module.css";

import { usePopup } from "@/context/PopupContext";



export default function Cta() {
    const { openPopup, closePopup, isOpen } = usePopup();

    return (
        <>
            <section className="RequestService-sec bg-[#3BB9E1] py-14 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col justify-between gap-x-8 gap-y-4 bg-gradient-to-r from-[#f6f6f6b3] to-[#dfe2e659] p-4 md:p-6 md:flex-row md:items-center lg:pl-11 lg:pr-8 rounded-2xl md:rounded-full border">
                        <h4 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] md:w-[70%] lg:w-[75%] xl:w-[80%]">
                            Create An Impactful <span className="text-theme">Product</span> With Us.
                        </h4>
                        <div className="flex">
                            <button
                                className={`${styles.buttonChange} ${styles.buttonChangeBlack }   bg-black text-white 2xl:w-[180px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm ` } onClick={openPopup}
                            >

                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

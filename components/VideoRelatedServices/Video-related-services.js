import React from 'react'
import Img2 from "@/public/images/check.svg";
import Image from "next/image";



const relatedServices = [
  { name: "Motion Graphics" },
  { name: "2D & 3D Animation" },
  { name: "Explainer Videos" },
  { name: "Social Media Video Design" },
  { name: "Branding & Visual Identity" },
  { name: "Custom Graphic Design" },
  { name: "UI/UX Design" },
  { name: "Video Editing" },
  { name: "Promotional Video Creation" },
  { name: "Product Demo Videos" },
]

const VideoRelatedServices = () => {
    return (
        <div>

            <section className="textContent-sec bg-white">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
                    <div className="2xl:max-w-4xl lg:max-w-3xl">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] uppercase text-black">
                                <span>Related Services</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-12 lg:mt-20">
                    <div className="grid grid-cols-12 gap-y-4 md:gap-7">

                        {relatedServices.map((item, index) => (
                            <div
                                key={index}
                                className="md:col-span-4 col-span-12 text-black flex lg:gap-5 gap-3 items-start"
                            >
                                <Image
                                    src={Img2}
                                    className="h-[20px] w-[20px] lg:h-[27px] lg:w-[30px] 2xl:h-[30px] 2xl:w-[33px]"
                                    alt="Pine Tech Wear Asset"
                                    loading="lazy"
                                />

                                <ul>
                                    <li>
                                        <a className="hover:underline underline-offset-[9px] decoration-1 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                            {item.name}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default VideoRelatedServices





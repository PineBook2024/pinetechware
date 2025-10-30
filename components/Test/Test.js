import React from 'react'
import Image from 'next/image'
import play from '@/public/images/play.svg'
import vid from '@/public/images/vid.webp'
import { useState } from 'react'

const Highlights = () => {

    const tabsData = [
        {
            id: 1,
            title: "Recommendations",
            videos: [
                {
                    id: 1,
                    thumbnail: vid,
                    caption: "Women's Day 2022.",
                },
                {
                    id: 2,
                    thumbnail: vid,
                    caption:
                        "Equality Brings Innovation and Opportunity to the Workplace | Cubix | Salman Lakhani.",
                },
                {
                    id: 3,
                    thumbnail: vid,
                    caption: "Celebrating International Women's Day 2021.",
                },
            ],
        },
        {
            id: 2,
            title: "Meet Up",
            videos: [
                {
                    id: 1,
                    thumbnail: vid,
                    caption: "Annual Meet Up 2023 - Highlights.",
                },
                {
                    id: 2,
                    thumbnail: vid,
                    caption: "Team bonding session at Cubix HQ.",
                },
            ],
        },
        {
            id: 3,
            title: "Life at Cubix",
            videos: [
                {
                    id: 1,
                    thumbnail: vid,
                    caption: "Life at Cubix - A Day in the Office.",
                },
                {
                    id: 2,
                    thumbnail: vid,
                    caption: "Cubix Picnic 2022 - Fun and Memories.",
                },
            ],
        },
    ];


    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            <section className="bg-black pb-14 md:pb-24">
                <div className="insightsHome px-6 lg:px-8 max-w-7xl mx-auto mb-1 lg:mb-12">
                    <div className="lg:overflow-hidden">
                        <h2 className="font-bold text-white sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                            <span>our</span>
                            <span className="text-theme">
                                <span> highlights</span>
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="px-6 lg:px-8 max-w-7xl mx-auto gap-x-4 md:gap-y-8 gap-y-4 sm:gap-x-6 xl:gap-x-8 flex flex-wrap flex-col md:flex-row">
                    {/* Left Side Tabs */}
                    <div className="w-full md:w-3/12 overflow-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-row md:pt-12 pt-6">
                        <div className="flex md:flex-col rounded-xl md:gap-0 gap-6">
                            <ul className="text-lg lg:text-xl 2xl:text-2xl font-medium space-y-4 md:space-y-6 xl:space-y-10 2xl:space-y-8 pr-4 md:pr-0">
                                {tabsData.map((tab) => (
                                    <li
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`cursor-pointer whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === tab.id ? "text-red-500" : "text-white"
                                            }`}
                                    >
                                        {tab.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="mt-8 lg:mt-0 lg:pt-5 w-full md:w-8/12 flex-row xl:px-0 lg:ps-4 md:ps-0">
                        <div className="flex md:flex-row flex-col md:items-center md:justify-evenly lg:-mt-36 md:gap-x-12 items-center">
                            {/* Videos list */}
                            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10">
                                {tabsData
                                    .find((tab) => tab.id === activeTab)
                                    ?.videos.map((video) => (
                                        <div
                                            key={video.id}
                                            className="max-w-sm sm:max-w-[35rem] lg:max-w-xs"
                                        >
                                            <div className="flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center lg:rounded-[30px] rounded-2xl"></div>
                                                <button className="absolute">
                                                    <Image src={play} alt="Play Icon" className="w-16 h-16" />
                                                </button>
                                                <Image
                                                    src={video.thumbnail}
                                                    width="360"
                                                    height="285"
                                                    className="lg:rounded-[30px] rounded-2xl w-full object-contain h-full"
                                                    alt={video.caption}
                                                />
                                            </div>
                                            <p className="text-neutral-200 mt-5 font-medium line-clamp-2 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                                                {video.caption}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Highlights

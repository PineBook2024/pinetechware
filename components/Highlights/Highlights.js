import React, { useState } from "react";
import Image from "next/image";
import play from "@/public/images/play.svg";
import vid from "@/public/images/vid.webp";

const Highlights = () => {
  const tabsData = [
    {
      id: 1,
      title: "Stories That Inspire",
      leftVideo: {
        id: 1,
        video: vid,
        title: "John Boccuzzi spoke about the entrepreneurial...",
      },
      rightVideos: [
        {
          id: 2,
          video: vid,
          title: "Pine Techware Reviews & Testimonials Greg...",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
        {
          id: 3,
          video: vid,
          title: "Pine Techware Reviews & Testimonials - Karen...",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 block lg:hidden",
        },
        {
          id: 4,
          video: vid,
          title: "Pine Techware Reviews & Testimonials - Karen...",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
      ],
    },
    {
      id: 2,
      title: "Meet Up",
      leftVideo: {
        id: 1,
        video: vid,
        title: "Annual Meet Up 2023 - Highlights.",
      },
      rightVideos: [
        {
          id: 2,
          video: vid,
          title: "Team bonding session at Pine Techware HQ.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
        {
          id: 3,
          video: vid,
          title: "Pine Techware MeetUp fun moments.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 block lg:hidden",
        },
        {
          id: 4,
          video: vid,
          title: "Pine Techware Celebrations 2023.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
      ],
    },
    {
      id: 3,
      title: "Culture & Beyond",
      leftVideo: {
        id: 1,
        video: vid,
        title: "Life at Pine Techware - A Day in the Office.",
      },
      rightVideos: [
        {
          id: 2,
          video: vid,
          title: "Pine Techware Picnic 2022 - Fun and Memories.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
        {
          id: 3,
          video: vid,
          title: "Celebrating small wins together.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 block lg:hidden",
        },
        {
          id: 4,
          video: vid,
          title: "Pine Techware Teamwork and Culture.",
          classes:
            "max-w-sm sm:max-w-[35rem] lg:max-w-xs mt-10 hidden lg:block",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const currentTab = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-black pb-14 md:pb-24">
      <div className="insightsHome px-6 lg:px-8 max-w-7xl mx-auto mb-1 lg:mb-12">
        <div className="lg:overflow-hidden">
          <h2 className="font-bold text-white sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
            <span>In the </span>
            <span className="text-theme">
              <span> Spotlight</span>
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
                  className={`cursor-pointer whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full md:px-3 font-medium text-left ${
                    activeTab === tab.id ? "text-[#3bb9e1]" : "text-white"
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
            {/* Left Big Video */}
            <div className="max-w-sm sm:max-w-[35rem] md:w-[27rem] lg:max-w-sm hidden lg:block">
              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center lg:rounded-[30px] rounded-2xl"></div>
                <button className="absolute">
                  <Image src={play} alt="Play Icon" className="w-16 h-16" />
                </button>
                <Image
                  src={currentTab.leftVideo.video}
                  width="370"
                  height="380"
                  className="lg:rounded-[30px] rounded-2xl w-full object-contain h-full"
                  alt="Pine Techware insights"
                />
              </div>
              <p className="text-neutral-200 mt-5 font-medium line-clamp-2 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {currentTab.leftVideo.title}
              </p>
            </div>

            {/* Right Small Videos */}
            <div className="flex flex-col">
              {currentTab.rightVideos.map((item) => (
                <div key={item.id} className={item.classes}>
                  <div className="flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center lg:rounded-[30px] rounded-2xl"></div>
                    <button className="absolute">
                      <Image src={play} alt="Play Icon" className="w-16 h-16" />
                    </button>
                    <Image
                      src={item.video}
                      width="360"
                      height="285"
                      className="lg:rounded-[30px] rounded-2xl w-full object-contain h-full"
                      alt="Pine Techware insights"
                    />
                  </div>
                  <p className="text-neutral-200 mt-5 font-medium line-clamp-2 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

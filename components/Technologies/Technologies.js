import React from 'react'
import { useState } from "react";
import { FaReact } from "react-icons/fa6";
import Image from 'next/image'


const Technologies = () => {
  const tabData = {
    "Branding": {
      left: [
        {
          title: "Custom Graphic Designs",
          image: "/images/icon1.svg",
        },
        {
          title: "Logo Design",
          image: "/images/icon2.svg",
        },
        {
          title: "Logo Designs",
          image: "/images/icon3.svg",
        },
        {
          title: "Video Animation",
          image: "/images/icon4.svg",
        },
      ],
    },

    "Web Design and Development": {
      left: [
        {
          title: "Website Designing",
          image: "/images/icon5.svg",
        },
        {
          title: "Informative Website",
          image: "/images/icon6.svg",
        },
        {
          title: "E-commerce Solutions",
          image: "/images/icon7.svg",
        },
        {
          title: "Custom Applications",
          image: "/images/icon8.svg",
        },
      ],

    },

    "Digital Marketing": {
      left: [
        {
          title: "Email Marketing Services",
          image: "/images/icon9.svg",
        },
        {
          title: "Search Engine Optimization",
          image: "/images/icon10.svg",
        },
        {
          title: "Social Media Marketing",
          image: "/images/icon11.svg",
        },
        {
          title: "PPC Management",
          image: "/images/icon12.png",
        },
        {
          title: "Shopify Store",
          image: "/images/icon13.png",
        },
      ],

    },

    "Mobile Application Development": {
      left: [
        {
          title: "IOS App",
          image: "/images/m1.png",
        },
        {
          title: "Android App",
          image: "/images/m2.png",
        },
        {
          title: "ASP App",
          image: "/images/m3.png",
        },
        {
          title: "Kotlin App",
          image: "/images/m4.png",
        },
        {
          title: "React Native App",
          image: "/images/m5.png",
        },
        {
          title: "Flutter App",
          image: "/images/m6.png",
        },
        {
          title: "Swift App",
          image: "/images/m7.png",
        },
      ],
    },
  };


  const tabKeys = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);


  return (
    <div>
      <section className="bg-white">
        <div className="container xl:max-w-7xl mx-auto w-full px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-7xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black">
                <span>Technologies & Tools We Use That Create An Impact</span>
              </h2>
            </div>
            <p className="lg:py-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
              We’re fluent in:
            </p>
            <div className="flex flex-wrap flex-col md:flex-row md:border-t border-gray-300">
            </div>


            <div className="w-full mx-auto mt-10">

              {/* Tabs */}
              <div className="flex flex-col md:flex-row md:space-y-0 gap-4 border-b pb-2">
                {tabKeys.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-semibold rounded-md 
              ${activeTab === tab ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="mt-6">

                {/* Left List */}
                <div className='flex flex-wrap gap-5'>
                  {tabData[activeTab].left.map((item, index) => (
                    <div key={index} className="flex flex-wrap items-center gap-4 mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-contain grayscale"
                        width={50}
                        height={50}
                      />
                      <p className="text-lg font-semibold text-black">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Technologies

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

      // right: [

      //   {
      //     title: "Professional Branding",
      //     image: "/images/icon6.svg",
      //   },
      //   {
      //     title: "Stationary Design",
      //     image: "/images/icon7.svg",
      //   },
      // ],
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

      // right: [

      //   {
      //     title: "Custom Applications",
      //     image: "/images/icon1.svg",
      //   },
      //   {
      //     title: "Ecommerce Website",
      //     image: "/images/icon1.svg",
      //   },
      // ],
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

  // const [activeTab, setActiveTab] = useState("Branding");

  // object structure
  // const techData = {
  //   "Branding": {
  //     sections: [
  //       {
  //         title: "React",
  //         icon: [<FaReact />, <FaReact />, <FaReact />, <FaReact />, <FaReact />],
  //         items: ["React.js", "Angular", "Vue.js", "Node.js", "Django"],
  //       },
  //     ],
  //   },
  //   "Web Design and Development": {
  //     sections: [
  //       {
  //         title: "Flutter",
  //         items: [
  //           "Spring Boot",
  //           "Laravel",
  //           "ASP.NET",
  //           "Ruby on Rails",
  //           "Flutter",
  //           "React Native",
  //         ],
  //       },
  //     ],
  //   },
  //   "Digital Marketing": {
  //     sections: [
  //       {
  //         title: "Frameworks",
  //         items: ["Django", "Flask", "FastAPI"],
  //       },
  //     ],
  //   },
  //   "Mobile Application Development": {
  //     sections: [
  //       {
  //         title: "Frameworks",
  //         items: ["Spring Boot", "Hibernate", "Struts"],
  //       },
  //     ],
  //   }
  // };

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
              {/* Left Tabs */}
              {/* <div className="w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
                <ul className="text-lg lg:text-xl 2xl:text-2xl font-medium space-y-4 md:space-y-6 xl:space-y-10 2xl:space-y-8 pr-4 md:pr-0">
                  {Object.keys(techData).map((tab) => (
                    <li
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`cursor-pointer z-10 whitespace-nowrap md:whitespace-normal outline-none md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === tab
                        ? "text-black font-bold"
                        : "text-gray-500 hover:text-black"
                        }`}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
                <FaReact />

              </div> */}

              {/* Right Content */}
              {/* <div className="w-full md:w-[70%] lg:w-[78.5%] 2xl:w-[76%] pt-6 md:pt-0">
                {techData[activeTab].sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="my-8 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] pl-4 md:pl-12 lg:pl-16 text-black">
                      {section.title}
                    </h2>
                    <ul className="flex flex-wrap text-lg lg:text-xl gap-4 2xl:text-2xl font-medium pl-4 md:pl-12 lg:pl-16">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm"
                        >
                          <span className="pb-[3px] md:pb-1.5">{item}</span>
                          <span className="pb-[3px] md:pb-1.5">{item}</span>
                          <icon>{section.icon}</icon>

                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div> */}
            </div>


            <div className="w-full max-w-4xl mx-auto mt-10">

              {/* Tabs */}
              <div className="flex gap-4 border-b pb-2">
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

                {/* Right List */}
                {/* <div>
                  {tabData[activeTab].right.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 mb-5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 object-contain"
                        width={50}
                        height={50}

                      />
                      <p className="text-lg font-semibold">{item.title}</p>
                    </div>
                  ))}
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  )
}

export default Technologies

import React from 'react'
import { useState } from "react";
import { FaReact } from "react-icons/fa6";

const Technologies = () => {
  const [activeTab, setActiveTab] = useState("JavaScript");

  // object structure
  const techData = {
    JavaScript: {
      sections: [
        {
          title: "React",
          items: ["React.js", "Angular", "Vue.js", "Node.js", "Django"],
        },
      ],
    },
    TypeScript: {
      sections: [
        {
          title: "Flutter",
          items: [
            "Spring Boot",
            "Laravel",
            "ASP.NET",
            "Ruby on Rails",
            "Flutter",
            "React Native",
          ],
        },
      ],
    },
    Python: {
      sections: [
        {
          title: "Frameworks",
          items: ["Django", "Flask", "FastAPI"],
        },
      ],
    },
    Java: {
      sections: [
        {
          title: "Frameworks",
          items: ["Spring Boot", "Hibernate", "Struts"],
        },
      ],
    },
    PHP: {
      sections: [
        {
          title: "Frameworks",
          items: ["Laravel", "Symfony", "CodeIgniter"],
        },
      ],
    },
    "C#": {
      sections: [
        {
          title: ".NET Stack",
          items: ["ASP.NET", "Blazor", "Entity Framework"],
        },
      ],
    },
  };
  return (
    <div>
      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Technologies we use </span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Hire from our pool of 350+ specialized experts in web, mobile, and
              software engineering, specializing in the latest technologies and
              frameworks, ready to scale your development teams effortlessly.
            </p>

            <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
              {/* Left Tabs */}
              <div className="w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
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
              </div>

              {/* Right Content */}
              <div className="w-full md:w-[70%] lg:w-[78.5%] 2xl:w-[76%] pt-6 md:pt-0">
                {techData[activeTab].sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="my-8 font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] pl-4 md:pl-12 lg:pl-16">
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
                          <FaReact />
                        </li>
                      ))}
                    </ul>
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

export default Technologies

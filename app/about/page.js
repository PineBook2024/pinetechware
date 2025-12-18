'use client'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Sidepopup from '@/components/Sidepopup/Sidepopup'
import Image from 'next/image'
import abtBanner from "@/public/images/abt-banner.webp"
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import CEO from "@/public/images/CEO.webp"
import bage2 from "@/public/images/bage2.png"
import bage3 from "@/public/images/bage3.png"
import bage4 from "@/public/images/bage4.png"
import bage12 from "@/public/images/bage12.png"
import bage13 from "@/public/images/bage13.png"
import bage14 from "@/public/images/bage14.png"
import c2 from "@/public/images/c2.webp"
import c3 from "@/public/images/c3.webp"
import c4 from "@/public/images/c4.webp"
import c5 from "@/public/images/c5.webp"
import c6 from "@/public/images/c6.webp"
import c7 from "@/public/images/c7.webp"
import c8 from "@/public/images/c8.webp"
import c9 from "@/public/images/c9.webp"
import c10 from "@/public/images/c10.webp"
import clutch from "@/public/images/clutch.webp"
import aboutBanner from "@/public/images/aboutteambanner.webp"
import t1 from "@/public/images/t1.svg"
import t2 from "@/public/images/t2.svg"
import t3 from "@/public/images/t3.svg"
import t4 from "@/public/images/t4.svg"
import y1 from "@/public/images/y1.svg"
import y2 from "@/public/images/y2.svg"
import y3 from "@/public/images/y3.svg"
import Elvina from "@/public/images/elvina.webp"
import SeoHead from "@/components/SeoHead";




import React from 'react'
import Tech from '@/components/Tech/Tech'
import { Link } from 'lucide-react'
import Trigger from '@/components/Trigger/Trigger'
import Head from 'next/head'

// export const metadata = {
//   title: "About Us",
//   description: "Learn more about our team and company mission.",
// };

export default function about() {
  const [activeTab, setActiveTab] = useState("tab1"); // 👈 by default Tab1 active


  const counterRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);


  return (
    <div>
      <SeoHead
        title="About Pine Techware | Global Software & Innovation"
        description="Pine Techware - A global tech partner building software & digital products. From startups to enterprises, we empower businesses with innovation & growth."
      />
       <div data-theme="light">
                <Navbar />
            </div>


      <section className="bg-white">
        <div className="container px-6 lg:px-8 pt-40 lg:py-[10.5rem] max-w-7xl mx-auto">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-black xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Innovators + Technologists + Your Growth Partners</span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">
              We’re Pine Techware - A global software & digital solutions company dedicated to crafting smart tech that scales. From ideation to delivery (and everything in between), we're here to turn ambitious ideas into lasting impact.

            </p>
          </div>
         {/* <Image src={abtBanner} alt="About Us Image" width={1200} height={600} className="mt-8 lg:mt-24 image lg:rounded-[30px] rounded-2xl w-full" /> */}
        </div>
      </section>


      <section ref={counterRef} className='bg-[#3bb9e1]'>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pt-[10.5rem] lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-white xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Building Tomorrow’s Digital Experiences</span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white">
              Since 2020, Pine Techware has been setting the bar high in innovation, engineering excellence, and design quality. We deliver solutions that not only look good but perform powerfully, delight users, and drive real business growth.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8" id="project-stats">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">

            {/* Completed Projects */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={1300}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="text-white group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Completed Projects
                </p>
              </span>
            </div>

            {/* Talented Cubixians */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={750}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="text-white group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Talented Cubixians
                </p>
              </span>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col gap-y-2 w-max md:pb-20">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="text-white font-bold text-4xl xl:text-5xl 2xl:text-6xl">
                    {startCounter && (
                      <CountUp
                        start={0}
                        end={600}
                        duration={3}
                        separator=","
                      />
                    )}
                    +
                  </span>
                </div>
                <p className="text-white group-hover:underline underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Satisfied Clients
                </p>
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-black text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Our Vision for the Future</span>
              </h2>
            </div>
            {/* <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
              Hire from our pool of 350+ specialized experts in web, mobile, and
              software engineering, specializing in the latest technologies and
              frameworks, ready to scale your development teams effortlessly.
            </p> */}

            <div className="flex flex-wrap flex-col md:flex-row mt-8 md:mt-12 lg:mt-20 md:border-t border-gray-300">
              {/* Left Tabs */}
              <div className="w-full md:w-[30%] lg:w-[21.5%] 2xl:w-[24%] overflow-auto md:overflow-hidden md:border-r border-gray-300 md:pt-12 md:border-b-0 border-b">
                <ul className="text-lg lg:text-xl 2xl:text-2xl font-medium space-y-4 md:space-y-6 xl:space-y-10 2xl:space-y-8 pr-4 md:pr-0">
                  <li
                    onClick={() => setActiveTab("tab1")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab1" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Innovation
                  </li>
                  <li
                    onClick={() => setActiveTab("tab2")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab2" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Excellence
                  </li>
                  <li
                    onClick={() => setActiveTab("tab3")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab3" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    People First
                  </li>
                  <li
                    onClick={() => setActiveTab("tab4")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab4" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Honesty
                  </li>
                  <li
                    onClick={() => setActiveTab("tab5")}
                    className={`cursor-pointer md:w-full md:rounded-full md:px-3 font-medium text-left ${activeTab === "tab5" ? "text-black font-bold" : "text-gray-500 hover:text-black"}`}
                  >
                    Integrity
                  </li>
                </ul>
              </div>

              {/* Right Content */}
              <div className="w-full md:w-[70%] lg:w-[78.5%] 2xl:w-[76%] pt-6 md:pt-0">

                {activeTab === "tab1" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Innovation Starts with Imagination</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At Pine Techware, creativity isn’t just what we do, it’s who we are. We thrive on fresh ideas, bold imagination, and the thrill of turning visionary concepts into real-world solutions.</p>

                      <div className="flex flex-col gap-5">
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our culture is built on curiosity, experimentation, and the courage to push boundaries. This spirit empowers us to design innovative products that not only transform industries but also exceed expectations.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">For us, creativity is more than a skill; it’s a mindset. It drives us to see possibilities where others see limits, and it fuels our passion to shape a future filled with opportunity.</p>
 
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">When our talented team collaborates with purpose and passion, extraordinary things happen, and the results speak for themselves.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Relentless Quality</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Excellence is more than a goal here, it’s a way of working, thinking, and delivering. We pursue perfection in every detail, ensuring quality that speaks for itself.</p>

                      <div className="flex flex-col gap-5">
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our teams are driven by high standards, precision, and a relentless commitment to outperform expectations at every stage of the process.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We believe excellence is achieved through consistency, discipline, and a continuous drive to improve and innovate.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">From ideation to execution, we refine, test, and perfect every product until it stands out as the best in its class.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, excellence is not just about results; it’s about the mindset that pushes boundaries and inspires greatness in everything we do.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Through dedication and passion, we turn ordinary efforts into extraordinary achievements.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab3" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Bringing People Together</h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At our company, people are at the heart of everything we do. We believe that empowered individuals create extraordinary outcomes.</p>

                      <div className="flex flex-col gap-5">
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our culture thrives on respect, collaboration, and shared growth, where every voice matters and every idea is valued.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We foster an environment that encourages learning, well-being, and balance — ensuring our teams feel inspired and supported in all they do.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Trust, empathy, and open communication define our relationships, both within our teams and with our clients.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, putting people first means nurturing potential, recognizing achievements, and building a workplace where everyone can thrive.</p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Together, we grow stronger, driven by unity, purpose, and the belief that success begins with our people.</p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab4" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Transparent Partnership </h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Transparency is more than a principle at Pine Techware; it’s the foundation of how we work and grow together. We believe openness builds trust, fuels collaboration, and sparks innovation.
                      </p>

                      <div className="flex flex-col gap-5">
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our approach is rooted in complete transparency; from project discussions to delivery milestones, ensuring our clients are always informed and confident in every decision.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We value accountability and sincerity, standing by our words and actions to create meaningful, long-term collaborations.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">By embracing openness, we eliminate barriers, encourage genuine dialogue, and foster mutual respect across every level of engagement.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, honesty and transparency are not just principles; they are promises that guide how we work, connect, and grow with our partners.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Together, we build partnerships defined by clarity, trust, and shared success.
                        </p>

                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab5" && (
                  <div className='pt-8 w-full mt-5 md:ps-12'>
                    <div className=''>
                      <h3 className="  mb-4 font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-black">Ethics that Inspire Trust
                      </h3>

                      <p className="mb-3 lg:mb-8 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">At this agency, integrity is the foundation of everything we do. We uphold the highest ethical standards, ensuring that our actions consistently align with our values and commitments.
                      </p>

                      <div className="flex flex-col gap-5">
                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We believe that true success is built on honesty, responsibility, and doing what’s right — even when no one is watching.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Our teams operate with fairness, respect, and accountability, fostering confidence among our clients, partners, and colleagues alike.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Every decision we make reflects our dedication to transparency and moral responsibility, shaping relationships rooted in trust and credibility.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">To us, integrity is more than a principle — it’s a promise to act with sincerity, honor our word, and inspire confidence through ethical excellence.
                        </p>

                        <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">Through unwavering integrity, we strengthen our reputation and create a legacy of trust and respect.
                        </p>

                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-[#3BB9E1] px-6 lg:px-8 py-14 md:py-24">
        <figure className="bg-gradient-to-r max-w-7xl from-[#050505] text-center mx-auto to-[#201F21] text-white lg:rounded-[30px] rounded-2xl lg:p-[4.5rem] p-8">
          <h3 className=" font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px] text-center">“Success isn’t just about building great products; it’s about creating meaningful impact. At Pine Techware, our goal is to turn vision into value and challenges into opportunities.”</h3>
          {/* <figcaption className="lg:mt-12 mt-6 flex items-center gap-x-4">
            <Image alt="" src={CEO} width="64" height="64" className="h-16 w-16 rounded-full" />
            <div className="flex flex-col">
              <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Salman Lakhani</p>
              <p className=" text-[#6F6F6F] text-sm lg:text-md xl:text-lg 2xl:text-xl">CEO, Pine Techware Inc.</p>
            </div>
          </figcaption> */}
        </figure>
      </section>


      {/* <section className="textContent-sec bg-[#3BB9E1]">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]"><span>Brands Who Believe in Us</span></h2></div>
          </div>
        </div>
      </section> */}


      {/* <div className="bg-[#3BB9E1] ">
        <div className="grid grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-5 sm:grid-cols-3 px-6 lg:px-8 max-w-7xl mx-auto pt-8 lg:pt-24">

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c1} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c2} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c3} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c4} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c5} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c6} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c7} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c8} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c9} alt="Image 1" />
          </div>

          <div className="flex flex-col">
            <Image className="w-full grayscale hover:grayscale-0" src={c10} alt="Image 1" />
          </div>

        </div>
      </div> */}

      {/* <div className='bg-[#3BB9E1]'>
        <Tech />
      </div> */}


      {/* <section className="HalfTextContent-sec bg-[#3BB9E1]">
        <div className="px-6 lg:px-8 pt-14 md:pt-24 lg:pt-[10.5rem] max-w-7xl mx-auto">
          <div className='lg:grid lg:grid-cols-12'>
            <div className='lg:col-span-7 xl:pr-4'>
              <div className='lg:overflow-hidden'>
                <h2 className=" font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]"><span>Life At Pine Techware - Our People & Culture</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#3BB9E1]">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-8 lg:py-20 ">
                  <Image src={aboutBanner} alt="About Us Image" width={1200} height={600} className="image lg:rounded-[30px] rounded-2xl w-full" />
        </div>
      </section> */}


      <section className="textContent-sec bg-white">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px] text-black"><span>Our Award-Winning Journey</span></h2>
            </div>
          </div>
        </div>
      </section>


      <section className="leadingBrand-sec bg-white">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-8 lg:pt-24 pb-14 md:pb-24 lg:pb-[10.5rem]">
          <div className="grid grid-cols-2 gap-6 lg:gap-10 lg:grid-cols-3 sm:grid-cols-3 ">

            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage2} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage3} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Software Development Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage4} alt="Clutch" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage12} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Software Development Company</p>
            </span>


            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage13} alt="Clutch" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Blockchain Company</p>
            </span>

            <span className="flex flex-col">
              <Image className="mx-auto grayscale hover:grayscale-0" src={bage14} alt="Good Firms" />
              <p className="lg:text-sm text-xs mt-6 text-center text-black">Top Software Development Company</p>
            </span>

          </div>
        </div>
      </section>


      {/* <div className="leadingBrandAbout-sec bg-[#3BB9E1] ">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="lg:overflow-hidden">
            <h2 className="text-white font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>Trusted Partnerships with Industry Giants </span>
            </h2>
          </div>

          <span className="flex justify-between items-center mt-8 lg:mt-20 lg:gap-10 lg:flex-nowrap flex-wrap">

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="mx-auto grayscale hover:grayscale-0" src={t1} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t2} alt="Good Firms" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t3} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t4} alt="Good Firms" />
            </div>

          </span>

        </div>
      </div> */}


{/* 
      <section className="textContent-sec bg-white">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto pt-14 md:pt-24 lg:pt-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px] text-black"><span>Media Mentions</span></h2></div>
            <p className="pt-6 lg:pe-[5rem] lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-black">We stay in the news for our incredible tech achievements to
              <br /> make the world a better place.</p>
          </div>
        </div>
      </section>
 */}


      {/* <div className=" bg-white">
        <div className="flex gap-5 md:gap-0 md:flex-nowrap justify-between flex-wrap lg:gap-10 pt-8 px-6 lg:px-8 max-w-7xl mx-auto pb-14 md:pb-24 lg:pb-[10.5rem]">
          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y1} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y2} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


          <div className="md:w-[33%] sm:w-[60%] w-full">
            <article className="mx-2 md:mx-4 px-6 mt-8 lg:mt-12 lg:mx-0 lg:px-6 relative" >

              <div className="w-full h-[45px] md:h-[90px] pt-3">
                <Image src={y3} alt="y1" />
              </div>

              <div>
                <p className="pt-10 text-black pr-[25px] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">There's Finally a Dating App for People With Disabilities</p>
              </div>
              <div className="absolute left-0 top-0 h-[240px] w-px bg-[#D7D7D7]"></div>
              <div className="absolute left-0 top-0 h-[90px] w-px bg-[#0B0C0D]"></div>
            </article>

          </div>


        </div>
      </div> */}


      <section className="gameDev-sec bg-[#3BB9E1]  text-white py-14 md:py-24 lg:py-[10.5rem]">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto" >
          <div className="lg:overflow-hidden" >
            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]"><span>The Values That Shape Us</span></h2></div>
          <div className="mx-auto mt-12 lg:mt-20 grid max-w-2xl grid-cols-1 md:gap-20 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3" >
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Client-Centricity</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We put our clients at the heart of everything we do—building trust and delivering innovative solutions that consistently exceed expectations.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Integrity</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Integrity defines us. Our teams lead by example, upholding principles that shape lasting relationships and genuine partnerships.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Innovation</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We embrace the latest technologies to create what’s next, ensuring rapid delivery and helping you stay ahead of the market.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Excellence</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Excellence is our standard. From custom software to mobile apps, we build with precision, passion, and uncompromising quality.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Transparency</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We keep you informed at every step, ensuring full visibility and control as your project moves forward.</p>
            </div>
            <div className="mb-10 md:mb-0" >
              <h3 className=" font-bold pb-4 lg:pb-8 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Teamwork</h3>
              <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Together, we achieve more. Our teams work, learn, and grow alongside you to craft exceptional solutions that drive success.</p>
            </div>
          </div>
        </div>
      </section>



      {/* <section className="textContent-sec bg-white">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px] text-black"><span>Meet the Team Behind Pine Techware</span></h2>
              <p className="text-black lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">We’re more than developers; we’re creators, strategists, designers, and problem solvers. Driven by passion and empowered by values, our team works hand in hand with you to bring visions to life and build products that matter.</p></div>
          </div>

          <div className="px-6 lg:px-8 max-w-7xl mx-auto my-8 lg:my-20">
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl text-black">Salman Lakhani</h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}


{/* 
      <section className="textContent-sec bg-[#3BB9E1] ">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="2xl:max-w-4xl lg:max-w-3xl">
            <div className="lg:overflow-hidden">
              <h2 className="pb-1 font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]"><span>Our Sales & Account Growth Team</span></h2>
              <p className="text-white lg:pe-[5rem] pt-6 lg:pt-[2.375rem] text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">At PineTechware, our Sales & Account Growth Team is the backbone of client success; focused on understanding your business needs, building meaningful partnerships, and driving sustainable growth through strategic collaboration and personalized support.</p>
            </div>
          </div>

          <div className="px-6 lg:px-8 max-w-7xl mx-auto my-8 lg:my-20">
            <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>

              <div className="flex flex-col">
                <Image className="w-full grayscale hover:grayscale-0 mb-5" src={Elvina} alt="Image 1" />
                <h4 className=" font-bold leading-7 text-xl xl:text-2xl 2xl:text-3xl tracking-[0px]">Salman Lakhani</h4>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* <div className="leadingBrandAbout-sec bg-black">
        <div className="px-6 lg:px-8 max-w-7xl mx-auto py-14 md:py-24 lg:py-[10.5rem]">
          <div className="lg:overflow-hidden">
            <h2 className="text-white font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>we partner with the </span>
              <br className="invisible md:visible" />
              <span>
                <span className="!normal-case">world’s</span> technology leaders</span>
            </h2>
          </div>

          <span className="flex justify-between items-center mt-8 lg:mt-20 lg:gap-10 lg:flex-nowrap flex-wrap">

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t1} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t2} alt="Good Firms" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t3} alt="Clutch" />
            </div>

            <div className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
              <Image className="w-full grayscale hover:grayscale-0" src={t4} alt="Good Firms" />
            </div>

          </span>

        </div>
      </div> */}


      {/* <Trigger /> */}

      <Trigger
        title="Create Without Limits!"
        description="The future of your product starts here."
        buttonText="Start Your Project"
      />


      <Footer />
      <Sidepopup />


    </div>
  )
}
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon1 from "@/public/images/feature-icon-1.webp";
import Icon2 from "@/public/images/feature-icon-2.webp";
import Icon3 from "@/public/images/feature-icon-3.webp";
import Icon4 from "@/public/images/feature-icon-4.webp";
import Img1 from "@/public/images/Home Page Image 01-v2.webp";
import Img2 from "@/public/images/Home Page Image 02-v2.webp";
import Img3 from "@/public/images/feature-img-3.png";
import Img4 from "@/public/images/feature-img-4.png";
// import Arrow from "@/images/arrow.svg";
import { IoIosArrowRoundForward } from "react-icons/io";

import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

export default function Featured() {
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
    <>
      <section className="case-studies overflow-hidden pt-20 lg:pt-32 pb-16 lg:pb-32 bg-white">
        <div className="bg-white" id="case-studies">
          <div className="mx-auto max-w-7xl px-6 lg:px-8  undefined ">
            <div className="block lg:flex lg:justify-between items-center">
              <div className="lg:overflow-hidden">
                <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl text-black lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]"><span> Happy Clients<br /> of Pine Techware </span></h2>
              </div>

              <Link className=" mt-6 text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold" href="/work">
                Our Portfolio
                <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                  <IoIosArrowRoundForward className="text-black text-5xl" />

                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto mt-12 lg:mt-20 gap-x-28">
              <article className=" mt-14 md:mt-[0rem] first:mt-0  inline-block w-full CaseStudyImage">
                <div className="relative">
                  <div className="h-[380px] md:h-[538px] rounded-3xl hidden lg:block " style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <div className="transition ease-out duration-[500ms]" style={{ position: 'absolute', inset: '-30px 0px', willChange: 'transform', transform: 'translateY(19.597px)' }}>
                      <div >
                        <Image src={Img1} className="w-full object-cover h-full rounded-3xl" loading="lazy" alt="brand" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl lg:hidden block overflow-hidden">
                    <div href="#">
                      <Image src={Img1} className="w-full object-cover h-full" loading="lazy" alt="brand" />
                    </div>
                  </div>
                </div>

                <div className="max-w-full lg:max-w-xl">
                  <div className="flex justify-between items-center pt-[20px] pb-[10px] F" href="/">
                    {/* <div className="h-[58px] w-[151px] flex"><Image className="object-contain" src={Icon1} loading="lazy" alt="brand" /></div> */}
                  </div>
                  <div className="group relative">
                    <div className="group-hover:underline underline-offset-[9px] decoration-1" href="/">
                      <h3 className=" mb-[20px] font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] text-black">A Social Networking for Pets and Pet Owners</h3>
                    </div>
                    <div className=" text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold" href="#">
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">brand is a trailblazing social networking app dedicated to pets and their owners.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className=" mt-14 md:mt-[8rem]  inline-block w-full CaseStudyImage">
                {/* <div className="group" href="/"> */}
                <div className="relative">
                  <div className=" h-[380px] md:h-[670px] rounded-3xl hidden lg:block " style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <div className="transition ease-out duration-[500ms]" style={{ position: 'absolute', inset: '-30px 0px', willChange: 'transform', transform: 'translateY(19.597px)' }}>

                      <Image src={Img2} className="w-full object-cover h-full" loading="lazy" alt="tulsa-airport" />

                    </div>
                  </div>
                  <div className="rounded-3xl lg:hidden block overflow-hidden">

                    <Image src={Img2} className="w-full object-cover h-full" loading="lazy" alt="tulsa-airport" />

                  </div>
                </div>
                <div className="max-w-full lg:max-w-xl">
                  <span className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer">
                    {/* <div className="h-[58px] w-[151px] flex">
                      <Image className="object-contain" src={Icon2} loading="lazy" alt="tulsa-airport" />
                    </div> */}
                  </span>
                  <div className="group relative">
                    <span className="group-hover:underline underline-offset-[9px] decoration-1">
                      <h3 className=" mb-[20px] font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] text-black">Official Website of Tulsa Airport</h3>
                    </span>
                    <span className=" text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold">
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">Tulsa Airport, a prominent name in aviation, sought Pine Techware expertise to enhance its digital presence.</p>
                    </span>
                  </div>
                </div>
                {/* </a> */}
              </article>
              <article className=" mt-14 md:-mt-[0rem] lg:-mt-[8rem]  inline-block w-full CaseStudyImage">
                {/* <div className="group" href="/"> */}
                <div className="relative">
                  <div className=" h-[380px] md:h-[670px] rounded-3xl hidden lg:block " style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <div className="transition ease-out duration-[500ms]" style={{ position: 'absolute', inset: '-30px 0px', willChange: 'transform', transform: 'translateY(19.597px)' }}>
                      <span>
                        <Image src={Img3} className="w-full object-cover h-full" loading="lazy" alt="party-shark" /></span></div></div><div className="rounded-3xl lg:hidden block overflow-hidden"><span><Image src={Img3} className="w-full object-cover h-full" loading="lazy" alt="party-shark" /></span></div></div>
                <div className="max-w-full lg:max-w-xl">
                  <div className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer" href="/">
                    {/* <div className="h-[58px] w-[151px] flex"><Image className="object-contain" src={Icon3} loading="lazy" alt="party-shark" /></div> */}
                  </div>
                  <div className="group relative">
                    <div className="group-hover:underline underline-offset-[9px] decoration-1" href="/">
                      <h3 className=" mb-[20px] font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] text-black">A Social Networking and Event Management App</h3>
                    </div>
                    <div className=" text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold" href="/">
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">App designed for young partygoers, specializes in facilitating the organization &amp; discovery of house parties.</p>
                    </div>
                  </div>
                </div>
                {/* </a> */}
              </article>
              <article className="mt-14 md:mt-[8rem]  inline-block w-full CaseStudyImage">
                {/* <div className="group" href="/"> */}
                <div className="relative">
                  <div className="h-[380px] md:h-[538px] rounded-3xl hidden lg:block" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
                    <div className="transition ease-out duration-[500ms]" style={{ position: 'absolute', inset: '-30px 0px', willChange: 'transform', transform: 'translateY(19.597px)' }}>
                      <span>
                        <Image src={Img4} className="w-full object-cover h-full" loading="lazy" alt="brand" /></span></div></div><div className="rounded-3xl lg:hidden block overflow-hidden">
                    <span href="/"><Image src={Img4} className="w-full object-cover h-full" loading="lazy" alt="brand" /></span></div></div>
                <div className="max-w-full lg:max-w-xl">
                  <span className="flex justify-between items-center pt-[20px] pb-[10px] cursor-pointer" href="/">
                    {/* <div className="h-[58px] w-[151px] flex"><Image className="object-contain" src={Icon4} loading="lazy" alt="brand" /></div> */}
                  </span>
                  <div className="group relative">
                    <span className="group-hover:underline underline-offset-[9px] decoration-1" href="/">
                      <h3 className=" mb-[20px] font-bold text-xl xl:text-2xl 2xl:text-3xl tracking-[0px] text-black">Multiplayer Tower Defense Game</h3>
                    </span>
                    <span className=" text-black text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-500 ease-in-out hover:font-semibold" href="/">
                      <p className=" font-medium text-sm lg:text-md xl:text-lg 2xl:text-xl">A PvP play-and-earn mobile tower defense game where players can own, trade, and use in-game NFT assets.</p>
                    </span>
                  </div>
                </div>
                {/* </a> */}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section ref={counterRef} className="bg-[#3BB9E1]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:pt-24  lg:py-24 lg:px-8 ">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-white lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>Pine Techware’s 5+ Years Of Successful Journey</span>
              </h2>
            </div>
            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl text-white  2xl:text-2xl">
              We are a full-cycle product development company that combines creative thinking with technical expertise to create user-centric products that solve real problems and drive business growth.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8" id="project-stats">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8">

            {/* Completed Projects */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="font-bold text-white text-4xl xl:text-5xl 2xl:text-6xl">
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
                <p className="group-hover:underline text-white underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Completed Projects
                </p>
              </span>
            </div>

            {/* Talented Cubixians */}
            <div className="flex flex-col gap-y-2 w-max">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="font-bold text-white text-4xl xl:text-5xl 2xl:text-6xl">
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
                <p className="group-hover:underline text-white underline-offset-[9px] decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Satisfied Clients
                </p>
              </span>
            </div>

            {/* Satisfied Clients */}
            <div className="flex flex-col gap-y-2 w-max md:pb-20">
              <span className="cursor-pointer group inline-flex flex-col gap-y-2">
                <div className="inline-flex">
                  <span className="font-bold text-white text-4xl xl:text-5xl 2xl:text-6xl">
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
                <p className="group-hover:underline underline-offset-[9px] text-white decoration-1 inline text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Tech Experts
                </p>
              </span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

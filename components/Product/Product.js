"use client";
import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Img1 from "@/public/images/Ideate.png";
import Img2 from "@/public/images/Ideate1.png";
import Img3 from "@/public/images/Ideate2.png";
import Img4 from "@/public/images/Ideate3.png";
import Img5 from "@/public/images/Ideate4.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const galleryRef = useRef(null);
  const detailsRef = useRef([]);
  const photosRef = useRef([]);

  useEffect(() => {
    const details = detailsRef.current;
    const photos = photosRef.current;

    gsap.set(photos, { yPercent: 100 });
    gsap.set(photos[0], { yPercent: 0 });

    ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
    });

    details.forEach((detail, index) => {
      let headline = detail.querySelector("b");

      ScrollTrigger.create({
        trigger: headline,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        onEnter: () => {
          photos.forEach((p, i) => {
            gsap.to(p, { yPercent: 100, duration: 1 });
          });
          gsap.to(photos[index], { yPercent: 0, duration: 1 });
        },
        onEnterBack: () => {
          photos.forEach((p, i) => {
            gsap.to(p, { yPercent: 100, duration: 1 });
          });
          gsap.to(photos[index], { yPercent: 0, duration: 1 });
        },
      });
    });
  }, []);

  const steps = [
  {
    title: "Ideate",
    description: "Share your vision, market, users & goals with us so we can create a perfect roadmap for your brand's success."
  },
  {
    title: "Design",
    description: "We craft products that showcase design with all the features to optimize the interface for user satisfaction."
  },
  {
    title: "Develop",
    description: "Ensuring top-quality development with agile sprints, best practices, and scalable architecture that focus on feasible accessibility."
  },
  {
    title: "Test",
    description: "We cover every corner of QA, usability, performance, and website security. Your project is in safe hands."
  },
  {
    title: "Launch",
    description: "Promising a smooth deployment & rollout across all platforms with top-notch development and design services."
  },
];

  return (

    
    <section className="pt-16 md:pt-24 lg:pt-[10.5rem] bg-[#3BB9E1]">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 flex justify-between xs:items-end xs:flex-row flex-col xs:gap-0 gap-6">
          <div className="lg:overflow-hidden">
            <h2 className="text-white font-extrabold text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>How We Work  </span>
              <br />
              <span className="text-theme">Product Development Process</span>
            </h2>
          </div>

          <div>
            <a
              className="mt-6 text-white text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold"
              href="/">View More
              <div className="transform group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                <IoIosArrowRoundForward className="text-white text-5xl" />
              </div>
            </a>
          </div>
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef} className="gallery relative hidden lg:flex">
          {/* Left Column (text) */}
          <div className="left-col w-2/4">
            <div className="detailsWrapper pl-12">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  ref={(el) => (detailsRef.current[idx] = el)}
                  className="details pb-40"
                >
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <p className="text-white font-normal mb-3 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        0{idx + 1}/05
                      </p>
                      <div className="overflow-hidden">
                        <b className="font-bold text-[#fff] text-4xl xl:text-5xl 2xl:text-6xl  xl:!leading-[60px] 2xl:!leading-[75px]">
                          {step.title}
                        </b>
                      </div>
                      <p className="mt-7 mb-10 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Right Column (images) */}
          <div className="right h-[34rem] w-96 ml-20 rounded-full overflow-hidden md:sticky top-[10%]">
            <div className="photos">
              {[Img1, Img2, Img3, Img4, Img5].map((img, idx) => (
                <div
                  key={idx}
                  ref={(el) => (photosRef.current[idx] = el)}
                  className="photo w-full h-full absolute inset-0"
                >
                  <Image
                    src={img}
                    width={400}
                    className="h-[34rem] w-full object-cover rounded-2xl"
                    alt={`Ideate ${idx + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Gallery */}
      </div>
    </section>
  );
};

export default Product;

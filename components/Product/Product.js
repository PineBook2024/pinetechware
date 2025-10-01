"use client";
import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Img1 from "@/public/images/Ideate.webp";
import Img2 from "@/public/images/Ideate1.webp";
import Img3 from "@/public/images/Ideate2.webp";
import Img4 from "@/public/images/Ideate3.webp";
import Img5 from "@/public/images/Ideate4.webp";
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

  return (
    <section className="pt-16 md:pt-24 lg:pt-[10.5rem] bg-black">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 flex justify-between xs:items-end xs:flex-row flex-col xs:gap-0 gap-6">
          <div className="lg:overflow-hidden">
            <h2 className="text-white font-extrabold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[55px] 2xl:!leading-[65px]">
              <span>Our product </span>
              <br />
              <span className="text-theme">development process</span>
            </h2>
          </div>

          <div>
            <a
              className="mt-6 text-white text-md lg:text-xl inline-flex items-center gap-4 group transition-all duration-300 ease-in-out hover:font-semibold"
              href="//"
            >
              View More
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
              {[1, 2, 3, 4, 5].map((_, idx) => (
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
                        <b className="font-bold text-[#3bb9e1] text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] xl:!leading-[60px] 2xl:!leading-[75px]">
                          Ideate {idx + 1}
                        </b>
                      </div>
                      <p className="mt-7 mb-10 leading-9 text-white font-normal text-sm lg:text-md xl:text-lg 2xl:text-xl">
                        We analyze your vision thoroughly to ensure the roadmap
                        is perfectly aligned with your end goals, setting the
                        stage for product success.
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

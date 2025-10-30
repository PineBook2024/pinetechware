"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from "./awards.module.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";





import Img1 from "@/public/images/right.svg";
import Img2 from "@/public/images/star.svg";

export default function Awards() {
  const slides = [
    {
      id: 1,
      logo: Img1,
      rating: 4.9,
      description: "Ranked among the leading game development companies for 2025",
    },
    {
      id: 2,
      logo: Img1,
      rating: 4.8,
      description: "Trusted globally for innovative software development solutions",
    },
    {
      id: 3,
      logo: Img1,
      rating: 4.7,
      description: "Top-rated mobile app development company worldwide",
    },
    {
      id: 4,
      logo: Img1,
      rating: 5.0,
      description: "Award-winning digital agency for cutting-edge solutions",
    },
  ];
  return (
    <>
      <section className={styles.AwardsSection}>
        <div className="container mx-auto max-w-7xl px-6 pb-8 py-14 md:py-24 lg:pb-24 lg:px-8">
          <div className="max-w-3xl xl:max-w-4xl">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-white">
                Award-Winning  <br />
                <span className="text-[#3bb9e1]"> Software Development Company</span>
              </h2>
              <p className="text-white lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                We are recognized globally for our high-quality and innovative solutions that transform products for businesses.
              </p>
            </div>
          </div>

        </div>
      </section>


      <div className="bg-black pb-14 md:pb-24">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 4, // default desktop
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
            },
            breakpoints: {
              1024: {
                perPage: 3, // tablet
              },
              768: {
                perPage: 2, // small tablet / landscape
              },
              640: {
                perPage: 1, // 👈 mobile view
              },
            },
          }}
          extensions={{ AutoScroll }}
        >
          {/* Slides yahan */}

          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <article className="bg-gradient-to-r from-[#050505] to-[#201F21] mx-2 md:mx-4 px-6 py-8 lg:py-[35px] lg:mx-0 lg:px-6 rounded-3xl lg:h-64 h-52 flex flex-col justify-between">
                <div className="flex justify-between">
                  <Image
                    src={slide.logo}
                    className="w-full 2xl:max-w-[170px] xl:max-w-[150px] md:max-w-[120px] max-w-[140px] h-[35px]"
                    alt={slide.description}
                  />
                  <div className="flex items-center">
                    <Image
                      className="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] lg:h-[16px] lg:w-[16px] 2xl:h-[19px] 2xl:w-[19px] mb-1"
                      src={Img2}
                      alt="Star"
                    />
                    <p className="font-bold ml-2 text-white text-sm lg:text-md xl:text-lg 2xl:text-base">
                      {slide.rating}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-neutral-500 text-sm lg:text-md xl:text-lg 2xl:text-xl">
                    {slide.description}
                  </p>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>

      </div>

    </>


  );
}

import React from 'react'
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// import Img1 from "/images/banner-inner/custom-graphic-design-banner.webp";


export default function IndSlider() {

  const slides = [
    {
      title: "Software Consulting",
      desc: "Expert advisory for automotive software solutions geared toward enhancing digital transformation, security, and system efficiency.",
      img: "/images/banner-inner/custom-graphic-design-banner.webp",
    },
    {
      title: "Dedicated Development Team",
      desc: "A devoted team works toward developing high-performance automotive software with precision, innovation, and seamless collaboration.",
      img: "/images/banner-inner/custom-graphic-design-banner.webp",
    },
    {
      title: "Skilled Workforce Augmentation",
      desc: "Empower your project with experienced automotive professionals to speedily meet deadlines and facilitate smooth execution.",
      img: "/images/banner-inner/custom-graphic-design-banner.webp",
    },
    {
      title: "End-to-end Project Management",
      desc: "A systematic structuring of managing any automotive software projects to assure quality, scalability, and performance.",
      img: "/images/banner-inner/custom-graphic-design-banner.webp",
    },
    {
      title: "Automotive R&D Partnership",
      desc: "Use top research and development skills to create new ideas in car software, electric vehicles, and smart mobility.",
      img: "/images/banner-inner/custom-graphic-design-banner.webp",
    },
  ];

  return (
    <section className="overflow-x-hidden">
      {/* ================= Desktop Slider ================= */}
      <section className="hidden sm:block mx-auto py-14 md:py-24 lg:py-[10.5rem]">
        <Splide
          options={{
            perPage: 2,
            gap: "2rem",
            arrows: false,
            pagination: false,
            padding: "4rem",
            breakpoints: {
              1024: { perPage: 1 },
            },
          }}
        >
          {/* First text slide */}
          <SplideSlide>
            <div className="mr-16">
              <h2 className="font-bold pb-6 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px]">
                collaboration models for the automotive industry
              </h2>
              <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Collaboration models in the automotive industry focus on partnerships between manufacturers, tech companies, and suppliers to drive innovation.
              </p>
            </div>
          </SplideSlide>

          {slides.map((item, i) => (
            <SplideSlide key={i}>
              <Card {...item} />
            </SplideSlide>
          ))}
        </Splide>
      </section>

      {/* ================= Mobile Layout ================= */}
      <section className="sm:hidden px-6 pt-14">
        <h2 className="font-bold pb-6 text-4xl tracking-[-2px]">
          collaboration models for the automotive industry
        </h2>
        <p className="text-base mb-12">
          Collaboration models in the automotive industry focus on partnerships between manufacturers, tech companies, and suppliers to drive innovation.
        </p>

        <div className="flex flex-col gap-5">
          {slides.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
      </section>
    </section>
  );
}

/* ================= Reusable Card ================= */
function Card({ title, desc, img }) {
  return (
    <article className="relative flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-6 py-48 lg:rounded-[30px] lg:px-10 lg:pb-10 lg:py-80">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <h3 className="font-bold pb-4 text-white text-2xl xl:text-3xl 2xl:text-4xl">
        {title}
      </h3>
      <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        {desc}
      </p>
    </article>
  );
}




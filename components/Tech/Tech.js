"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import styles from "./Tech.module.css";

export default function InfiniteSlider() {
  return (
    <div
      className={`${styles.container} overflow-hidden w-full py-12 bg-[#fff]`}
    >
      <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: "center",
          perPage:5, // default desktop
          autoWidth: true,
          gap: "3rem",
          arrows: false,
          pagination: false,
          autoScroll: {
            speed: 2.5,
            pauseOnHover: true,
          },
          breakpoints: {
            1024: {
              perPage: 2, // tablet
              gap: "1.5rem",
            },
            640: {
              perPage: 1, // mobile
              gap: "1rem",
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            Blockchain
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            iOS
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            UX Design
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            Android
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            Web Design
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="slide text-6xl font-medium  text-black">
            SAAS
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

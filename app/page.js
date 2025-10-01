"use client";
import Featured from "@/components/Featured/Featured";
import Logos from "@/components/Logo/Logos";
import Navbar from "@/components/Navbar/Navbar"
import { MdArrowOutward } from "react-icons/md";
import Tech from "@/components/Tech/Tech";
import Technologies from "@/components/Technologies/Technologies";
import Cta from "@/components/Cta/Cta";
import OurClients from "@/components/OurClients/OurClients";
import Industries from "@/components/Industries/Industries";
import { Award } from "lucide-react";
import Awards from "@/components/Awards/Awards";
import Trigger from "@/components/Trigger/Trigger";
import Footer from "@/components/Footer/Footer";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import Product from "@/components/Product/Product";
import Highlights from "@/components/Highlights/Highlights";
import { useRef, useEffect } from "react";  // 👈 ye add karo
import { gsap } from "gsap"; // 👈 ye add karo

export default function Home() {
   const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect(); // button ki position

    const maxMove = 200; // 👈 max move area (200-400px ke liye adjust karo)

    function handleMouseMove(e) {
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // mouse ki distance limit
      const limitedX = Math.max(Math.min(x, maxMove), -maxMove);
      const limitedY = Math.max(Math.min(y, maxMove), -maxMove);

      // GSAP se smooth follow
      gsap.to(btn, {
        x: limitedX * 1.4,
        y: limitedY * 1.4,
        scale: 0.9, // 👈 hover me chhota ho jaye
        duration: 0.4,
        ease: "power3.out",
      });
    }

    function handleMouseLeave() {
      // wapas apni jagah pe
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)", // 👈 smooth elastic effect
      });
    }

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="h-[90vh] bg-gradient-to-b from-gray-900 to-gray-600 text-white">
        <section className="pt-[10%]">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-between items-center">
            {/* Left Side Content */}
            <h1 className=" font-extrabold text-white md:text-6xl leading-none text-[43px] lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px] tracking-[-2px]">
              We are a <span className="text-[#3BB9E1] ">Software</span> <span className="text-[#3BB9E1] block"> Development</span> Company
            </h1>
            <p className=" text-neutral-200 mt-5 lg:max-w-xl 2xl:max-w-3xl text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              We are your trusted development partner with just one goal in focus to build products that generate a lasting, profitable impact.
            </p>

            {/* Right Side Circle */}
            {/* <div className="bg-[#3BB9E1] rounded-full h-[150px] w-[150px] flex flex-col items-center justify-center text-white mt-8 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <MdArrowOutward className="text-black text-5xl mb-2" />
              <b className="mb-0 font-bold mt-2 xl:leading-5 leading-4 text-center" >Let’s Discuss <br/> Your Idea</b>
            </div> */}

            <div className="ball text-right flex justify-end">
              <div ref={btnRef} className="bg-[#3BB9E1] duration-100 hover:bg-[#fff] rounded-full h-[150px] w-[150px] flex flex-col items-center justify-center hover:text-black text-white mt-8 cursor-pointer shadow-md"
            >
              <MdArrowOutward className="text-black text-5xl mb-2" />
              <b className="mb-0 font-bold mt-2 xl:leading-5 leading-4 text-center">
                Let’s Discuss <br /> Your Idea
              </b>
            </div>
            </div>

            
          </div>
        </section>

      </main>

      <Logos />

      <Featured />

      <Tech />

      <Product />

      <Technologies />

      <Cta />

      <OurClients />

      <Industries />

      <Awards />

      <Highlights />

      <Trigger />

      {/* <Test/> */}

      <Footer />

      <Sidepopup />

    </>
  )
}

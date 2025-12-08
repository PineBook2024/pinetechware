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
// import { Award } from "lucide-react";
import Awards from "@/components/Awards/Awards";
import Trigger from "@/components/Trigger/Trigger";
import Footer from "@/components/Footer/Footer";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import { usePopup } from "@/context/PopupContext"
import Product from "@/components/Product/Product";
import Highlights from "@/components/Highlights/Highlights";
import { useRef, useEffect } from "react";  // 👈 ye add karo
import { gsap } from "gsap"; // 👈 ye add karo
import Head from "next/head";
import SeoHead from "@/components/SeoHead";


export default function Home() {
  const { openPopup } = usePopup()
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect(); // button ki position

    const maxMove = 40; //  max move area (200-400px ke liye adjust karo)

    function handleMouseMove(e) {
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      // mouse ki distance limit
      const limitedX = Math.max(Math.min(x, maxMove), -maxMove);
      const limitedY = Math.max(Math.min(y, maxMove), -maxMove);

      // GSAP se smooth follow
      gsap.to(btn, {
        x: limitedX * 1,
        y: limitedY * 1,
        scale: 0.9, 
        duration: 0.2,
        ease: "power4.out",
      });
    }

    function handleMouseLeave() {
      // wapas apni jagah pe
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1.,
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
      <SeoHead
        title="Custom Software & Digital Solutions | Pine Techware"
        description="PineTechware offers expert website design, development, and digital solutions to help businesses grow through innovation and technology."
      />

      <Navbar />

      {/* <main className="h-[90vh] bg-gradient-to-b from-gray-900 to-gray-600 text-white">
        <section className="md:pt-[10%] pt-[50%]">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-between items-center">

            <h1 className="font-extrabold text-white md:text-5xl leading-none text-[43px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
              <span className="text-[#3BB9E1] ">USA’s #1</span> Software Development Company<br/> That Transforms Brands
            </h1>
            <p className=" text-neutral-200 mt-5 lg:max-w-xl 2xl:max-w-3xl text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Pine Techware is a full-cycle software development service bringing your vision to life through tech, design & innovation. Let’s make something remarkable.
            </p>

            <div className="ball text-right  justify-end pr-12 pb-8 md:flex hidden">
              <div ref={btnRef} className="bg-[#3BB9E1] duration-100 hover:bg-[#fff] scale-125 rounded-full h-[150px] w-[150px] flex flex-col items-center justify-center hover:text-black text-white mt-8 cursor-pointer shadow-md"
              >
                <MdArrowOutward className="text-black text-5xl" />
                <b className="mb-0 font-bold mt-2 xl:leading-5 leading-4 text-center">
                  Let’s Discuss <br /> Your Idea
                </b>
              </div>
            </div>


          </div>
        </section>

      </main> */}


<main className="relative h-[90vh] bg-gradient-to-b text-white overflow-hidden">

  {/* 🔹 Background Video */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover -z-10"
>
  <source src="/images/heroVid.mp4" type="video/mp4" />
</video>


  {/* 🔹 Main Content */}
  <section className="md:pt-[10%] pt-[50%] relative z-10">
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-col justify-between items-center">
      
      {/* Left Side Content */}
      <h1 className="font-extrabold text-white md:text-5xl leading-none text-[43px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
        <span className="text-[#3BB9E1] ">USA’s #1</span> Software Development Company
        <br />
        That Transforms Brands
      </h1>

      <p className=" text-neutral-200 mt-5 lg:max-w-xl 2xl:max-w-3xl text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        Pine Techware is a full-cycle software development service bringing your vision to life through tech, design & innovation. Let’s make something remarkable.
      </p>

      {/* Right Side Circle */}
      <div className="ball text-right justify-end pr-12 pb-8 md:flex hidden">
        <div
          ref={btnRef} onClick={openPopup}
          className="bg-[#3BB9E1] duration-100 hover:bg-[#fff] scale-125 rounded-full h-[150px] w-[150px] flex flex-col items-center justify-center hover:text-black text-white mt-8 cursor-pointer shadow-md"
        >
          <MdArrowOutward className="text-black text-5xl" />
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

      {/* <Awards /> */}

      {/* <Highlights /> */}

      <Trigger />

      {/* <Test/> */}

      <Footer />

      <Sidepopup />

    </>
  )
}

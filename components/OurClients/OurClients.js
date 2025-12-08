import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import styles from "./OurClients.module.css";
import { FaStar } from "react-icons/fa6";
import Img1 from "@/public/images/client1.svg";
import Img2 from "@/public/images/client2.svg";
import Img3 from "@/public/images/hotset.svg";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {

    const reviews = [
        {
            text: `"Pine Techware delivered exactly what we envisioned for our FinTech platform. Their project manager kept us updated on every milestone through Slack and weekly calls. What impressed us most was their genuine passion for our product and their expertise in financial technology."`,
            initials: "JD",
            bgColor: "#2ED06E",
            name: "— Rachel L., Co-Founder",
            stars: 5,
            // img: Img3,
        },
        {
            text: `"The Pine Techware team built a robust e-learning app with clean code and intuitive design. While timelines were ambitious, they worked tirelessly to meet our launch date. Their dedication and quick problem-solving made the entire experience rewarding."`,
            initials: "JD",
            bgColor: "#2ED06E",
            name: "— Jonathan M., CEO",
            stars: 5,
            // img: Img3,
        },
        {
            text: `"We partnered with Pine Techware for our e-commerce platform, and the results exceeded our expectations. The team constantly went the extra mile, providing creative solutions and seamless integration. Their ability to combine speed with quality was remarkable."`,
            initials: "JD",
            bgColor: "#2ED06E",
            name: "— Samantha R., Digital Strategy Lead",
            stars: 5,
            // img: Img3,
        },
        {
            text: `"Pine Techware has been instrumental in developing our healthcare app. From strategy to execution, they communicated clearly, delivered on time, and ensured compliance with industry standards. The feedback from our beta users has been overwhelmingly positive."`,
            initials: "JD",
            bgColor: "#2ED06E",
            name: "— Dr. Henry A., Director of Innovation",
            stars: 5,
            // img: Img3,
        },
    ];



    useEffect(() => {
        gsap.utils.toArray(".single-review").forEach((el) => {
            gsap.fromTo(
                el,
                { y: 80, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%", // jab element viewport me aaye
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);


    return (
        <div>

            <section className="OurClients-sec bg-white py-6">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto my-14 md:my-24">
                    <div className="mx-auto max-w-[1200px] sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="font-bold text-black lg:pb-[2.375rem] pb-6 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                            <span>Our Clients Trust Us And </span>
                            <span className={styles.textTheme}>
                                <span>Show Immense Satisfaction</span>
                            </span>
                        </h2>
                        <p className="text-black text-lg md:text-xl 2xl:text-2xl max-w-3xl mx-auto">
                            Pine Techware is trusted by industry leaders and many new startups that experience on-time delivery at this product development company.
                        </p>


                        {/* Images in flex */}
                        <div className="flex justify-center lg:pt-14 lg:pb-24 py-8 gap-6 wrap">
                            <Image src={Img1} alt="Client 1" width={200} height={100} className="object-contain invert" />
                            <Image src={Img2} alt="Client 1" width={200} height={100} className="object-contain invert" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-5 md:gap-y-6 component-height h-fit'>
                        {/* <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                        <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                        <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                        </div>

                        <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                            <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                <div className=''>
                                    <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
                                    <span className='flex mt-2 gap-1'>
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                    </span>
                                </div>
                            </div>


                            <div className="user-data">
                                <Link className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                    <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                        <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                        <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                        </div>

                        <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                            <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                <div className=''>
                                    <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
                                    <span className='flex mt-2 gap-1'>
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                    </span>
                                </div>
                            </div>


                            <div className="user-data">
                                <Link className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                    <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                        <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                        <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                        </div>

                        <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                            <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                <div className=''>
                                    <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
                                    <span className='flex mt-2 gap-1'>
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                    </span>
                                </div>
                            </div>


                            <div className="user-data">
                                <Link className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                    <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                        <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                        <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                        </div>

                        <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                            <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                <div className=''>
                                    <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
                                    <span className='flex mt-2 gap-1'>
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                        <FaStar className='text-amber-500' />
                                    </span>
                                </div>
                            </div>


                            <div className="user-data">
                                <Link className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                    <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                </Link>
                            </div>

                        </div>
                    </div> */}


                        {/* {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">
                                {review.text}
                            </p>

                            <div className="flex justify-between md:items-center items-start flex-col sm:flex-row"></div>

                            <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">
                                <div className="image-here flex justify-center items-center gap-4 w-full md:w-auto">
                                    <div
                                        id="profileImage"
                                        style={{ backgroundColor: review.bgColor }}
                                        className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold rounded-full text-center flex items-center justify-center text-black"
                                    >
                                        {review.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                            {review.name}
                                        </p>
                                        <span className="flex mt-2 gap-1">
                                            {Array.from({ length: review.stars }).map((_, i) => (
                                                <FaStar key={i} className="text-amber-500" />
                                            ))}
                                        </span>
                                    </div>
                                </div>

                                <div className="user-data">
                                    <Link
                                        className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                                        href="/"
                                    >
                                        <Image
                                            className="md:w-full"
                                            src={review.img}
                                            width={100}
                                            height={50}
                                            alt="hot"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))} */}

                        <div className="space-y-10">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl"
                                >
                                    <p className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl tracking-[0px] font-semibold text-black lg:!leading-[2.875rem] text-md xl:text-2xl">
                                        {review.text}
                                    </p>

                                    <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">
                                        <div className="image-here flex justify-center items-center gap-4 w-full md:w-auto">
                                            <div
                                                style={{ backgroundColor: review.bgColor }}
                                                className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold rounded-full text-center flex items-center justify-center text-black"
                                            >
                                                {review.initials}
                                            </div>
                                            <div>
                                                <p className="font-bold text-black text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">
                                                    {review.name}
                                                </p>
                                                <span className="flex mt-2 gap-1">
                                                    {Array.from({ length: review.stars }).map((_, i) => (
                                                        <FaStar key={i} className="text-amber-500" />
                                                    ))}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="user-data">
                                            <Link
                                                className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0"
                                                href="/"
                                            >
                                                {/* <Image
                                                    className="md:w-full"
                                                    src={review.img}
                                                    width={100}
                                                    height={50}
                                                    alt="hot"
                                                /> */}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default OurClients

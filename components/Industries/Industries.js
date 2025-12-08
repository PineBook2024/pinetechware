import React from 'react'
import Image from 'next/image'
import styles from './Industries.module.css'

const Industries = () => {
    const slides = [
  {
    id: 1,
    title: "Finance & FinTech",
    description:
      "Empowering Finance & FinTech companies with secure, scalable, and innovative digital solutions. From mobile banking apps to AI-driven platforms, we build technology that enhances user trust, drives growth, and redefines financial experiences.",
  },
  {
    id: 2,
    title: "Healthcare & Wellbeing",
    description:
      "Designing and developing cutting-edge digital solutions for the Healthcare & Wellbeing industry, ensuring security, compliance, and user-centric experiences. From telemedicine apps to wellness platforms, we empower providers and patients with technology that improves lives.",
  },
  {
    id: 3,
    title: "Education & EdTech",
    description:
      "Creating innovative digital solutions for the Education & EdTech industry, making learning accessible, engaging, and scalable. From eLearning platforms to gamified apps, we empower educators and learners with technology that inspires growth.",
  },
  {
    id: 4,
    title: "EducE-commerce & Retailation",
    description:
      "Build powerful E-commerce and Retail solutions that elevate customer experiences and drive sales growth. From scalable online stores to personalized shopping apps, we help brands connect with customers anytime, anywhere.",
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "Crafting innovative digital solutions for the Real Estate industry that simplify property search, management, and transactions. From immersive virtual tours to smart listing platforms, we help realtors and buyers connect seamlessly.",
  },
  {
    id: 6,
    title: "Startups & Enterprises",
    description:
      "We partner with Startups and Enterprises to transform bold ideas into scalable digital products. From MVP development to enterprise-grade solutions, we provide the strategy, design, and technology that fuel long-term growth.",
  },
];

    return (
        <div>
            <section className={`$styles.industriesSection bg-[#3bb9e1]`} >
                <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
                    <div className='max-w-3xl xl:max-w-4xl'>
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl text-white  lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                                <span>Industries We Serve at Pine Techware</span>
                            </h2>
                            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg text-white xl:text-xl 2xl:text-2xl">We’ve worked with ambitious clients in major industries, providing tailored solutions that drive results.</p>
                        </div>
                    </div>

                    <div className='grid max-w-2xl mt-20 grid-cols-1 gap-5  lg:gap-10 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3'>

                        {slides.map((slide) => (
                            <article
                                key={slide.id}
                                className="group xl:p-7 p-6  text-white lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300"
                            >
                                <div className="flex flex-col justify-between md:gap-14 gap-8 h-full">
                                    <h3 className="font-bold leading-[1.2] text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
                                        {slide.title}
                                    </h3>
                                    <div className="flex flex-col justify-between h-full">
                                        <div>
                                            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}


                        {/* <article className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] undefined ">
                            <div className="flex flex-col justify-between md:gap-14 gap-8 h-full" href="/">

                                <h3 className=" font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </article>


                        <article className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] undefined ">
                            <div className="flex flex-col justify-between md:gap-14 gap-8 h-full" href="/">

                                <h3 className=" font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </article>


                        <article className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] undefined ">
                            <div className="flex flex-col justify-between md:gap-14 gap-8 h-full" href="/">

                                <h3 className=" font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </article>


                        <article className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] undefined ">
                            <div className="flex flex-col justify-between md:gap-14 gap-8 h-full" href="/">

                                <h3 className=" font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </article>


                        <article className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] undefined ">
                            <div className="flex flex-col justify-between md:gap-14 gap-8 h-full" href="/">

                                <h3 className=" font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3>
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="undefined text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.</p>
                                    </div>
                                </div>
                            </div>
                        </article> */}



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Industries

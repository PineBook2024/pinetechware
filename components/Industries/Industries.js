import React from 'react'
import Image from 'next/image'
import styles from './Industries.module.css'

const Industries = () => {
    const slides = [
  {
    id: 1,
    title: "Automotive",
    description:
      "Enhance your vehicle management operations and boost customer satisfaction with tailored custom API solutions designed for your business needs.",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Streamline patient care and optimize operations with scalable healthcare technology solutions.",
  },
  {
    id: 3,
    title: "E-Commerce",
    description:
      "Empower your online business with custom integrations, fast performance, and secure solutions.",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Transform learning experiences with digital solutions tailored for modern education systems.",
  },
  {
    id: 5,
    title: "Finance",
    description:
      "Enhance financial services with secure, efficient, and innovative digital platforms.",
  },
  {
    id: 6,
    title: "Real Estate",
    description:
      "Boost property management and sales processes with user-friendly digital solutions.",
  },
];

    return (
        <div>
            <section className={styles.industriesSection}>
                <div className="container mx-auto max-w-7xl px-6 pb-8 pt-14 md:pt-24 lg:pb-24 lg:px-8">
                    <div className='max-w-3xl xl:max-w-4xl'>
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold pb-1 md:pb-0 text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                                <span>industries we serve</span>
                            </h2>
                            <p className="lg:pt-[2.375rem] pt-6 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">With a wide range of services and proven experience across major industries, we understand your challenges and deliver tailored solutions that overcome them and drive meaningful impact.</p>
                        </div>
                    </div>

                    <div className='grid max-w-2xl mt-20 grid-cols-1 gap-5 lg:gap-10 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3'>

                        {slides.map((slide) => (
                            <article
                                key={slide.id}
                                className="group xl:p-7 p-6 lg:rounded-[30px] rounded-2xl border border-[#CCCCCC] hover:border-[#3bb9e1] transition-colors duration-300"
                            >
                                <div className="flex flex-col justify-between md:gap-14 gap-8 h-full">
                                    <h3 className="font-bold leading-7 text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">
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

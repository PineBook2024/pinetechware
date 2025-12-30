import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { IoIosArrowRoundForward } from "react-icons/io";
import Img1 from "@/public/images/1.svg"
import Img2 from "@/public/images/2.svg"
import Img3 from "@/public/images/3.svg"
import Img4 from "@/public/images/4.svg"
import Img5 from "@/public/images/5.svg"
import Img6 from "@/public/images/6.svg"
import Img7 from "@/public/images/7.svg"
import Img8 from "@/public/images/8.svg"
import Img9 from "@/public/images/9.svg"
import Img10 from "@/public/images/10.svg"
import Img11 from "@/public/images/11.svg"
import Img12 from "@/public/images/12.svg"
import Img13 from "@/public/images/13.svg"
import Img14 from "@/public/images/14.svg"
import Img15 from "@/public/images/15.svg"



const AllIndustries = () => {
    return (

            <div className='bg-white'>
                <section className="px-6 lg:px-8 pt-14 md:py-24 lg:py-[10.5rem] max-w-7xl mx-auto ">
                    <div className="2xl:max-w-4xl lg:max-w-3xl lg:pb-24 pb-12">
                        <div className="lg:overflow-hidden">
                            <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px] text-black uppercase"><span>Industries We Serve</span></h2></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 lg:grid-cols-3">
                       
                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img1} className="" alt="Automotive icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
                                    </div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Automotive</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Automotive" href="/industries/automotive-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                         <Image src={Img2} className="" alt="B2B icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
                                    </div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">B2B</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to B2B" href="/industries/b2b-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                         <Image src={Img3} className="" alt="Healthcare icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Healthcare</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Healthcare" href="/industries/healthcare-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img4} className="" alt="Education icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Education</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Education" href="/industries/education-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img5} className="" alt="Ecommerce icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Ecommerce</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Ecommerce" href="/industries/ecommerce-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img6} className="" alt="Food icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Food</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Food" href="/industries/foodtech-software-development/"></Link>
                            </div>
                        </article>

                         <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img7} className="" alt="Manufacturing icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Manufacturing</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Manufacturing" href="/industries/manufacturing-software-solutions/"></Link>
                            </div>
                        </article>

                       <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                       <Image src={Img8} className="" alt="Fashion icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Fashion</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Fashion" href="/industries/fashion-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img9} className="" alt="CRM icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">CRM</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to CRM" href="/industries/crm-development-services/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                       <Image src={Img10} className="" alt="Logistics icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Logistics</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Logistics" href="/industries/logistics-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                       <Image src={Img11} className="" alt="Travel icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Travel</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Travel" href="/industries/travel-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img12} className="" alt="Legal icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
                                    </div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Legal</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Legal" href="/industries/legal-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                       <Image src={Img13} className="" alt="Agriculture icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" /></div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Agriculture</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Agriculture" href="/industries/agriculture-software-development/"></Link>
                            </div>
                        </article>

                        <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img14} className="" alt="Finance icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
                                    </div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Finance</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Finance" href="/industries/finance-software-development/"></Link>
                            </div>
                        </article>

                         <article className="group overflow-hidden group sm:p-10 p-6 lg:rounded-[30px] rounded-2xl border h-full hover:border-[#3bb9e1] cursor-pointer hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative">
                            <div className="flex flex-col justify-between gap-12 lg:gap-12 h-full">
                                <div className="space-y-8">
                                    <div className="flex justify-between">
                                        <Image src={Img15} className="" alt="Real Estate icon" loading="lazy" />
                                        <IoIosArrowRoundForward className="text-white text-5xl group-hover:translate-x-2 -translate-x-2 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out" />
                                    </div>
                                    <h3 className="text-black font-bold text-2xl xl:text-3xl 2xl:text-4xl tracking-[0px]">Real Estate</h3></div>
                                <Link className="h-full absolute inset-0" aria-label="Go to Real Estate" href="/industries/real-estate-software-development/"></Link>
                            </div>
                        </article> 
                    </div>
                </section>
            </div>

    )
}

export default AllIndustries

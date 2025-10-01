import React from 'react'
import Image from 'next/image';
import styles from "./OurClients.module.css";
import { FaStar } from "react-icons/fa6";
import Img1 from "@/public/images/client1.svg";
import Img2 from "@/public/images/client2.svg";
import Img3 from "@/public/images/hotset.svg";




const OurClients = () => {
    return (
        <div>

            <section className="OurClients-sec bg-black py-6">
                <div className="px-6 lg:px-8 max-w-7xl mx-auto my-14 md:my-24">
                    <div className="mx-auto max-w-[1200px] sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="font-bold text-white lg:pb-[2.375rem] pb-6 sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                            <span>our clients simply love </span>
                            <span className={styles.textTheme}>
                                <span>what we do</span>
                            </span>
                        </h2>
                        <p className="text-white text-lg md:text-xl 2xl:text-2xl max-w-3xl mx-auto">
                            We have had the privilege of working with a diverse range of clients across
                            various industries. Here are some of the companies we have collaborated with:
                        </p>


                        {/* Images in flex */}
                        <div className="flex justify-center lg:pt-14 lg:pb-24 py-8 gap-6 wrap">
                            <Image src={Img1} alt="Client 1" width={200} height={100} className="object-contain" />
                            <Image src={Img2} alt="Client 1" width={200} height={100} className="object-contain" />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-5 md:gap-y-6 component-height h-fit'>
                        <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                            <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                            <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                            </div>

                            <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                                <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                    <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                    <div className=''>
                                        <p className="font-bold text-white text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
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
                                    <a className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                        <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                    </a>
                                </div>

                            </div>
                        </div>

                         <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                            <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                            <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                            </div>

                            <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                                <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                    <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                    <div className=''>
                                        <p className="font-bold text-white text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
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
                                    <a className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                        <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                    </a>
                                </div>

                            </div>
                        </div>

                         <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                            <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                            <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                            </div>

                            <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                                <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                    <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                    <div className=''>
                                        <p className="font-bold text-white text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
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
                                    <a className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                        <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                    </a>
                                </div>

                            </div>
                        </div>

                         <div className="single-review border border-[#535353] p-6 md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[65px] lg:rounded-[30px] rounded-2xl">
                            <p className=" text-lg sm:text-xl md:text-2xl  2xl:text-4xl tracking-[0px] font-semibold text-white lg:!leading-[2.875rem] text-md xl:text-2xl">"Cubix managed to provide successful support and development in a timely manner. The app is still in preparation for the beta launch, but it has been receiving a lot of positive feedback from the client. The team provided excellent workflow and communication throughout the project."</p>

                            <div className="flex justify-between md:items-center  items-start  flex-col sm:flex-row">
                            </div>

                            <div className="relative flex gap-4 items-center w-full pt-12 justify-between sm:w-auto">

                                <div className='image-here flex justify-center items-center gap-4 w-full md:w-auto'>
                                    <div id="profileImage" className="h-12 w-12 xl:h-[84px] md:h-20 xl:w-[84px] md:w-20 lg:text-3xl text-xl font-bold bg-[#2ED06E] rounded-full text-center flex items-center justify-center text-black">JD</div>
                                    <div className=''>
                                        <p className="font-bold text-white text-xs sm:text-sm lg:text-md xl:text-lg 2xl:text-xl">Jackie Dallas, Director</p>
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
                                    <a className="w-full md:w-[120px] flex justify-end mt-4 md:block md:mt-0" href="/">
                                        <Image className="md:w-full" src={Img3} width={100} height={50} alt="hot" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OurClients

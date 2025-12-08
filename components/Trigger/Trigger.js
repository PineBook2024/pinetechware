import React from 'react'
import { usePopup } from "@/context/PopupContext";



const Trigger = ({ title, description, buttonText }) => {
    const { openPopup, closePopup, isOpen } = usePopup();

    return (
        <div>
            {/* <section className="mt-14 start-project bg-white relative w-full lg:min-h-[80vh] z-50 flex items-center justify-center -top-[1px]">
                <div className="pt-14 mx-auto reveal-text text-center max-w-7xl px-6 md:py-24 pb-14 lg:px-8">
                    <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Create Without Limits!</p>
                    <div className="overflow-hidden">
                        <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px]  pb-2 2xl:pb-[11px]" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>The future of your  <br className="min-[580px]:block hidden" /> product starts here.</h2>
                    </div>
                     <div className="flex mx-auto justify-center mt-6 md:mt-8 lg:mt-11 w-fit">
                            <button
                                className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center px-6 md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm" onClick={openPopup}
                            >
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                                <span className="pb-[3px] md:pb-1.5">Get a Quote</span>
                            </button>
                        </div>
                </div>
            </section> */}


             <section className="start-project bg-white relative w-full lg:min-h-[80vh] z-10 flex items-center justify-center -top-[1px]">
                <div className="pt-14 mx-auto reveal-text text-center max-w-7xl px-6 md:py-24 pb-14 lg:px-8">
                    <p className="text-black mb-2 text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                        {description || "Create Without Limits!"}
                    </p>
                    <div className="overflow-hidden">
                        <h2 className="text-black font-extrabold text-[43px] leading-none lg:text-6xl xl:text-7xl 2xl:text-8xl lg:tracking-[-4px]  pb-2 2xl:pb-[11px]" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                            {title || "The future of your product starts here."}
                        </h2>
                    </div>
                    <div className="flex mx-auto justify-center mt-6 md:mt-8 lg:mt-11 w-fit">
                        <button
                            className="buttonChange buttonChangeBlack bg-black text-white w-[180px] h-[45px] border-transparent rounded-full font-extrabold text-sm"
                            onClick={openPopup}
                        >
                            <span className="pb-[3px] md:pb-1.5">{buttonText || "Get a Quote"}</span>
                             <span className="pb-[3px] md:pb-1.5">{buttonText || "Get a Quote"}</span>

                        </button>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Trigger

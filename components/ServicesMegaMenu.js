"use client"
import Link from "next/link"


export default function ServicesMegaMenu({ isLight }) {
    return (
        <div className="group static">
            {/* Services Link */}
            <Link
                href="/services"
                className={`relative inline-block font-medium cursor-pointer
    before:absolute before:-bottom-1 before:left-0 before:h-[2px]
    before:w-0 before:bg-blue-500 before:transition-all before:duration-300
    hover:before:w-full
    text-base transition-colors duration-200 ${isLight ? "text-black" : "text-white"}
  `}
            >
                Services
            </Link>



            {/* Mega Menu */}
            <div className="fixed left-0 right-0 top-[64px] w-screen hidden group-hover:block bg-white z-[9999]">
                <div className="w-full shadow-xl ring-1 ">

                    <div className="mx-auto max-w-7xl px-8 py-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                            {/* Column 1 - Services */}
                            {/* <div className="flex flex-col gap-6 border-r border-gray-200 pr-10">
                <div className="flex items-center justify-between">
                  <p className="text-[26px] font-bold text-black tracking-tight">
                    Services
                  </p>
                  <Link
                    href="/services"
                    className="text-lg font-semibold text-[#3BB9E1] hover:underline"
                  >
                    →
                  </Link>
                </div>
              </div> */}

                            {/* Column 2 - App Development */}
                            <div className="flex flex-col gap-4">
                                <Link href="/mobile-app-development/" className="text-lg font-bold text-black hover:text-[#3BB9E1]">
                                    Mobile App Development
                                </Link>
                                <Link href="/iphone-app-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    iOS App Development
                                </Link>
                                <Link href="/android-app-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Android App Development
                                </Link>
                                <Link href="/ecommerce-app-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    eCommerce App Development
                                </Link>
                                <Link href="/visionos-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    visionOS App Development
                                </Link>
                                <Link href="/enterprise-app-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Enterprise App Development
                                </Link>
                            </div>

                            {/* Column 3 - Software */}
                            <div className="flex flex-col gap-4">
                                <Link href="/software-development/" className="text-lg font-bold text-black hover:text-[#3BB9E1]">
                                    Software Development
                                </Link>
                                <Link href="/software-consulting-services/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Software Consulting
                                </Link>
                                <Link href="/system-integration-services/" className="text-base text-black hover:text-[#3BB9E1]">
                                    System Integration
                                </Link>
                                <Link href="/software-design-services/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Software Design
                                </Link>
                                <Link href="/software-testing-services/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Software Testing
                                </Link>
                            </div>

                            {/* Column 4 - Blockchain */}
                            <div className="flex flex-col gap-4">
                                <Link href="/blockchain-development/" className="text-lg font-bold text-black hover:text-[#3BB9E1]">
                                    Blockchain Development
                                </Link>
                                <Link href="/crypto-wallet-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Crypto Wallet Development
                                </Link>
                                <Link href="/smart-contract-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Smart Contract Development
                                </Link>
                            </div>

                            {/* Column 5 - Game Dev */}
                            <div className="flex flex-col gap-4">
                                <Link href="/game-development/" className="text-lg font-bold text-black hover:text-[#3BB9E1]">
                                    Game Development
                                </Link>
                                <Link href="/mobile-game-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Mobile Game Development
                                </Link>
                                <Link href="/unity-game-development/" className="text-base text-black hover:text-[#3BB9E1]">
                                    Unity Game Development
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

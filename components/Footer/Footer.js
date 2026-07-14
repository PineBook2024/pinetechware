import React from 'react'
import Image from 'next/image'
import logo from "@/public/images/logo.png";
import Link from "next/link";
import {
    Apple,
    Bot,
    Box,
    Boxes,
    Brush,
    Bug,
    Code2,
    Cuboid,
    Flame,
    Gamepad2,
    Globe2,
    Grid2X2,
    Hash,
    Layers,
    Mail,
    Megaphone,
    Monitor,
    PenTool,
    Search,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Users,
    Video,
} from "lucide-react";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerServices = [
    {
        title: "Web Design & Development",
        links: [
            { label: "Website Designing", href: "/website-designing-services", icon: Monitor },
            { label: "Website Development", href: "/website-development-services", icon: Code2 },
            { label: "E-Commerce Solution", href: "/e-commerce-solution", icon: ShoppingCart },
            { label: "Custom Application", href: "/custom-application-services", icon: Code2 },
            { label: "Shopify Store", href: "/shopify-store-development", icon: ShoppingBag },
            { label: ".Net Application", href: "/asp-net-development", icon: Grid2X2 },
        ],
    },
    {
        title: "Mob App Development",
        links: [
            { label: "iOS App", href: "/ios-app-development-services", icon: Apple },
            { label: "Android App", href: "/android-app-development-services", icon: Bot },
            { label: "Kotlin App", href: "/kotlin-app-development", icon: Flame },
            { label: "React Native App", href: "/react-native-app", icon: Code2 },
            { label: "Flutter App", href: "/flutter-app-development-services", icon: Flame },
            { label: "Swift App", href: "/swift-app-development", icon: Apple },
        ],
    },
    {
        title: "Game Development",
        links: [
            { label: "Mobile Game Development", href: "/mobile-game-development", icon: Gamepad2 },
            { label: "Unity Game Development", href: "/unity-game-development", icon: Cuboid },
            { label: "Unreal Game Development", href: "/unreal-game-development", icon: Boxes },
            { label: "Blockchain Game Development", href: "/blockchain-game-development", icon: Box },
            { label: "2D Game Development", href: "/2d-game-development", icon: Grid2X2 },
            { label: "3D Game Development", href: "/3d-game-development", icon: Layers },
            { label: "Web3 Game Development", href: "/web3-game-development", icon: Globe2 },
            { label: "Multiplayer Game Development", href: "/multiplayer-game-development", icon: Users },
            { label: "Game Testing", href: "/game-testing", icon: Bug },
        ],
    },
    {
        title: "Digital Marketing",
        links: [
            { label: "Email Marketing Service", href: "/email-marketing-service", icon: Mail },
            { label: "Search Engine Optimization", href: "/search-engine-optimization", icon: Search },
            { label: "Social Media Marketing", href: "/social-media-marketing", icon: Hash },
            { label: "PPC Management", href: "/ppc-management", icon: Megaphone },
        ],
    },
    {
        title: "Branding",
        links: [
            { label: "Custom Graphic Design", href: "/custom-graphic-design", icon: Brush },
            { label: "Logo Designs", href: "/logo-design-services", icon: PenTool },
            { label: "Professional Branding", href: "/branding-services", icon: ShieldCheck },
            { label: "Video Animation", href: "/video-animation-services", icon: Video },
        ],
    },
];


const Footer = () => {
    return (
        <div>
            <section className="bg-[#111111] text-white">
                <div className="container mx-auto px-5 py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                        {footerServices.map((group) => (
                            <div key={group.title}>
                                <h2 className="mb-5 text-lg font-bold leading-snug text-white">
                                    {group.title}
                                </h2>
                                <nav className="space-y-4">
                                    {group.links.map(({ label, href, icon: Icon }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            className="flex items-start gap-3 text-base leading-6 text-white/80 transition-colors hover:text-[#3BB9E1]"
                                        >
                                            <Icon className="mt-1 h-4 w-4 shrink-0 text-white/60" strokeWidth={2.4} />
                                            <span>{label}</span>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="text-white body-font brand-footer bg-black">
                <div className="container px-5 pt-10 pb-10 md:pt-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col position-relative">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center justify-evenly py-10">
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4 widget-2 relative">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white cursor-pointer">
                                <Image src={logo} width={150} height={200} alt='logo'></Image>
                            </a>
                            <p className="mt-2 text-sm text-white leading-7 px-4">
                                Pine Techware is among the Leading Software Design & Marketing Agencies in USA & UK. We are Committed to Provide Innovative Tech Products and Solutions with Affordability
                            </p>
                        </div>
                        <div className="lg:w-1/5 md:w-1/3 w-full px-4 widget-2 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl md:text-2xl mb-3 font-poppins font-bold	">
                                Quick Links
                            </h2>
                            <nav className="list-none mb-10 mt-5">
                                <li>
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = "/about"; }}>
                                        About
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/services" onClick={(e) => { e.preventDefault(); window.location.href = "/services"; }}>
                                        Services
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/work" onClick={(e) => { e.preventDefault(); window.location.href = "/work"; }}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className="mt-3">
                                    <Link href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = "/contact"; }}>
                                        Contact Us
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/3 w-full px-4 widget-3 relative">
                            <h2 className="title-font text-white tracking-widest text-2xl mb-3 font-poppins font-bold">
                                Contact Info
                            </h2>

                            <Link
                                href="tel:3075221099"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                Sales: (307) 522-1099
                            </Link>

                            <Link
                                href="tel:8668417469"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                Support: (866) 841-7469
                            </Link>

                            <Link
                                href="mailto:info@pinetechware.com"
                                className="text-white text-sm font-poppins flex justify-center md:justify-start mb-5"
                            >
                                info@pinetechware.com
                            </Link>

                            {/* Canada Address */}
                            <h4 className="text-white font-bold text-xl font-poppins text-center lg:text-start uppercase">
                                Canada Address:
                            </h4>

                            <p className="text-white mb-3">
                                R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2
                            </p>

                            {/* <div className="w-full h-[200px] mb-6 rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=10225+Yonge+St,+Richmond+Hill,+ON+L4C+3B2&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div> */}

                            {/* USA Address */}
                            <h4 className="text-white font-bold text-xl font-poppins text-center lg:text-start uppercase">
                                USA Address:
                            </h4>

                            <p className="text-white mb-3">
                                30 N Gould St 54593 Sheridan Wyoming 82801-6317
                            </p>

                            {/* <div className="w-full h-[200px] rounded overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps?q=211+E+43rd+St,+New+York,+NY+10017&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div> */}
                        </div>

                    </div>

                </div>
                <div className="copyright-sec">
                    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white w-full md:text-center text-sm sm:text-left">
                            Copyright © 2026 |
                            <Link
                                href="/terms-and-conditions"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Terms & Conditions |
                            </Link>

                            <Link
                                href="/privacy-policy"
                                rel="noopener noreferrer"
                                className="text-white ml-1"
                                target="_blank"
                            >
                                Privacy Policy | {" "}
                            </Link>
                            Powered by <span className="powered-by-text"><Link href="https://www.pinebookwriting.com/" target="_blank">Pine Book Writing Inc.</Link></span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

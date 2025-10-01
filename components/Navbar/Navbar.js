"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import styles from "./Navbar.module.css"
import Image from "next/image"
import logoDark from "@/public/images/logo-dark.png"
import logoWhite from "@/public/images/logo.png"
import { usePopup } from "@/Context/PopupContext";



export default function Navbar() {

  const { openPopup, closePopup, isOpen } = usePopup();
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Packages", href: "#packages" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <span className="block w-32 h-auto">
              <Image
                src={isScrolled ? logoDark : logoWhite}
                alt="MyLogo"
                width={130}
                height={40}
                priority
              />
            </span>
          </div>

          {/* Center Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.navLink} text-base font-medium transition-colors duration-200 ${isScrolled
                  ? "text-gray-700 hover:[text-#3BB9E1]"
                  : "text-white hover:#3BB9E1]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden md:block">
            {/* <a
              href="#contact"
              className={`${styles.customButton} relative inline-block px-5 py-2 font-semibold rounded-full overflow-hidden group transition ${
                isScrolled
                  ? "text-black [bg-#3BB9E1] hover:[text-#3BB9E1]"
                  : "[text-#3BB9E1] bg-white hover:bg-gray-200"
              }`}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-transform duration-500 -translate-x-full group-hover:translate-x-0"></span>

              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Get in Touch
              </span>
            </a> */}

            <button className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4" onClick={openPopup}> <span className="pb-[3px] md:pb-1.5">Get in Touch</span> <span className="pb-[3px] md:pb-1.5">Get in Touch</span> </button>
          </div>

          {/* Mobile menu button */}
          {/* <button className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4" > <span className="pb-[3px] md:pb-1.5">Get in Touch</span> <span className="pb-[3px] md:pb-1.5">Get in Touch</span> </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <button className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4" > <span className="pb-[3px] md:pb-1.5">Get in Touch</span> <span className="pb-[3px] md:pb-1.5">Get in Touch</span> </button> */}

    </nav>
  )
}

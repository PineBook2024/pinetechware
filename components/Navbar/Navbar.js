"use client"
import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"
import Image from "next/image"
import logoDark from "@/public/images/logo-dark.png"
import logoWhite from "@/public/images/logo.png"
import { usePopup } from "@/context/PopupContext"
import Link from "next/link"

export default function Navbar() {
  const { openPopup } = usePopup()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState("dark")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute("data-theme")
            if (theme) setActiveTheme(theme)
          }
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll("[data-theme]").forEach((sec) => {
      observer.observe(sec)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/work" },
    { name: "Contact Us", href: "/contact" },

  ]

  const isLight = activeTheme === "light" || isScrolled

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all z-30 duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/" className="block w-32 h-auto">
              <Image
                src={isLight ? logoDark : logoWhite}
                alt="MyLogo"
                width={130}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.navLink} text-base font-medium transition-colors duration-200 ${isLight
                    ? "text-gray-700 hover:[text-#3BB9E1]"
                    : "text-white hover:#3BB9E1]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden md:block">
            <button
              className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] items-center md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4"
              onClick={openPopup}
            >
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
            </button>
          </div>

          {/* Burger Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className={`focus:outline-none transition-colors duration-300 ${isLight ? "text-gray-800" : "text-white"
                }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                    }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 dark:text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button
            className="buttonChange buttonChangeBlack bg-black text-white w-[180px] h-[45px] border-transparent rounded-full font-extrabold text-sm"
            onClick={() => {
              openPopup()
              setMenuOpen(false)
            }}
          >
            <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
            <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

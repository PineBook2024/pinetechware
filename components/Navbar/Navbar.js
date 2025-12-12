"use client"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMdArrowDropdown } from "react-icons/io"

import {
  FaPaintBrush,
  FaPenNib,
  FaIdBadge,
  FaVideo,
  FaLaptopCode,
  FaCode,
  FaShoppingCart,
  FaEnvelope,
  FaSearch,
  FaHashtag,
  FaBullhorn,
  FaShopify,
  FaApple,
  FaAndroid,
  FaMicrosoft,
  FaJava,
  FaReact,
  FaFire,
  FaGamepad,
  FaUnity,
  FaCubes,
  FaCube,
  FaVectorSquare,
  FaLayerGroup,
  FaGlobe,
  FaUsers,
  FaBug,
} from "react-icons/fa"

import logoDark from "@/public/images/logo-dark.png"
import logoWhite from "@/public/images/logo.png"
import { usePopup } from "@/context/PopupContext"

export default function Navbar() {
  const { openPopup } = usePopup()
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = useState(false)
  const [activeTheme, setActiveTheme] = useState("dark")

  const [menuOpen, setMenuOpen] = useState(false) // mobile menu
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false) // desktop mega
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false) // mobile accordion

  const navRef = useRef(null)
  const megaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const theme = entry.target.getAttribute("data-theme")
          if (entry.isIntersecting && theme) setActiveTheme(theme)
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll("[data-theme]").forEach((sec) => observer.observe(sec))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpenDesktop(false)
    setServicesOpenMobile(false)
  }, [pathname])

  // Close on outside click (desktop mega + mobile menu)
  useEffect(() => {
    const onDocClick = (e) => {
      const t = e.target
      const navEl = navRef.current
      const megaEl = megaRef.current

      if (servicesOpenDesktop) {
        const clickedInsideMega = megaEl?.contains(t)
        const clickedInsideNav = navEl?.contains(t)
        if (!clickedInsideMega && !clickedInsideNav) setServicesOpenDesktop(false)
      }

      if (menuOpen) {
        const clickedInsideNav = navEl?.contains(t)
        if (!clickedInsideNav) setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [servicesOpenDesktop, menuOpen])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ""
      return
    }
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setServicesOpenDesktop(false)
    setServicesOpenMobile(false)
  }

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Portfolio", href: "/work" },
      { name: "Contact Us", href: "/contact" },
    ],
    []
  )

  // Services data (screenshot wali list)
  const servicesData = useMemo(
    () => [
      {
        category: "Branding",
        items: [
          { name: "Custom Graphic Design", href: "/Custom-Graphic-Design", icon: FaPaintBrush },
          { name: "Logo Designs", href: "/Logo-Design", icon: FaPenNib },
          { name: "Professional Branding", href: "/Professional-Branding", icon: FaIdBadge },
          { name: "Video Animation", href: "/Video-Animation", icon: FaVideo },
        ],
      },
      {
        category: "Web Design & Development",
        items: [
          { name: "Website Designing", href: "/Website-Designing", icon: FaLaptopCode },
          { name: "Website Development", href: "/Website-Development", icon: FaCode },
          { name: "E-Commerce Solution", href: "/E-Commerce-Solution", icon: FaShoppingCart },
          { name: "Custom Application", href: "/Custom-Application", icon: FaCode },
        ],
      },
      {
        category: "Digital Marketing",
        items: [
          { name: "Email Marketing Service", href: "/Email-Marketing-Service", icon: FaEnvelope },
          { name: "Search Engine Optimization", href: "/Search-Engine-Optimization", icon: FaSearch },
          { name: "Social Media Marketing", href: "/Social-Media-Marketing", icon: FaHashtag },
          { name: "PPC Management", href: "/PPC-Management", icon: FaBullhorn },
          { name: "Shopify Store", href: "/Shopify-Store", icon: FaShopify },
        ],
      },
      {
        category: "Mob App Development",
        items: [
          { name: "iOS App", href: "/IOS-App", icon: FaApple },
          { name: "Android App", href: "/Android-App", icon: FaAndroid },
          { name: "ASP App", href: "/ASP-App", icon: FaMicrosoft },
          { name: "Kotlin App", href: "/Kotlin-App", icon: FaJava },
          { name: "React Native App", href: "/React-Native-App", icon: FaReact },
          { name: "Flutter App", href: "/Flutter-App", icon: FaFire },
          { name: "Swift App", href: "/Swift-App", icon: FaApple },
        ],
      },
      {
        category: "Game Development",
        items: [
          { name: "Mobile Game Development", href: "/Mobile-Game-Development", icon: FaGamepad },
          { name: "Unity Game Development", href: "/Unity-Game-Development", icon: FaUnity },
          { name: "Unreal Game Development", href: "/Unreal-Game-Development", icon: FaCubes },
          { name: "Blockchain Game Development", href: "/Blockchain-Game-Development", icon: FaCube },
          { name: "2D Game Development", href: "/2D-Game-Development", icon: FaVectorSquare },
          { name: "3D Game Development", href: "/3D-Game-Development", icon: FaLayerGroup },
          { name: "Web3 Game Development", href: "/Web3-Game-Development", icon: FaGlobe },
          { name: "Multiplayer Game Development", href: "/Multiplayer-Game-Development", icon: FaUsers },
          { name: "Game Testing", href: "/Game-Testing", icon: FaBug },
        ],
      },
    ],
    []
  )

  const isLight = activeTheme === "light" || isScrolled
  const linkColor = isLight ? "text-black" : "text-white"
  const linkHover = "hover:text-[#3BB9E1]"

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/" className="block w-32 h-auto" onClick={closeAll}>
              <Image
                src={isLight ? logoDark : logoWhite}
                alt="Logo"
                width={130}
                height={40}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 mx-auto items-center">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div key={link.name} className="relative flex items-center gap-1">
                    <Link
                      href={link.href}
                      onClick={() => setServicesOpenDesktop(false)}
                      className={`text-base font-medium transition-colors duration-200 ${linkColor} ${linkHover}`}
                    >
                      Services
                    </Link>

                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={servicesOpenDesktop}
                      onClick={() => setServicesOpenDesktop((v) => !v)}
                      className={`flex items-center ${linkColor} ${linkHover} transition-colors duration-200`}
                    >
                      <IoMdArrowDropdown
                        className={`transition-transform duration-300 ${
                          servicesOpenDesktop ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeAll}
                  className={`text-base font-medium transition-colors duration-200 ${linkColor} ${linkHover}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden md:block">
            <button
              className="buttonChange buttonChangeBlack bg-black text-white 2xl:w-[180px] md:px-11 h-[40px] md:h-12 border-transparent rounded-full font-extrabold text-sm mb-4"
              onClick={() => {
                openPopup()
                closeAll()
              }}
            >
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
            </button>
          </div>

          {/* Burger Icon (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Toggle menu"
              className={`focus:outline-none transition-colors duration-300 ${
                isLight ? "text-gray-800" : "text-white"
              }`}
              onClick={() => {
                setMenuOpen((v) => !v)
                setServicesOpenMobile(false)
              }}
            >
              <div className="space-y-1">
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${
                    menuOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Desktop Mega Dropdown ===== */}
      <div
        ref={megaRef}
        className={`hidden md:block fixed left-0 right-0 top-16 bg-white shadow-xl z-40 transition-all duration-200 origin-top ${
          servicesOpenDesktop ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {servicesData.map((section) => (
              <div key={section.category} className="flex flex-col gap-4">
                <p className="text-lg font-bold text-black">{section.category}</p>

                <div className="flex flex-col gap-3">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setServicesOpenDesktop(false)}
                        className="group flex items-center gap-3 text-base text-gray-700 hover:text-[#3BB9E1]"
                      >
                        <span className="text-gray-500 group-hover:text-[#3BB9E1]">
                          <Icon size={16} />
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-end">
            <Link
              href="/services"
              onClick={() => setServicesOpenDesktop(false)}
              className="text-sm font-semibold text-black hover:text-[#3BB9E1]"
            >
              View all services →
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Mobile Menu (Responsive) ===== */}
      <div
        className={`md:hidden fixed left-0 right-0 top-16 bottom-0 bg-white z-40 transition-all duration-200 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div key={link.name} className="w-full">
                    <button
                      type="button"
                      aria-expanded={servicesOpenMobile}
                      onClick={() => setServicesOpenMobile((v) => !v)}
                      className="w-full flex items-center justify-between text-black text-lg font-semibold"
                    >
                      <span>Services</span>
                      <IoMdArrowDropdown
                        className={`transition-transform duration-300 ${
                          servicesOpenMobile ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpenMobile ? "max-h-[1200px] mt-4" : "max-h-0"
                      }`}
                    >
                      <div className="rounded-xl border border-gray-200 p-4">
                        <div className="flex flex-col gap-6">
                          {servicesData.map((section) => (
                            <div key={section.category} className="flex flex-col gap-3">
                              <p className="text-sm font-bold text-black">{section.category}</p>

                              <div className="flex flex-col gap-2 pl-1">
                                {section.items.map((item) => {
                                  const Icon = item.icon
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={closeAll}
                                      className="group flex items-center gap-3 text-sm text-gray-700 hover:text-[#3BB9E1]"
                                    >
                                      <span className="text-gray-500 group-hover:text-[#3BB9E1]">
                                        <Icon size={14} />
                                      </span>
                                      <span>{item.name}</span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/services"
                          onClick={closeAll}
                          className="mt-4 inline-block text-sm font-semibold text-black hover:text-[#3BB9E1]"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeAll}
                  className="text-black text-lg font-semibold"
                >
                  {link.name}
                </Link>
              )
            })}

            <button
              className="buttonChange buttonChangeBlack bg-black text-white w-[180px] h-[45px] border-transparent rounded-full font-extrabold text-sm mt-4"
              onClick={() => {
                openPopup()
                closeAll()
              }}
            >
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
              <span className="pb-[3px] md:pb-1.5">Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

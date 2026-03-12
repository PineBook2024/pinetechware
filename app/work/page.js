'use client'

import { useMemo, useState } from "react";
import Image from "next/image";
import React from "react";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Sidepopup from "@/components/Sidepopup/Sidepopup";
import { usePopup } from "@/context/PopupContext";
import SeoHead from "@/components/SeoHead";
import Trigger from "@/components/Trigger/Trigger";


import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/video.css";

function PortfolioStackCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[320px] mx-auto h-[270px] sm:h-[300px] cursor-pointer"
      onClick={onClick}
    >
      {/* Left */}
      <div
        className="
          absolute left-0 top-1/2 z-10 w-[78%] -translate-y-1/2
          translate-x-6 rotate-[-7deg]
          transition-all duration-500 ease-out
          group-hover:-translate-x-2 group-hover:rotate-[-12deg]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-black/5">
          <Image
            src={item.images[0]}
            alt={`${item.title} preview 1`}
            width={500}
            height={700}
            className="h-[210px] sm:h-[235px] w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Right */}
      <div
        className="
          absolute right-0 top-1/2 z-10 w-[78%] -translate-y-1/2
          -translate-x-6 rotate-[7deg]
          transition-all duration-500 ease-out
          group-hover:translate-x-2 group-hover:rotate-[12deg]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_35px_rgba(0,0,0,0.14)] border border-black/5">
          <Image
            src={item.images[2]}
            alt={`${item.title} preview 3`}
            width={500}
            height={700}
            className="h-[210px] sm:h-[235px] w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Center */}
      <div
        className="
          absolute left-1/2 top-1/2 z-20 w-[82%] -translate-x-1/2 -translate-y-1/2
          transition-all duration-500 ease-out
          group-hover:-translate-y-[54%]
        "
      >
        <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_20px_45px_rgba(0,0,0,0.18)] border border-black/5">
          <Image
            src={item.images[1]}
            alt={`${item.title} preview 2`}
            width={500}
            height={700}
            className="h-[240px] sm:h-[265px] w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

function PortfolioSingleCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[360px] mx-auto aspect-[1/1] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-3xl bg-white shadow-md opacity-40 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-3xl bg-white shadow-lg opacity-70 -translate-x-2 -translate-y-2" />

      <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/5">
        <Image
          src={item.image}
          alt={item.title}
          width={700}
          height={700}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function PortfolioVideoCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full max-w-[360px] mx-auto aspect-[1/1] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-3xl bg-white shadow-md opacity-40 translate-x-4 translate-y-4" />
      <div className="absolute inset-0 rounded-3xl bg-white shadow-lg opacity-70 -translate-x-2 -translate-y-2" />

      <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/5">
        <Image
          src={item.poster}
          alt={item.title}
          width={700}
          height={700}
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 shadow-lg flex items-center justify-center">
            <span className="ml-1 text-black text-2xl">▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { openPopup } = usePopup();

  const serviceTabs = [
    "Web",
    "Logo",
    "Branding",
    "Video",
    "Mobile App",
  ];

  const webCategories = [
    "All",
    "Financial Services",
    "Ecommerce",
    "Informative",
    "Real Estate",
    "Restaurants",
    "Loan & Mortgage Services",
    "Healthcare",
    "Contractors",
    "Wellness",
    "Law Firms",
  ];

  const logoCategories = [
    "All",  
    "Animals And Pets",
    "Beauty And Cosmetics",
    "Business And Marketing",
    "Cannabis",
    "Cleaning",
    "Clothing And Apparel",
    "Dentist",
    "Education",
    "Entertainment And Events-Music",
    "Fitness And Gym",
    "Home Real Estate And Renovation",
  ];

  const portfolioItems = [


    // WE
    // B
{
      title: "Cbeaux",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-1-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-1-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-1-2.jpg",
      ],
      link: "https://www.tremark.co.uk/",
    },
{
      title: "Okhtein",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-4-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-4-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-4-2.jpg",
      ],
      link: "https://int.okhtein.com/",
    },
{
      title: "Miashoes",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-2-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-2-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-2-2.jpg",
      ],
      link: "https://www.miashoes.com/",
    },
{
      title: "Renuherbs",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-5-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-5-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-5-2.jpg",
      ],
      link: "https://www.renuherbs.com/",
    },
{
      title: "Saltyk Swim",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-7-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-7-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-7-2.jpg",
      ],
      link: "https://saltykswim.com/",
    },
{
      title: "Factor Group",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/factorg1.png",
        "https://code7labs.com/images/portfolio/web/informative/factorg2.png",
        "https://code7labs.com/images/portfolio/web/informative/factorg1.png",
      ],
      link: "https://www.factorgroup.com/",
    },

    {
      title: "Mita Eyewear",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-3-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-3-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-3-2.jpg",
      ],
      link: "https://mita-eyewear.com/",
    },

    {
      title: "Rosa Express",
      service: "Web",
      category: "Ecommerce",
      images: [
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-6-3.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-6-1.jpg",
        "https://code7labs.com/images/portfolio/web/ecommerce/pack-6-2.jpg",
      ],
      link: "https://rosaexpress.com/",
    },

    {
      title: "tremark",
      service: "Web",
      category: "Law Firms",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/tremark2.png",
        "https://code7labs.com/images/portfolio/web/informative/tremark1.png",
        "https://code7labs.com/images/portfolio/web/informative/tremark3.png",
      ],
      link: "https://www.tremark.co.uk/",
    },

    {
      title: "lee-associates",
      service: "Web",
      category: "Law Firms",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/lee2.png",
        "https://code7labs.com/images/portfolio/web/informative/lee1.png",
        "https://code7labs.com/images/portfolio/web/informative/lee3.png",
      ],
      link: "https://www.lee-associates.com/",
    },

    {
      title: "caltaxadviser",
      service: "Web",
      category: "Law Firms",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/taxl2.png",
        "https://code7labs.com/images/portfolio/web/informative/taxl1.png",
        "https://code7labs.com/images/portfolio/web/informative/taxl3.png",
      ],
      link: "https://www.caltaxadviser.com/",
    },
    {
      title: "millercanfield",
      service: "Web",
      category: "Law Firms",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/millercanfield-2.png",
        "https://code7labs.com/images/portfolio/web/informative/millercanfield-1.png",
        "https://code7labs.com/images/portfolio/web/informative/millercanfield-3  .png",
      ],
      link: "https://www.millercanfield.com/",
    },
    {
      title: "gibsondunn",
      service: "Web",
      category: "Law Firms",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/gibsondunn-2.png",
        "https://code7labs.com/images/portfolio/web/informative/gibsondunn-1.png",
        "https://code7labs.com/images/portfolio/web/informative/gibsondunn-3.png",
      ],
      link: "https://www.gibsondunn.com/",
    },


    {
      title: "cuisineculture",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pack-1-3.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-1-1.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-1-2.jpg",
      ],
      link: "http://cuisineculture.tv/",
    },

    {
      title: "morseys",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pack-8-3.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-8-1.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-8-2.jpg",
      ],
      link: "http://morseys.com/",
    },

    {
      title: "gemmadiluna",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pack-5-3.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-5-1.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-5-2.jpg",
      ],
      link: "https://gemmadiluna.com/",
    },

    {
      title: "Lajolla Group",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/ljcg1.png",
        "https://code7labs.com/images/portfolio/web/informative/pack-9-2.jpg",
        "https://code7labs.com/images/portfolio/web/informative/ljcg3.png",
      ],
      link: "https://ljcg.com/",
    },

    {
      title: "enovationbrands",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pack-2-3.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-2-1.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-2-2.jpg",
      ],
      link: "https://www.enovationbrands.com/",
    },

    {
      title: "cchomes",
      service: "Web",
      category: "Informative",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pack-4-3.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-4-1.jpg",
        "https://code7labs.com/images/portfolio/web/informative/pack-4-2.jpg",
      ],
      link: "https://www.cchomes.com/",
    },


    {
      title: "Cmorseys",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/morsey2.png",
        "https://code7labs.com/images/portfolio/web/informative/morsey1.png",
        "https://code7labs.com/images/portfolio/web/informative/morsey3.png",
      ],
      link: "http://morseys.com/",
    },
    {
      title: "Boulevard Cafe",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/boulevardcafe2.png",
        "https://code7labs.com/images/portfolio/web/informative/boulevardcafe1.png",
        "https://code7labs.com/images/portfolio/web/informative/boulevardcafe3.png",
      ],
      link: "https://theboulevardcafe.com",
    },



    {
      title: "nativefoods",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/native2.png",
        "https://code7labs.com/images/portfolio/web/informative/native1.png",
        "https://code7labs.com/images/portfolio/web/informative/native3.png",
      ],
      link: "https://nativefoods.com/",
    },

    {
      title: "veggiegrill",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/veggi2.png",
        "https://code7labs.com/images/portfolio/web/informative/veggi1.png",
        "https://code7labs.com/images/portfolio/web/informative/veggi3.png",
      ],
      link: "https://www.veggiegrill.com/",
    },

    {
      title: "veggiegrill",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/vega2.png",
        "https://code7labs.com/images/portfolio/web/informative/vega1.png",
        "https://code7labs.com/images/portfolio/web/informative/vega3.png",
      ],
      link: "https://www.veganjunkfoodbar.com/",
    },

    {
      title: "eatfarewell",
      service: "Web",
      category: "Restaurants",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/fare2.png",
        "https://code7labs.com/images/portfolio/web/informative/fare1.png",
        "https://code7labs.com/images/portfolio/web/informative/fare3.png",
      ],
      link: "https://www.eatfarewell.com/",
    },

    {
      title: "Choice Landing Corp",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/clg2.png",
        "https://code7labs.com/images/portfolio/web/informative/clg1.png",
        "https://code7labs.com/images/portfolio/web/informative/clg3.png",
      ],
      link: "https://clg1.net/",
    },

    {
      title: "newbridgewealth",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/bridge1.png",
        "https://code7labs.com/images/portfolio/web/informative/bridge2.png",
        "https://code7labs.com/images/portfolio/web/informative/bridge3.png",
      ],
      link: "https://www.newbridgewealth.com/",
    },


    {
      title: "Lajolla Group",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/ljcg2.png",
        "https://code7labs.com/images/portfolio/web/informative/ljcg1.png",
        "https://code7labs.com/images/portfolio/web/informative/ljcg3.png",
      ],
      link: "https://ljcg.com/",
    },

    {
      title: "amminvest",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/diego2.png",
        "https://code7labs.com/images/portfolio/web/informative/diego1.png",
        "https://code7labs.com/images/portfolio/web/informative/diego3.png",
      ],
      link: "https://www.amminvest.com/",
    },

    {
      title: "pungroup",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/cpa2.png",
        "https://code7labs.com/images/portfolio/web/informative/cpa1.png",
        "https://code7labs.com/images/portfolio/web/informative/cpa3.png",
      ],
      link: "https://pungroup.cpa/",
    },



    {
      title: "Define Financial",
      service: "Web",
      category: "Financial Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/define1.png",
        "https://code7labs.com/images/portfolio/web/informative/define2.png",
        "https://code7labs.com/images/portfolio/web/informative/define3.png",
      ],
      link: "https://pungroup.cpa/",
    },

    {
      title: "CC Homes",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/cchome-2.png",
        "https://code7labs.com/images/portfolio/web/informative/cchome-1.png",
        "https://code7labs.com/images/portfolio/web/informative/cchome-3.png",
      ],
      link: "https://cchomes.com",
    },
    {
      title: "canarias downtown",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/cadiz2.png",
        "https://code7labs.com/images/portfolio/web/informative/cadiz1.png",
        "https://code7labs.com/images/portfolio/web/informative/cadiz2.png",
      ],
      link: "https://canariasdowntowndoral.com/miami-homes-for-sale/cadiz/",
    },

    {
      title: "homerealestate",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/homerealestate-2.png",
        "https://code7labs.com/images/portfolio/web/informative/homerealestate-1.png",
        "https://code7labs.com/images/portfolio/web/informative/homerealestate-3.png",
      ],
      link: "https://www.homerealestate.com/miami-homes-for-sale/cadiz/",
    },
    {
      title: "homelight",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/homelight-2.png",
        "https://code7labs.com/images/portfolio/web/informative/homelight-1.png",
        "https://code7labs.com/images/portfolio/web/informative/homelight-3.png",
      ],
      link: "https://www.homelight.com/",
    },

    {
      title: "Long & Foster",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/foster2.png",
        "https://code7labs.com/images/portfolio/web/informative/foster1.png",
        "https://code7labs.com/images/portfolio/web/informative/foster3.png",
      ],
      link: "https://www.longandfoster.com/miami-homes-for-sale/cadiz/",
    },

    {
      title: "Long & Foster",
      service: "Web",
      category: "Real Estate",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/street2.png",
        "https://code7labs.com/images/portfolio/web/informative/street1.png",
        "https://code7labs.com/images/portfolio/web/informative/street3.png",
      ],
      link: "https://www.longandfoster.com/miami-homes-for-sale/cadiz/",
    },


    {
      title: "Physician One",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/vohra2.png",
        "https://code7labs.com/images/portfolio/web/informative/vohra1.png",
        "https://code7labs.com/images/portfolio/web/informative/vohra3.png",
      ],
      link: "https://physicianoneurgentcare.com",
    },

    {
      title: "vohrawoundcare",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/oak2.png",
        "https://code7labs.com/images/portfolio/web/informative/oak1.png",
        "https://code7labs.com/images/portfolio/web/informative/oak3.png",
      ],
      link: "https://vohrawoundcare.com/",
    },


    {
      title: "Physician One",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/sleepmed2.png",
        "https://code7labs.com/images/portfolio/web/informative/sleepmed1.png",
        "https://code7labs.com/images/portfolio/web/informative/sleepmed3.png",
      ],
      link: "https://physicianoneurgentcare.com",
    },

    {
      title: "Physician One",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/physician2.png",
        "https://code7labs.com/images/portfolio/web/informative/physician1.png",
        "https://code7labs.com/images/portfolio/web/informative/physician3.png",
      ],
      link: "https://physicianoneurgentcare.com",
    },

    {
      title: "panamclinic",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pan2.png",
        "https://code7labs.com/images/portfolio/web/informative/pan1.png",
        "https://code7labs.com/images/portfolio/web/informative/pan3.png",
      ],
      link: "https://www.panamclinic.org/",
    },

    {
      title: "mahogany medical clinic",
      service: "Web",
      category: "Healthcare",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/mahogany2.png",
        "https://code7labs.com/images/portfolio/web/informative/mahogany1.png",
        "https://code7labs.com/images/portfolio/web/informative/mahogany3.png",
      ],
      link: "https://www.mahoganymedicalclinic.ca/",
    },

    {

      title: "citywide homeloans ",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/citywidehomeloans-3.png",
        "https://code7labs.com/images/portfolio/web/informative/citywidehomeloans-1.png",
        "https://code7labs.com/images/portfolio/web/informative/citywidehomeloans-2.png",
      ],
      link: "https://www.citywidehomeloans.com/",
    },

    {

      title: "Mortgage Plus",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/astfinancial-3.png",
        "https://code7labs.com/images/portfolio/web/informative/astfinancial-3.png",
        "https://code7labs.com/images/portfolio/web/informative/astfinancial-3.png",
      ],
      link: "https://mortgage-plus.example.com",
    },

    {

      title: "sunsethome mortgage",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/sunset2.png",
        "https://code7labs.com/images/portfolio/web/informative/sunset1.png",
        "https://code7labs.com/images/portfolio/web/informative/sunset3.png",
      ],
      link: "https://sunsethomemortgage.com/",
    },

    {

      title: "atlantic coast mortgage",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [

        "https://code7labs.com/images/portfolio/web/informative/atlanticcoastmortgage-2.png",
        "https://code7labs.com/images/portfolio/web/informative/atlanticcoastmortgage-1.png",
        "https://code7labs.com/images/portfolio/web/informative/atlanticcoastmortgage-3.png",
      ],
      link: "https://www.atlanticcoastmortgage.com/",
    },

    {

      title: "churchill mortgage",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [

        "https://code7labs.com/images/portfolio/web/informative/churchillmortgage-2.png",
        "https://code7labs.com/images/portfolio/web/informative/churchillmortgage-1.png",
        "https://code7labs.com/images/portfolio/web/informative/churchillmortgage-3.png",
      ],
      link: "https://www.churchillmortgage.com/",
    },

    {

      title: "kenna insurance",
      service: "Web",
      category: "Loan & Mortgage Services",
      images: [

        "https://code7labs.com/images/portfolio/web/informative/kenna2.png",
        "https://code7labs.com/images/portfolio/web/informative/kenna1.png",
        "https://code7labs.com/images/portfolio/web/informative/kenna3.png",
      ],
      link: "https://mckennainsurance.com/",
    },
    {


      title: "miami invest realty",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/miami2.png",
        "https://code7labs.com/images/portfolio/web/informative/miami1.png",
        "https://code7labs.com/images/portfolio/web/informative/miami3.png",
      ],
      link: "https://miamiinvestrealty.com/",
    },

    {


      title: "murfey company",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/murfey2.png",
        "https://code7labs.com/images/portfolio/web/informative/murfey1.png",
        "https://code7labs.com/images/portfolio/web/informative/murfey3.png",
      ],
      link: "https://murfeycompany.com/",
    },

    {


      title: "factor group",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/factor2.png",
        "https://code7labs.com/images/portfolio/web/informative/factor1.png",
        "https://code7labs.com/images/portfolio/web/informative/factor3.png",
      ],
      link: "https://www.factorgroup.com/",
    },
    {


      title: "pacific ucwc",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/pacific2.png",
        "https://code7labs.com/images/portfolio/web/informative/pacific1.png",
        "https://code7labs.com/images/portfolio/web/informative/pacific3.png",
      ],
      link: "https://pacificucwc.com/",
    },

    {


      title: "heart bones yoga",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/heartandbones2.png",
        "https://code7labs.com/images/portfolio/web/informative/heartandbones1.png",
        "https://code7labs.com/images/portfolio/web/informative/heartandbones3.png",
      ],
      link: "https://www.heartandbonesyoga.com/",
    },

    {


      title: "embody wellness",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/embody2.png",
        "https://code7labs.com/images/portfolio/web/informative/embody1.png",
        "https://code7labs.com/images/portfolio/web/informative/embody3.png",
      ],
      link: "https://embodywellness.co.uk/",
    },

    {


      title: "sonic boom wellness",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/sonicboomwellness-2.png",
        "https://code7labs.com/images/portfolio/web/informative/sonicboomwellness-1.png",
        "https://code7labs.com/images/portfolio/web/informative/sonicboomwellness-3.png",
      ],
      link: "https://www.sonicboomwellness.com/",
    },

    {


      title: "Veertical Wellness",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/vertical-wellness-2.png",
        "https://code7labs.com/images/portfolio/web/informative/vertical-wellness-1.png",
        "https://code7labs.com/images/portfolio/web/informative/vertical-wellness-3.png",
      ],
      link: "https://www.sonicboomwellness.com/",
    },

    {


      title: "Face Beauty Science",
      service: "Web",
      category: "Wellness",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/facebeautyscience-2.png",
        "https://code7labs.com/images/portfolio/web/informative/facebeautyscience-1.png",
        "https://code7labs.com/images/portfolio/web/informative/facebeautyscience-3.png",
      ],
      link: "https://www.facebeautyscience.com/",
    },


    {


      title: "workright",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/wrk-rit2.png",
        "https://code7labs.com/images/portfolio/web/informative/wrk-rit1.png",
        "https://code7labs.com/images/portfolio/web/informative/wrk-rit3.png",
      ],
      link: "https://workright.net/",
    },

    {


      title: "peace crowell",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/peace-crowell2.png",
        "https://code7labs.com/images/portfolio/web/informative/peace-crowell1.png",
        "https://code7labs.com/images/portfolio/web/informative/peace-crowell3.png",
      ],
      link: "https://peacecrowell.com/",
    },

    {


      title: "donaldson",
      service: "Web",
      category: "Contractors",
      images: [
        "https://code7labs.com/images/portfolio/web/informative/donaldson-2.png",
        "https://code7labs.com/images/portfolio/web/informative/donaldson-1.png",
        "https://code7labs.com/images/portfolio/web/informative/donaldson-3.png",
      ],
      link: "https://www.donaldson.com/en-us/",
    },
    // LOGO
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/1.png",
    },

    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/1-2.jpg",
    },

    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/2-2.jpg",
    },
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/3-2.jpg",
    },
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/4-2.jpg",
    },
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/5-2.jpg",
    },
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/6-2.jpg",
    },
    {
      title: "Right Hand Consulting",
      service: "Logo",
      category: "Animals And Pets",
      image: "https://code7labs.com/images/portfolio/animals-%26-pets/7-2.jpg",
    },
    {
      title: "Pacifica Consulting",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/2.jpg",
    },
    {
      title: "San & San Consultant",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/3.jpg",
    },
    {
      title: "Fifth Element",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/4.jpg",
    },
    {
      title: "A&R Insurance",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/6.jpg",
    },
    {
      title: "Mitosky Communications",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/7.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Business And Marketing",
      image: "https://code7labs.com/images/portfolio/business-&-marketing/8.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/1.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/2.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/3.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/4.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/5.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Entertainment And Events-Music",
      image: "https://code7labs.com/images/portfolio/entertainment-&-events-music/6.jpg",
    },

    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/1.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/2.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/3.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/4.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/5.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Fitness And Gym",
      image: "https://code7labs.com/images/portfolio/fitness-&-gym/6.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/1.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/2.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/3.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/4.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/5.jpg",
    },
    {
      title: "Algoritmo",
      service: "Logo",
      category: "Home Real Estate And Renovation",
      image: "https://code7labs.com/images/portfolio/home-real-estate-&-renovation/6.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/1.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/2.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/3.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/4.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/5.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/6.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/7.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/8.jpg",
    },
    {
      title: "BitAFS",
      service: "Logo",
      category: "Cannabis",
      image: "https://code7labs.com/images/portfolio/cannabis/9.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/1.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/2.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/3.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/4.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/5.jpg",
    },
    {
      title: "Karshel",
      service: "Logo",
      category: "Cleaning",
      image: "https://code7labs.com/images/portfolio/cleaning/6.jpg",
    },

    {

      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/1.jpg",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/2.jpg",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/3.jpg",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/4.jpg",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/5.jpg",
    },
    {
      title: "Lexus Med Spa",
      service: "Logo",
      category: "Beauty And Cosmetics",
      image: "https://code7labs.com/images/portfolio/beauty-&-cosmetics/6.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/1.jpg",
    },

    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/2.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/3.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/4.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/5.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Education",
      image: "https://code7labs.com/images/portfolio/education/6.jpg",
    },

    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/1.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/2.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/3.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/4.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/5.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Clothing And Apparel",
      image: "https://code7labs.com/images/portfolio/clothing-&-apparel/6.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Dentist",
      image: "https://code7labs.com/images/portfolio/dentist/1.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Dentist",
      image: "https://code7labs.com/images/portfolio/dentist/2.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Dentist",
      image: "https://code7labs.com/images/portfolio/dentist/3.jpg",
    },
    {
      title: "Talent Management",
      service: "Logo",
      category: "Dentist",
      image: "https://code7labs.com/images/portfolio/dentist/4.jpg",
    },



    // BRANDING
    {
      title: "Erö Brand Kit",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-1.png",
    },
    {
      title: "High Life Packaging",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-2.png",
    },
    {
      title: "Geometric Identity",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-3.png",
    },
    {
      title: "Planable Brand Assets",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-4.png",
    },
    {
      title: "Minimal Box Design",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-5.png",
    },
    {
      title: "Black Angus Packaging",
      service: "Branding",
      image: "https://code7labs.com/images/portfolio/branding/thumnail/t-6.png",
    },

    // 2D/3D ILLUSTRATION
    // {
    //   title: "Character Concept",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-1.webp",
    // },
    // {
    //   title: "Product Render",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-2.webp",
    // },
    // {
    //   title: "Creative Scene",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-3.webp",
    // },
    // {
    //   title: "Architectural Visual",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-4.webp",
    // },
    // {
    //   title: "Product Modeling",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-5.webp",
    // },
    // {
    //   title: "Environment Art",
    //   service: "2D/3D Illustration",
    //   image: "/images/Portfolio/Illustration/illustration-6.webp",
    // },

    // VIDEO
    {
      title: "Restaurant Promo",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-1.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/1.mp4",
    },
    {
      title: "Brand Campaign Reel",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-2.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/2.mp4",
    },
    {
      title: "Healthcare Ad",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-3.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/3.mp4",
    },
    {
      title: "Real Estate Showcase",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-4.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/4.mp4",
    },
    {
      title: "Social Media Reel",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-5.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/5.mp4",
    },
    {
      title: "Corporate Intro",
      service: "Video",
      poster: "https://code7labs.com/images/portfolio/video-animation/thumnail/t-6.png",
      videoSrc: "https://code7labs.com/images/portfolio/video-animation/inner/6.mp4",
    },

    // MOBILE APP
    {
      title: "Finance App",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-1.png",
    },
    {
      title: "Health Tracker",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-2.png",
    },
    {
      title: "Shop Smart",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-3.png",
    },
    {
      title: "Home Connect",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-4.png",
    },
    {
      title: "Travel Planner",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-5.png",
    },
    {
      title: "Food Delivery UI",
      service: "Mobile App",
      image: "https://code7labs.com/images/portfolio/app-design-development/thumnail/t-6.png",
    },
  ];

  const [activeService, setActiveService] = useState("Web");
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const showSidebar = activeService === "Web" || activeService === "Logo";

  const currentCategories = useMemo(() => {
    if (activeService === "Web") return webCategories;
    if (activeService === "Logo") return logoCategories;
    return [];
  }, [activeService]);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const serviceMatch = item.service === activeService;

      if (!showSidebar) return serviceMatch;

      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      return serviceMatch && categoryMatch;
    });
  }, [activeService, activeCategory, showSidebar]);

  const gallerySlides = useMemo(() => {
    return filteredItems.flatMap((item) => {
      if (item.service === "Video") {
        return [
          {
            type: "video",
            width: 1280,
            height: 720,
            poster: item.poster,
            sources: [
              {
                src: item.videoSrc,
                type: "video/mp4",
              },
            ],
          },
        ];
      }

      if (item.service === "Web" && item.images?.length) {
        return item.images.map((img) => ({
          src: img,
          alt: item.title,
          width: 1400,
          height: 1800,
        }));
      }

      return [
        {
          src: item.image,
          alt: item.title,
          width: 1400,
          height: 1400,
        },
      ];
    });
  }, [filteredItems]);

  const getSlideIndex = (clickedItemIndex) => {
    let count = 0;

    for (let i = 0; i < clickedItemIndex; i++) {
      if (filteredItems[i].service === "Web" && filteredItems[i].images?.length) {
        count += filteredItems[i].images.length;
      } else {
        count += 1;
      }
    }

    return count;
  };

  const handleTabChange = (tab) => {
    setActiveService(tab);
    setActiveCategory("All");
  };

  const openWebLink = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <SeoHead
        title="Our Work & Case Studies in Innovation | Pine Techware"
        description="Explore Pine Techware's portfolio across websites, logos, branding, illustration, video, and mobile applications."
      />

      <div data-theme="light">
        <Navbar />
      </div>

      <section className="bg-white">
        <div className="container xl:max-w-7xl mx-auto w-full px-6 pt-20 lg:pt-32 pb-16 lg:pb-32 lg:px-8">
          <div className="max-w-3xl xl:max-w-7xl mx-auto">
            <div className="lg:overflow-hidden">
              <h2 className="font-bold sentence-first-letter text-4xl xl:text-5xl 2xl:text-6xl text-black lg:-translate-y-[7px] xl:!leading-[55px] 2xl:!leading-[65px]">
                <span>
                  Happy Clients
                  <br />
                  of Pine Techware
                </span>
              </h2>
            </div>

            <p className="text-black/70 mt-6 max-w-3xl text-base xl:text-lg leading-7">
              Explore our portfolio across websites, logos, branding, illustration,
              video, and mobile applications.
            </p>

            {/* Tabs */}
            <div className="flex gap-4 flex-wrap pt-10 pb-8">
              {serviceTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 font-semibold rounded-full transition cursor-pointer ${activeService === tab
                      ? "bg-black text-white"
                      : "bg-white border border-black/15 text-black hover:bg-black hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              className={
                showSidebar
                  ? "grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-10 xl:gap-14"
                  : ""
              }
            >
              {/* Sidebar */}
              {showSidebar && (
                <aside className="lg:sticky lg:top-28 h-fit border border-black/10 rounded-3xl p-6 bg-white shadow-sm">
                  <h3 className="text-xl font-bold text-black mb-5">
                    Categories
                  </h3>

                  <div className="flex flex-col gap-3">
                    {currentCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`text-left rounded-2xl px-4 py-3 font-medium transition ${activeCategory === category
                            ? "bg-black text-white"
                            : "bg-[#f8f8f8] text-black hover:bg-black hover:text-white"
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </aside>
              )}

              {/* Content */}
              <div>
                <div
                  className={
                    activeService === "Web"
                      ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-14 md:gap-y-16 gap-x-8 xl:gap-x-10"
                      : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-8 xl:gap-x-10"
                  }
                >
                  {filteredItems.map((item, index) => (
                    <div key={`${item.title}-${index}`} className="group">
                      {item.service === "Web" ? (
                        <>
                          <PortfolioStackCard
                            item={item}
                            onClick={() => openWebLink(item.link)}
                          />

                          <div className="pt-5 px-1 text-center">
                            <div className="flex items-center justify-center gap-3 flex-wrap">
                              <h4 className="text-lg font-bold text-black">
                                {item.title}
                              </h4>
                              <span className="text-xs rounded-full border border-black/10 px-3 py-1 text-black/70 whitespace-nowrap">
                                {item.category}
                              </span>
                            </div>

                            <button
                              onClick={() => openWebLink(item.link)}
                              className="inline-block mt-3 text-sm font-semibold text-black hover:underline"
                            >
                              Visit Website
                            </button>
                          </div>
                        </>
                      ) : item.service === "Video" ? (
                        <>
                          <PortfolioVideoCard
                            item={item}
                            onClick={() => {
                              setLightboxIndex(getSlideIndex(index));
                              setLightboxOpen(true);
                            }}
                          />

                          <div className="pt-5 px-1 text-center">
                            <h4 className="text-lg font-bold text-black">
                              {item.title}
                            </h4>
                          </div>
                        </>
                      ) : (
                        <>
                          <PortfolioSingleCard
                            item={item}
                            onClick={() => {
                              setLightboxIndex(getSlideIndex(index));
                              setLightboxOpen(true);
                            }}
                          />

                          <div className="pt-5 px-1 text-center">
                            <h4 className="text-lg font-bold text-black">
                              {item.title}
                            </h4>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-black/20 p-10 text-center text-black/60">
                    No portfolio items found for this selection.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={gallerySlides}
        plugins={[Video]}
      />

      <Trigger
        title="Ready to turn your ideas into impactful digital experiences?"
        description="Create Without Limits!"
        buttonText="Start Your Project"
      />

      <Sidepopup />
      <Footer />
    </div>
  );
}

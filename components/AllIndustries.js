"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const AllIndustries = ({ heading, items }) => {
  return (
    <div className="bg-white">
      <section className="px-6 lg:px-8 pt-14 md:py-24 lg:py-[10.5rem] max-w-7xl mx-auto">
        <div className="2xl:max-w-4xl lg:max-w-3xl lg:pb-24 pb-12">
          <h2 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl tracking-[-2px] text-black uppercase">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={index}
              className="group sm:p-10 p-6 rounded-2xl border hover:border-[#3bb9e1] hover:shadow-[0_0_0_3px_#3bb9e1] duration-300 relative"
            >
              <div className="flex flex-col justify-between gap-12 h-full">
                <div className="space-y-8">
                  <div className="flex justify-between">
                    <Image src={item.image} alt={item.alt} />
                    <IoIosArrowRoundForward className="text-white text-5xl opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <h3 className="font-bold text-2xl xl:text-3xl text-black">
                    {item.title}
                  </h3>
                </div>

                <Link href={item.link} className="absolute inset-0" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllIndustries;

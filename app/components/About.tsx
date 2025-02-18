// app/components/About.tsx
import React from "react";
import Laptop from "../images/laptopmockup.webp";

export default function About() {
  return (
    <section id="read-more" className="w-full min-h-screen text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid: 1 column on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: "About" and "Magic88" */}
          <div className="text-center md:text-left">
            <h2 className=" text-xl md:text-lg font-montserrat font-extrabold uppercase tracking-wider">
              About
            </h2>
            <h2 className="text-4xl md:text-5xl font-montserrat font-extrabold uppercase text-[#C9FC01] leading-tight mt-2">
              Magic88
            </h2>
          </div>
          {/* Main text: spans 1 column on mobile, columns 2-4 on desktop */}
          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <p className="leading-relaxed font-inter text-gray-200">
              Magic88 is an online gaming platform offering a variety of casino
              games, including slot machines, live dealer games, sports betting,
              arcade games, lottery, and poker. The platform collaborates with
              renowned game providers such as Pragmatic Play, PG Soft, Habanero,
              CQ9, Spadegaming, TTG, Joker, Microgaming, and ION Casino to deliver
              a diverse gaming experience.
            </p>
            <p className="leading-relaxed text-gray-200 mt-4">
              We are dedicated to providing a secure, fair, and immersive gaming
              experience for all players. Whether you're a casual gamer or a
              seasoned high-roller, we have everything you need to take your
              gaming journey to the next level.
            </p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="mt-20">
          <img
            src={Laptop} 
            alt="Laptop Mockup"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

// app/components/Community.tsx
import React from "react";
import GreenButton from "./GreenButton";

export default function Community() {
  return (
    <section
      className="min-h-screen w-full bg-[#040414] bg-[url('/app/images/laptoponrock.png')] bg-no-repeat bg-bottom bg-[length:100%_auto] md:bg-cover md:bg-center text-white flex items-start md:items-center"
    >
      <div className="max-w-6xl mx-auto w-full px-4 pt-10 md:pt-0">
        {/* Mobile: single column; Desktop: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-start items-center md:items-start">
            {/* Headings */}
            <h3 className="font-montserrat text-4xl md:text-5xl font-extrabold uppercase leading-tight text-white md:text-left text-center">
              Join the Magic88
            </h3>
            <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold uppercase leading-tight text-[#C9FC01] mt-2 tmd:text-left text-center">
              Community Today!
            </h2>
            {/* Paragraph */}
            <p className="font-inter text-gray-200 mt-4 text-center md:text-left">
              Whether you’re a casual gamer looking for entertainment or a
              high-roller chasing big wins, Magic88 has everything you need for
              the ultimate online casino experience. Sign up today, claim your
              massive bonus, and start your winning journey!
            </p>
            {/* Claim Bonus Button */}
            <div className="mt-6">
              <GreenButton>Claim Bonus</GreenButton>
            </div>
          </div>
          {/* On desktop, this extra 2/3 column remains unchanged */}
          <div className="hidden md:block col-span-2"></div>
        </div>
      </div>
    </section>
  );
}

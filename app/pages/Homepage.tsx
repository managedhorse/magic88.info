// app/pages/Homepage.tsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GreenButton from "../components/GreenButton";
import WhiteButton from "../components/WhiteButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Explore from "../components/Explore";
import SeamlessGaming from "../components/SeamlessGaming";
import Community from "../components/Community";
import mainBg from "../images/mainbg.webp";
import Logo from "../images/logo.webp"
import Why from "../images/whychoose.webp"


export default function Homepage() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("read-more");
    if (el) {
      // Apply offset only if the viewport is less than 768px (mobile)
      const offset = window.innerWidth < 768 ? -0 : 0;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${mainBg})` }}>
        <Navbar />

        {/* Main Hero Content */}
        <div className="container mx-auto flex flex-col items-center justify-center text-center pt-20 md:pt-44 px-10">
        <h1 className="font-montserrat text-[32px] md:text-[64px] font-extrabold text-[#C9FC01] uppercase leading-tight">
  Welcome to Magic88!
</h1>
          <h2 className="font-montserrat text-[20px] md:text-[28px] font-extrabold uppercase mt-2">
            Your Ultimate Entertainment Hub
          </h2>
          <p className="font-montserrat max-w-3xl text-base md:text-lg text-gray-200 mt-6 leading-relaxed">
            Step into a world of excitement, entertainment, and boundless
            opportunities at Magic88 Online Casino! We are more than just an
            online gaming platform — we are a thrilling destination where
            fun meets fortune, and every spin, bet, and play could lead to
            incredible rewards.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
          <WhiteButton >
  <FaChevronUp className="mr-2" />
  Sign Up
</WhiteButton>
            <GreenButton onClick={() => alert("Bonus claimed!")}>
              Claim Bonus
            </GreenButton>
          </div>
        </div>

        {/* "Read More" pinned at bottom center */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <a
            href="#read-more"
            onClick={scrollToAbout}
            className="font-inter text-white hover:text-[#b8f900]"
          >
            Read More
            <div className="flex flex-col items-center mt-2">
              <FaChevronDown className="text-[#C9FC01] text-2xl" />
              <FaChevronDown className="text-[#C9FC01] text-2xl -mt-3" />
            </div>
          </a>
        </div>
      </div>
      <div>
      <div
  className="bg-no-repeat bg-top"
  style={{
    backgroundImage: `url(${Why})`,
    backgroundSize: "cover",
  }}
>
  <About />
  <WhyChoose />
  <Explore />
</div>
{/* SeamlessGaming section */}
<SeamlessGaming />
<Community />
      {/* Footer Section */}
      <Footer />
      </div>
    </>
  );
}

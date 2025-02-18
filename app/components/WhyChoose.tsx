// app/components/WhyChoose.tsx
import React from "react";
import Choose1 from "../images/choose1.svg";
import Choose2 from "../images/choose2.svg";
import Choose3 from "../images/choose3.svg";
import Choose4 from "../images/choose4.svg";
import Choose5 from "../images/choose5.svg";
import Choose6 from "../images/choose6.svg";

export default function WhyChoose() {
  return (
    <section className="w-full min-h-screen text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-center uppercase text-2xl md:text-lg font-bold font-montserrat">
          Why Choose
        </h2>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold uppercase text-[#C9FC01] leading-tight mt-1 font-montserrat">
          Magic88
        </h2>

        {/* 3-column responsive grid (6 items total) */}
        <div className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 auto-rows-fr items-stretch">
          
          {/* Card 1: Secure & Fair Gaming */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose1})`,
                    maskImage: `url(${Choose1})`,
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                Secure &amp; Fair Gaming
              </h3>
            </div>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Magic88 is fully licensed under the Curacao Gaming Authority, 
              ensuring a safe and fair gaming environment.
            </p>
          </div>

          {/* Card 2: Hassle-Free Transactions */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose2})`,
                    maskImage: `url(${Choose2})`,
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                Hassle-Free Transactions
              </h3>
            </div>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Enjoy quick deposits and withdrawals using cryptocurrency, e-wallets, 
              and bank transfers.
            </p>
          </div>

          {/* Card 3: 24/7 Customer Support */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose3})`,
                    maskImage: `url(${Choose3})`,
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                24/7 Customer Support
              </h3>
            </div>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Our dedicated support team is always available to help you via 
              chat, email, or phone.
            </p>
          </div>

          {/* Card 4: Bonuses & Promotions */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose4})`,
                    maskImage: `url(${Choose4})`,
                  
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                Bonuses &amp; Promotions
              </h3>
            </div>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Get access to exclusive welcome bonuses, VIP perks, and daily promotions.
            </p>
          </div>

          {/* Card 5: Multi-Platform Gaming */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose5})`,
                    maskImage: `url(${Choose5})`,
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                Multi-Platform Gaming
              </h3>
            </div>
            <p className="font-montserrat text-xl text-gray-300 leading-relaxed">
              Play on desktop, mobile, or tablet with a responsive interface 
              and smooth gameplay.
            </p>
          </div>

          {/* Card 6: Tournaments Leaderboards */}
          <div className="bg-[#191731] p-6 rounded-lg flex flex-col transition transform hover:-translate-y-1 hover:shadow-xl group">
            <div className="flex items-center gap-2 mb-2">
              <span 
                className="icon-gradient group-hover:animate-ripple flex-shrink-0"
                style={{
                    WebkitMaskImage: `url(${Choose6})`,
                    maskImage: `url(${Choose6})`,
                }}
              ></span>
              <h3 className="text-2xl font-bold font-montserrat uppercase text-[#C9FC01]">
                Tournaments Leaderboards
              </h3>
            </div>
            <p className="font-montserrat text-l text-gray-300 leading-relaxed">
              Join daily, weekly, and monthly competitions for a chance to win 
              big prizes, showcase your skills, and compete with the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

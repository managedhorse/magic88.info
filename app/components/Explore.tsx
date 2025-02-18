// app/components/Explore.tsx
import React, { useState } from "react";
import GreenButton from "./GreenButton";
import { motion, AnimatePresence } from "framer-motion";

// Updated card data with new image file names.
const ALL_CARDS = [
  {
    title: "Live Dealer Games",
    titleIcon: "/app/images/exp1.svg",
    description: "Enjoy real-time casino action with professional dealers.",
    cardImage: "/app/images/explore1.png",
  },
  {
    title: "Slot Machine",
    titleIcon: "/app/images/exp2.svg",
    description: "Featuring classic, video, and progressive jackpot slots.",
    cardImage: "/app/images/explore2.png",
  },
  {
    title: "Sports Betting",
    titleIcon: "/app/images/exp3.svg",
    description: "Bet on your favorite sports and live matches.",
    cardImage: "/app/images/explore3.png",
  },
  {
    title: "Hash Game",
    titleIcon: "/app/images/exp4.svg",
    description: "Engage in blockchain-based provably fair gaming.",
    cardImage: "/app/images/explore4.png",
  },
  // Additional cards revealed upon "View More Games"
  {
    title: "Virtual Racing",
    titleIcon: "/app/images/exp5.svg",
    description: "Experience fast-paced virtual horse and car races.",
    cardImage: "/app/images/explore5.png",
  },
  {
    title: "Poker",
    titleIcon: "/app/images/exp6.svg",
    description: "Join tournaments or casual tables with friends and pros.",
    cardImage: "/app/images/explore6.png",
  },
  {
    title: "Lottery",
    titleIcon: "/app/images/exp7.svg",
    description: "Test your luck with quick draws and big jackpots.",
    cardImage: "/app/images/explore7.png",
  },
  {
    title: "Arcade Games",
    titleIcon: "/app/images/exp8.svg",
    description: "Enjoy casual, skill-based arcade titles with fun twists.",
    cardImage: "/app/images/explore8.png",
  },
  {
    title: "Extra Games",
    titleIcon: "/app/images/exp9.svg",
    description: "Discover even more games with unique challenges.",
    cardImage: "/app/images/explore9.png",
  },
];

export default function Explore() {
  const [showMore, setShowMore] = useState(false);

  // Split the cards array into two groups.
  const initialCards = ALL_CARDS.slice(0, 4);
  const extraCards = ALL_CARDS.slice(4);

  return (
    <section id="explore" className="w-full py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Introductory Text */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left">
          {/* Left (1/4 on desktop, full width on mobile): Heading */}
          <div>
            <h2 className="font-bold uppercase text-[24px] leading-snug font-montserrat">
              A Wide Range of <br />
              <span className="text-[38px] text-[#C9FC01]">
                GAMES TO EXPLORE
              </span>
            </h2>
          </div>
          {/* Right (3/4 on desktop, full width on mobile): Paragraph */}
          <div className="md:col-span-3">
            <p className="leading-relaxed text-gray-200">
              At Magic88, we take pride in offering an extraordinary selection
              of thrilling games that cater to every kind of player, ensuring
              that there's always something exciting and rewarding for everyone.
              Whether you're a seasoned gambler or a casual player looking for fun,
              Magic88 delivers an unmatched gaming experience filled with endless
              opportunities to win big! Our platform boasts a vast and dynamic
              collection of games for table luck, strategy, and skill, creating an
              electrifying atmosphere that keeps players engaged.
            </p>
          </div>
        </div>

        {/* Initial Cards Container with Background Image */}
        <div
          className="max-w-6xl mx-auto px-0 mt-10"
          style={{
            backgroundImage: "url('/app/images/explore-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
            {initialCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-lg p-0 flex flex-col items-center text-center"
              >
                <img
                  src={card.cardImage}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-md mb-6"
                />
                <div
                  className="w-full flex items-center justify-center gap-2 border-2 md:border border-[#C9FC01] rounded-[15px] md:rounded-[10px] px-3 py-5 md:py-3 mb-6"
                >
                  <span
                    className="icon-green w-[28px] h-[28px] md:w-6 md:h-6"
                    style={{
                      WebkitMaskImage: `url('${card.titleIcon}')`,
                      maskImage: `url('${card.titleIcon}')`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  ></span>
                  <h3 className="uppercase text-xl md:text-base font-semibold font-montserrat text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="font-inter text-gray-200 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Cards Container with Solid Background - Animated Reveal */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto px-0 mt-10 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
                {extraCards.map((card, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg p-0 flex flex-col items-center text-center"
                  >
                    <img
                      src={card.cardImage}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-md mb-6"
                    />
                    <div
                      className="w-full flex items-center justify-center gap-2 border-2 md:border border-[#C9FC01] rounded-[15px] md:rounded-[10px] px-3 py-5 md:py-3 mb-6"
                    >
                      <span
                        className="icon-green w-[28px] h-[28px] md:w-6 md:h-6"
                        style={{
                          WebkitMaskImage: `url('${card.titleIcon}')`,
                          maskImage: `url('${card.titleIcon}')`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                        }}
                      ></span>
                      <h3 className="uppercase text-xl md:text-base font-semibold font-montserrat text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="font-inter text-gray-200 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* "View More Games" Button */}
        <div className="mt-16 text-center">
          <GreenButton onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "View More Games"}
          </GreenButton>
        </div>
      </div>
    </section>
  );
}

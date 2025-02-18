// app/components/SeamlessGaming.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Casino from "../images/88casinoicon.svg";


// Example slides data
const slidesData = [
  {
    text: "Smooth and fast-loading gameplay with high-quality graphics.",
    icon: Casino,
  },
  {
    text: "Optimized gaming for iOS and Android devices.",
    icon: Casino,
  },
  {
    text: "Instant access to your favorite games with a user-friendly interface.",
    icon: Casino,
  },
  {
    text: "Play seamlessly on desktop, mobile, or tablet—anytime, anywhere.",
    icon: Casino,
  },
  // Add more items if desired
];

export default function SeamlessGaming() {
  const settings = {
    cssEase: "ease-in-out",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // <= 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // <= 480px (mobile)
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
          dots: true // no extra padding; container will crop
          
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#040414] min-h-screen py-10 md:py-0 md:flex md:items-center md:min-h-screen">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="max-w-2xl mx-auto text-4xl md:text-5xl font-montserrat font-extrabold uppercase text-[#C9FC01] leading-tight">
          Seamless Gaming Anytime, Anywhere
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-gray-200 font-inter max-w-2xl mx-auto">
          Magic88 is designed for maximum convenience, allowing you to enjoy a 
          seamless gaming experience across desktop, mobile, and tablet. Whether 
          you’re at home or on the go, our platform provides:
        </p>

        {/* Carousel container with mobile-specific width and overflow-hidden */}
        <div className="relative mt-10 w-[80vw] md:w-full mx-auto overflow-clip">
          <Slider {...settings}>
            {slidesData.map((slide, i) => (
              <div key={i} className="px-7">
                <div
                  className="
                    border border-[#C9FC01] 
                    rounded-[10px] 
                    backdrop-blur-sm 
                    py-20 px-8 
                    my-4
                    flex flex-col 
                    items-center 
                    justify-center 
                    text-center 
                    shadow-[0_0_10px_0_rgba(201,252,1,0.4)]
                    h-[340px]
                  "
                >
                  {/* Icon */}
                  <img
                    src={slide.icon}
                    alt="88casinoicon"
                    className="w-12 h-12 mb-20"
                  />
                  {/* Text */}
                  <p className="font-inter text-sm text-gray-200 leading-relaxed">
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Gradient Overlays: hidden on mobile */}
          <div
            className="hidden md:block absolute inset-y-0 left-0 w-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #040414 0%, #040414 30%, transparent 100%)",
            }}
          ></div>
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-32 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #040414 0%, #040414 30%, transparent 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

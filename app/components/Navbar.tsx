import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../images/logo.webp";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to smoothly scroll to the element with id "explore"
  const scrollToExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("explore");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full pt-4 md:pt-20 pb-8 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center justify-center gap-6 text-white">
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Hash Game
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Live Casino
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Slots
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              <img
                src={logo}
                alt="Magic88 Logo"
                className="h-10 object-contain"
              />
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Crypto Game
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Sports
            </a>
          </li>
          <li>
            <a
              href="#explore"
              onClick={scrollToExplore}
              className="hover:opacity-80"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Header (Logo on left, Hamburger on right) */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo on the left */}
          <a href="#explore" onClick={scrollToExplore}>
            <img
              src={logo}
              alt="Magic88 Logo"
              className="h-10 object-contain"
            />
          </a>
          {/* Hamburger Menu on the right */}
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-[#C9FC01]"></span>
              <span className="block w-8 h-0.5 bg-[#C9FC01]"></span>
              <span className="block w-8 h-0.5 bg-[#C9FC01]"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-menu"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="md:hidden absolute top-full left-0 w-full bg-[#0D0F20] overflow-hidden"
    >
      <ul className="flex flex-col items-center gap-4 py-4 text-white">
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Hash Game
          </a>
        </li>
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Live Casino
          </a>
        </li>
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Slots
          </a>
        </li>
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Crypto Game
          </a>
        </li>
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Sports
          </a>
        </li>
        <li>
          <a href="#explore" onClick={scrollToExplore}>
            Contact
          </a>
        </li>
        {/* Logo at the bottom of the mobile menu */}
        <li className="mt-4">
          <a href="#explore" onClick={scrollToExplore}>
            <img
              src={logo}
              alt="Magic88 Logo"
              className="h-10 object-contain"
            />
          </a>
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}
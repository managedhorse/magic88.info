// app/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../images/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-[#0D0F20] text-gray-300 pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: Logo and Social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Magic88 Logo"
            className="h-10 object-contain mx-auto md:mx-0 mb-4 md:mb-0"
          />

          {/* Social icons */}
          <div className="flex items-center gap-4 text-[#C9FC01]">
            <Link to="/telegram" className="hover:opacity-80">
              <FaTelegram className="text-2xl" />
            </Link>
            <Link to="/twitter" className="hover:opacity-80">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link to="/discord" className="hover:opacity-80">
              <FaDiscord className="text-2xl" />
            </Link>
            <Link to="/facebook" className="hover:opacity-80">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link to="/instagram" className="hover:opacity-80">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Middle row */}
        <div className="mt-8">
          {/* Desktop version: 4 columns total */}
          <div className="hidden md:grid grid-cols-4 gap-8">
            {/* Column 1 & 2 combined: Page (with two-column links) */}
            <div className="col-span-2">
              <h3 className="text-white font-semibold mb-1">Page</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-1 leading-6">
                  <li>Curacao License</li>
                  <li>Crypto Betting &amp; Tips</li>
                  <li>Hash Games &amp; Benefits</li>
                  <li>Table Games &amp; Tips</li>
                  <li>Slot Games &amp; Tips</li>
                </ul>
                <ul className="space-y-1 leading-6">
                  <li>Promotion</li>
                  <li>How to Deposit &amp; Withdraw</li>
                  <li>Live Casino &amp; Betting Tips</li>
                  <li>Sports Live Streaming</li>
                  <li>Betting Tips</li>
                </ul>
              </div>
            </div>

            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-white font-semibold mb-1">Social Media</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <ul className="space-y-1 leading-6">
                <li>Telegram</li>
                <li>Twitter</li>
                <li>Discord</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>

            {/* Column 4: Supports */}
            <div>
              <h3 className="text-white font-semibold mb-1">Supports</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <ul className="space-y-1 leading-6">
                <li>Help &amp; Supports</li>
                <li>Magic88 Profile</li>
                <li>Customer Service</li>
              </ul>
            </div>
          </div>

          {/* Mobile version: all Page items in one column, then Social Media, then Supports */}
          <div className="block md:hidden space-y-8">
            {/* Page Section */}
            <div>
              <h3 className="text-white font-semibold mb-1">Page</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <ul className="space-y-1 leading-6">
                <li>Curacao License</li>
                <li>Crypto Betting &amp; Tips</li>
                <li>Hash Games &amp; Benefits</li>
                <li>Table Games &amp; Tips</li>
                <li>Slot Games &amp; Tips</li>
                <li>Promotion</li>
                <li>How to Deposit &amp; Withdraw</li>
                <li>Live Casino &amp; Betting Tips</li>
                <li>Sports Live Streaming</li>
                <li>Betting Tips</li>
              </ul>
            </div>
            {/* Social Media Section */}
            <div>
              <h3 className="text-white font-semibold mb-1">Social Media</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <ul className="space-y-1 leading-6">
                <li>Telegram</li>
                <li>Twitter</li>
                <li>Discord</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            {/* Supports Section */}
            <div>
              <h3 className="text-white font-semibold mb-1">Supports</h3>
              <div className="w-full h-[1px] bg-[#C9FC01] my-4" />
              <ul className="space-y-1 leading-6">
                <li>Help &amp; Supports</li>
                <li>Magic88 Profile</li>
                <li>Customer Service</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          © All rights reserved{" "}
          <span className="text-[#C9FC01]">Magic88.game</span>
        </div>
      </div>
    </footer>
  );
}

// app/components/GreenButton.tsx
import React from "react";

interface GreenButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function GreenButton({ children, onClick }: GreenButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#C9FC01]
        text-black
        font-inter
        px-6
        py-3
        rounded-2xl
        border-2 
        border-transparent  /* <-- Always have a 2px border, but transparent */
        transition-all
        duration-300
        ease-in-out
        transform
        hover:bg-transparent
        hover:text-white
        hover:border-[#C9FC01] 
        hover:shadow-[0_0_5px_0px_#C9FC01]
        focus:outline-none
      "
    >
      {children}
    </button>
  );
}

// app/components/WhiteButton.tsx
import React from "react";

interface WhiteButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function WhiteButton({ children, onClick }: WhiteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-row items-center justify-center
        bg-white
        text-black
        font-inter
        px-6
        py-3
        rounded-2xl
        border-2 
        border-transparent
        transition-all
        duration-300
        ease-in-out
        transform
        hover:bg-transparent
        hover:text-white
        hover:border-white 
        hover:shadow-[0_0_5px_0px_white]
        focus:outline-none
      "
    >
      {children}
    </button>
  );
}

// app/root.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css"; // If you have Tailwind or global CSS

export default function Root() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* You can add a Navbar or other shared layout elements here */}
      <Outlet />
    </div>
  );
}
"use client";

import { ShoppingBag } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-pink-900">

      {/* Logo */}
      <div className="animate-bounce">
        <ShoppingBag
          size={75}
          className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.7)]"
        />
      </div>

      {/* Brand */}
      <h1 className="mt-8 text-6xl font-extrabold tracking-[0.35em] text-white animate-fadeIn">
        STYLEHUB
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-lg text-gray-300 animate-fadeInDelay">
        Discover • Style • Shine
      </p>

      {/* Progress Bar */}
      <div className="mt-10 w-72 h-2 rounded-full bg-gray-700 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 animate-loading"></div>
      </div>
    </div>
  );
}
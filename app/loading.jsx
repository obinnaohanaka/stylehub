import { ShoppingBag } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-pink-900">

      {/* Animated Logo */}
      <div className="animate-bounce">
        <ShoppingBag
          size={70}
          className="text-pink-500 drop-shadow-lg"
        />
      </div>

      {/* App Name */}
      <h1 className="mt-8 text-5xl md:text-6xl font-extrabold tracking-[0.3em] text-white animate-pulse">
        STYLEHUB
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-300 text-lg">
        Elevating Your Fashion Experience...
      </p>

      {/* Loading Bar */}
      <div className="mt-10 w-72 h-2 bg-gray-700 rounded-full overflow-hidden">

        <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 animate-loading"></div>

      </div>

    </div>
  );
}
"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useOutfit } from "@/context/OutfitContext";

export default function Header() {
  const { favorites, collection } = useOutfit();

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-pink-600 cursor-pointer">
            ...StyleHub
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">

          <Link
            href="/"
            className="font-medium hover:text-pink-600 transition"
          >
            Home
          </Link>

          {/* Favorites */}
          <Link
            href="/favorites"
            className="relative flex items-center gap-2 hover:text-pink-600 transition"
          >
            <Heart size={20} />

            <span>Favorites</span>

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-pink-600 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Collection */}
          <Link
            href="/collection"
            className="relative flex items-center gap-2 hover:text-pink-600 transition"
          >
            <ShoppingBag size={20} />

            <span>Collection</span>

            {collection.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {collection.length}
              </span>
            )}
          </Link>

        </nav>
      </div>
    </header>
  );
}
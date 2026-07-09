"use client";

import Link from "next/link";
import { useOutfit } from "@/context/OutfitContext";

export default function Header() {
  const { favorites, collection } = useOutfit();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
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

          <Link
            href="/favorites"
            className="text-gray-800 hover:text-pink-600 font-semibold transition"
          >
            ❤️ Favorites
          </Link>

          <Link
            href="/collection"
            className="text-gray-800 hover:text-pink-600 font-semibold transition"
          >
            👜 Collection
          </Link>

        </nav>

      </div>
    </header>
  );
}
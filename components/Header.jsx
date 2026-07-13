"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  Heart,
  ShoppingBag,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { useOutfit } from "@/context/OutfitContext";

export default function Header() {
  const { favorites, collection } = useOutfit();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-pink-600 hover:scale-105 transition-transform cursor-pointer">
            StyleHub
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="flex items-center gap-2 font-medium text-gray-700 hover:text-pink-600 transition"
          >
            <Home size={18} />
            Home
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 font-medium text-gray-700 hover:text-pink-600 transition"
          >
            <Info size={18} />
            About
          </Link>

          <Link
            href="/favorites"
            className="relative flex items-center gap-2 font-medium text-gray-700 hover:text-pink-600 transition"
          >
            <Heart size={18} />
            Favorites

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-pink-600 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            href="/collection"
            className="relative flex items-center gap-2 font-medium text-gray-700 hover:text-pink-600 transition"
          >
            <ShoppingBag size={18} />
            Collection

            {collection.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-black text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {collection.length}
              </span>
            )}
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 font-medium text-gray-700 hover:text-pink-600 transition"
          >
            <Mail size={18} />
            Contact
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-pink-600 transition"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">

          <nav className="flex flex-col p-6 space-y-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-pink-600"
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-pink-600"
            >
              <Info size={20} />
              About
            </Link>

            <Link
              href="/favorites"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-pink-600"
            >
              <Heart size={20} />
              Favorites ({favorites.length})
            </Link>

            <Link
              href="/collection"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-pink-600"
            >
              <ShoppingBag size={20} />
              Collection ({collection.length})
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-pink-600"
            >
              <Mail size={20} />
              Contact
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}
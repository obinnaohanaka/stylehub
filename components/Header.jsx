"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ShoppingBag,
  Heart,
  Info,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { useOutfit } from "@/context/OutfitContext";

export default function Header() {
  const { favorites, collection } = useOutfit();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (href) =>
    `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
      pathname === href
        ? "bg-pink-100 text-pink-600"
        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
    }`;

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
        <nav className="hidden md:flex items-center gap-5">

          {/* Home */}
          <Link href="/" className={navLink("/")}>
            <Home size={18} />
            Home
          </Link>

          {/* Collection */}
          <Link
            href="/collection"
            className={`relative ${navLink("/collection")}`}
          >
            <ShoppingBag size={18} />
            Collection

            {collection.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {collection.length}
              </span>
            )}
          </Link>

          {/* Favorites */}
          <Link
            href="/favorites"
            className={`relative ${navLink("/favorites")}`}
          >
            <Heart size={18} />
            Favorites

            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full min-w-5 h-5 flex items-center justify-center px-1">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* About */}
          <Link href="/about" className={navLink("/about")}>
            <Info size={18} />
            About
          </Link>

          {/* Contact */}
          <Link href="/contact" className={navLink("/contact")}>
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

          <nav className="flex flex-col p-6 space-y-3">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={navLink("/")}
            >
              <Home size={20} />
              Home
            </Link>

            <Link
              href="/collection"
              onClick={() => setMenuOpen(false)}
              className={navLink("/collection")}
            >
              <ShoppingBag size={20} />
              Collection ({collection.length})
            </Link>

            <Link
              href="/favorites"
              onClick={() => setMenuOpen(false)}
              className={navLink("/favorites")}
            >
              <Heart size={20} />
              Favorites ({favorites.length})
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={navLink("/about")}
            >
              <Info size={20} />
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLink("/contact")}
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
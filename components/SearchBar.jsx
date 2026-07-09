"use client";

import { useOutfit } from "@/context/OutfitContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useOutfit();

  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4">
      <input
        type="text"
        placeholder=" Search outfits by title or keyword..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-gray-600
          bg-gray-800
          px-5
          py-4
          text-white
          placeholder:text-gray-400
          shadow-sm
          transition
          focus:border-pink-500
          focus:ring-2
          focus:ring-pink-500
          focus:outline-none
        "
      />
    </div>
  );
}
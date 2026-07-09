"use client";

import { useOutfit } from "@/context/OutfitContext";

export default function Filter() {
  const {
    category,
    setCategory,
    season,
    setSeason,
  } = useOutfit();

  return (
    <div className="w-full max-w-3xl mx-auto px-4 mb-8">
      <div className="flex flex-col sm:flex-row justify-center gap-4">

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full sm:w-1/2 bg-gray-800 text-white border border-gray-700 rounded-xl p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        >
          <option>All</option>
          <option>Casual</option>
          <option>Formal</option>
          <option>Streetwear</option>
          <option>Sports</option>
          <option>Traditional</option>
          <option>Smart Casual</option>
          <option>Bohemian</option>
          <option>Winter</option>
        </select>

        {/* Season Filter */}
        <select
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="w-full sm:w-1/2 bg-gray-800 text-white border border-gray-700 rounded-xl p-3 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        >
          <option>All</option>
          <option>Spring</option>
          <option>Summer</option>
          <option>Autumn</option>
          <option>Winter</option>
          <option>All Season</option>
        </select>

      </div>
    </div>
  );
}
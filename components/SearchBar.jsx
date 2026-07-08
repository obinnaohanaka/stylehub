"use client";

import { useOutfit } from "@/context/OutfitContext";

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useOutfit();

  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="Search outfits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}
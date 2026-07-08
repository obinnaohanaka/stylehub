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
    <div className="flex gap-4 mb-6">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-3 rounded"
      >
        <option>All</option>
        <option>Casual</option>
        <option>Formal</option>
        <option>Sport</option>
      </select>

      <select
        value={season}
        onChange={(e) => setSeason(e.target.value)}
        className="border p-3 rounded"
      >
        <option>All</option>
        <option>Summer</option>
        <option>Winter</option>
        <option>Spring</option>
        <option>Autumn</option>
      </select>

    </div>
  );
}
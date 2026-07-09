"use client";

import outfits from "@/data/outfits";
import OutfitCard from "./OutfitCard";
import { useOutfit } from "@/context/OutfitContext";

export default function OutfitList() {
  const {
    searchTerm,
    category,
    season,
  } = useOutfit();

  const filteredOutfits = outfits.filter((outfit) => {
    const matchesSearch =
      outfit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      outfit.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      category === "All" || outfit.category === category;

    const matchesSeason =
      season === "All" || outfit.season === season;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesSeason
    );
  });

  return (
    <section id="outfits"
      className="max-w-7xl mx-auto py-10 px-4"
    >

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOutfits.map((outfit) => (
          <OutfitCard
            key={outfit.id}
            outfit={outfit}
          />
        ))}
      </div>

    </section>
  );
}
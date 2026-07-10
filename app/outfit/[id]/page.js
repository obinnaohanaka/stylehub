"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useOutfit } from "@/context/OutfitContext";
import outfits from "@/data/outfits";
import {
  CalendarDays,
  Star,
  Heart,
  ShoppingBag,
  CircleCheck,
  TriangleAlert,
  CircleX,
} from "lucide-react";

export default function OutfitDetail() {
  const { id } = useParams();

  const outfit = outfits.find((item) => item.id === Number(id));

  const {
    favorites,
    collection,
    addFavorite,
    addToCollection,
  } = useOutfit();

  if (!outfit) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500">
          Outfit Not Found
        </h1>
      </div>
    );
  }

  const isFavorite = favorites.some(
    (item) => item.id === outfit.id
  );

  const isCollected = collection.some(
    (item) => item.id === outfit.id
  );

  const availabilityIcon =
    outfit.availability === "In Stock" ? (
      <CircleCheck size={20} />
    ) : outfit.availability === "Low Stock" ? (
      <TriangleAlert size={20} />
    ) : (
      <CircleX size={20} />
    );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Image */}
        <div className="group relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">

          <Image
            src={outfit.image}
            alt={outfit.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

        </div>

        {/* Details */}
        <div>

          {/* Category */}
          <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full font-semibold">
            {outfit.category}
          </span>

          {/* Title */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white mt-4">
            {outfit.title}
          </h1>

          {/* Season */}
          <div className="flex items-center gap-2 mt-4 text-gray-500">
            <CalendarDays size={20} />
            <span>{outfit.season}</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700 leading-8">
            {outfit.description}
          </p>

          {/* Price */}
          <p className="text-4xl font-extrabold text-pink-600 mt-8">
            ₦{outfit.price.toLocaleString()}
          </p>

          {/* Rating & Availability */}
          <div className="flex items-center justify-between mt-8">

            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">
              <Star
                size={20}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>{outfit.rating}/5</span>
            </div>

            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${
                outfit.availability === "In Stock"
                  ? "bg-green-100 text-green-700"
                  : outfit.availability === "Low Stock"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {availabilityIcon}
              <span>{outfit.availability}</span>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <button
              onClick={() => addFavorite(outfit)}
              disabled={isFavorite}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 ${
                isFavorite
                  ? "bg-pink-100 text-pink-600 cursor-not-allowed"
                  : "bg-pink-600 text-white hover:bg-pink-700"
              }`}
            >
              <Heart
                size={20}
                className={isFavorite ? "fill-pink-600" : ""}
              />
              {isFavorite ? "Favorited" : "Add to Favorites"}
            </button>

            <button
              onClick={() => addToCollection(outfit)}
              disabled={isCollected}
              className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 ${
                isCollected
                  ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              <ShoppingBag size={20} />
              {isCollected ? "Saved" : "Save Look"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
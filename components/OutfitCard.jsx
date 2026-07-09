import Image from "next/image";
import Link from "next/link";

import { useOutfit } from "@/context/OutfitContext";
import {
  CalendarDays,
  Star,
  CircleCheck,
  TriangleAlert,
  CircleX,
  Heart,
  ShoppingBag,
} from "lucide-react";

export default function OutfitCard({ outfit }) {
  const {
    favorites,
    collection,
    addFavorite,
    addToCollection,
  } = useOutfit();

  const isFavorite = favorites.some(
    (item) => item.id === outfit.id
  );

  const isCollected = collection.some(
    (item) => item.id === outfit.id
  );

  const getAvailability = () => {
    switch (outfit.availability) {
      case "In Stock":
        return {
          icon: <CircleCheck size={18} />,
          color: "text-green-600",
        };

      case "Low Stock":
        return {
          icon: <TriangleAlert size={18} />,
          color: "text-orange-500",
        };

      default:
        return {
          icon: <CircleX size={18} />,
          color: "text-red-600",
        };
    }
  };

  const availability = getAvailability();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-200 transition-all duration-300">

      {/* Outfit Image */}
      <Link href={`/outfit/${outfit.id}`}>
        <div className="group relative w-full h-80 overflow-hidden cursor-pointer">

          <Image
            src={outfit.image}
            alt={outfit.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">

            <span className="opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              View Details
            </span>

          </div>

        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
          {outfit.category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mt-4">
          {outfit.title}
        </h2>

        {/* Season */}
        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <CalendarDays size={18} />
          <span>{outfit.season}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-4 line-clamp-2">
          {outfit.description}
        </p>

        {/* Price */}
        <p className="text-pink-600 text-3xl font-extrabold mt-5">
          ₦{outfit.price.toLocaleString()}
        </p>

        {/* Rating & Availability */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-2 text-yellow-500 font-semibold">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{outfit.rating}/5</span>
          </div>

          <div
            className={`flex items-center gap-2 font-semibold ${availability.color}`}
          >
            {availability.icon}
            <span>{outfit.availability}</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">

          {/* Favorite */}
          <button
            onClick={() => addFavorite(outfit)}
            disabled={isFavorite}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 ${
              isFavorite
                ? "bg-pink-100 text-pink-600 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-pink-600" : ""}
            />

            {isFavorite ? "Favorited" : "Favorite"}
          </button>

          {/* Collection */}
          <button
            onClick={() => addToCollection(outfit)}
            disabled={isCollected}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 ${
              isCollected
                ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            <ShoppingBag size={18} />

            {isCollected ? "Saved" : "Save Look"}
          </button>

        </div>

      </div>

    </div>
  );
}
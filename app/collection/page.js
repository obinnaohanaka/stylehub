"use client";

import Image from "next/image";
import { ShoppingBag, CalendarDays, Trash2 } from "lucide-react";
import { useOutfit } from "@/context/OutfitContext";

export default function CollectionPage() {
  const { collection, removeFromCollection } = useOutfit();
  

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Page Title */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <ShoppingBag size={34} className="text-pink-600" />

        <h1 className="text-4xl font-bold">
          My Outfit Collection
        </h1>
      </div>

      <p className="text-center text-gray-500 mb-10">
        Keep track of all the outfits you've saved.
      </p>

      {collection.length === 0 ? (
        <div className="text-center py-20">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={50} className="text-pink-500" />
          </div>

          <h2 className="text-3xl font-bold text-gray-600">
            Your Collection is Empty
          </h2>

          <p className="mt-4 text-gray-500">
            Browse outfits and add your favorites to build your personal
            collection.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collection.map((outfit) => (
            <div
              key={outfit.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Outfit Image */}
              <div className="relative w-full h-80">
                <Image
                  src={outfit.image}
                  alt={outfit.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">
                <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {outfit.category}
                </span>

                <h2 className="text-2xl font-bold text-black mt-4">
                  {outfit.title}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <CalendarDays size={18} />
                  <span>{outfit.season}</span>
                </div>

                <p className="text-pink-600 text-2xl font-bold mt-5">
                  ₦{outfit.price.toLocaleString()}
                </p>

                <button
                  onClick={() => removeFromCollection(outfit.id)}
                  className="w-full mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
                >
                  <Trash2 size={18} />
                  Remove from Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
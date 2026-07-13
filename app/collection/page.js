"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  CalendarDays,
  Trash2,
} from "lucide-react";

import { useOutfit } from "@/context/OutfitContext";

export default function CollectionPage() {
  const { collection, removeFromCollection } = useOutfit();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      {/* Page Title */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <ShoppingBag
          size={34}
          className="text-pink-600"
        />

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
            <ShoppingBag
              size={50}
              className="text-pink-500"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-600">
            Your Collection is Empty
          </h2>

          <p className="mt-4 text-gray-500">
            Browse outfits and add your favorite looks to build your personal collection.
          </p>

        </div>
      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {collection.map((outfit) => (

            <div
              key={outfit.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-200 transition-all duration-300"
            >

              {/* Outfit Image */}
              <Link href={`/outfit/${outfit.id}`}>
                <div className="group relative w-full h-80 overflow-hidden cursor-pointer">

                  <Image
                    src={outfit.image}
                    alt={outfit.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300 flex items-center justify-center">

                    <span className="opacity-0 group-hover:opacity-100 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300">
                      View Details
                    </span>

                  </div>

                </div>
              </Link>

              {/* Card Content */}
              <div className="p-5">

                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {outfit.category}
                </span>

                <h2 className="text-2xl font-extrabold text-gray-900 mt-4">
                  {outfit.title}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <CalendarDays size={18} />
                  <span>{outfit.season}</span>
                </div>

                <p className="text-pink-600 text-3xl font-extrabold mt-5">
                  ₦{outfit.price.toLocaleString()}
                </p>

                <div className="mt-6">

                  <button
                    onClick={() => removeFromCollection(outfit.id)}
                    className="group w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <Trash2
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-12"
                    />

                    Remove from Collection

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}
    </section>
  );
}
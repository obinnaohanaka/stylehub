"use client";
import Image from "next/image";
import { useOutfit } from "@/context/OutfitContext";

export default function CollectionPage() {
    const { collection, removeFromCollection } = useOutfit();

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold text-center mb-2">
                👜 My Outfit Collection
            </h1>

            <p className="text-center text-gray-500 mb-10">
                Keep track of all the outfits you've saved.
            </p>

            {collection.length === 0 ? (
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold text-gray-600">
                        Your Collection is Empty 👜
                    </h2>

                    <p className="mt-4 text-gray-500">
                        Browse outfits and add your favorites to build your personal collection.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collection.map((outfit) => (
                        <div
                            key={outfit.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                        >
                            {/* Outfit Image */}
                            <div className="relative w-full h-80">
                                <image
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

                                <h2 className="text-2xl font-bold mt-4">
                                    {outfit.title}
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    🍂 {outfit.season}
                                </p>

                                <p className="text-pink-600 text-2xl font-bold mt-5">
                                    ₦{outfit.price.toLocaleString()}
                                </p>

                                <button
                                    onClick={() => removeFromCollection(outfit.id)}
                                    className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
                                >
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
"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useOutfit } from "@/context/OutfitContext";
import outfits from "@/data/outfits";

export default function OutfitDetail() {
    const { id } = useParams();

    const outfit = outfits.find((item) => item.id === Number(id));

    const { addFavorite, addToCollection } = useOutfit();

    if (!outfit) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold text-red-500">
                    Outfit Not Found
                </h1>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Image */}
                <div className="relative w-full h-500px rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={outfit.image}
                        alt={outfit.title}
                        fill
                        className="object-cover"
                    />
                </div>


                {/* Details */}
                <div>

                    <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-semibold">
                        {outfit.category}
                    </span>

                    <h1 className="text-5xl font-bold mt-4">
                        {outfit.title}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        🍂 {outfit.season}
                    </p>

                    <p className="mt-6 text-gray-700 leading-8">
                        {outfit.description}
                    </p>

                    <p className="text-4xl font-bold text-pink-600 mt-8">
                        ₦{outfit.price.toLocaleString()}
                    </p>

                    <p className="mt-4 text-2xl text-yellow-500 font-semibold">
                        ⭐ {outfit.rating} / 5
                    </p>

                    <p
                        className={`mt-2 text-lg font-semibold ${outfit.availability === "In Stock"
                                ? "text-green-600"
                                : outfit.availability === "Low Stock"
                                    ? "text-orange-500"
                                    : "text-red-600"
                            }`}
                    >
                        {outfit.availability}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">

                        <button
                            onClick={() => addFavorite(outfit)}
                            className="bg-pink-600 hover:bg-pink-700 transition text-white px-8 py-4 rounded-xl"
                        >
                            ❤️ Add to Favorites
                        </button>

                        <button
                            onClick={() => addToCollection(outfit)}
                            className="bg-black hover:bg-gray-800 transition text-white px-8 py-4 rounded-xl"
                        >
                            👜 Add to Collection
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}
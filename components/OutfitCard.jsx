import Image from "next/image";
import Link from "next/link";

export default function OutfitCard({ outfit }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

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

        {/* Category */}
        <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-3 py-1 rounded-full">
          {outfit.category}
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-4">
          {outfit.title}
        </h2>

        {/* Season */}
        <p className="text-gray-500 mt-2">
          🍂 {outfit.season}
        </p>

        {/* Description */}
        <p className="text-gray-600 mt-4 line-clamp-2">
          {outfit.description}
        </p>

        {/* Price */}
        <p className="text-pink-600 text-2xl font-bold mt-5">
          ₦{outfit.price.toLocaleString()}
        </p>

        {/* Button */}
        <Link
          href={`/outfit/${outfit.id}`}
          className="block mt-6 text-center bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}
import {
  ShoppingBag,
  Sparkles,
  Laptop,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="text-center">

        <ShoppingBag
          size={70}
          className="mx-auto text-pink-600"
        />

        <h1 className="text-5xl font-extrabold mt-6">
          About StyleHub
        </h1>

        <p className="mt-5 text-gray-400 max-w-3xl mx-auto text-lg">
          StyleHub is a modern fashion lookbook built with
          Next.js and Tailwind CSS. It allows users to discover
          stylish outfits, search collections, filter by
          category and season, save favorites, and build a
          personal fashion collection.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <Sparkles
            size={40}
            className="mx-auto text-pink-600"
          />

          <h2 className="text-2xl text-black font-bold mt-4">
            Modern Design
          </h2>

          <p className="mt-3 text-gray-900">
            Clean, responsive interface with a premium fashion
            experience.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <Laptop
            size={40}
            className="mx-auto text-pink-600"
          />

          <h2 className="text-2xl text-black font-bold mt-4">
            Built With
          </h2>

          <p className="mt-3 text-gray-900">
            Next.js • React • Tailwind CSS • Lucide React
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <Code2
            size={40}
            className="mx-auto text-pink-600"
          />

          <h2 className="text-2xl text-black font-bold mt-4">
            Developer
          </h2>

          <p className="mt-3 text-gray-900">
            Designed and developed by
            <br />
            <strong>Obinna Ohanaka</strong>
          </p>

        </div>

      </div>

    </section>
  );
}
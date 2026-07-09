export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-500 via-pink-400 to-purple-600 rounded-2xl text-white">

      <div className="max-w-7xl mx-auto px-8 py-24 text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold">
          Elevate Your Fashion Game
        </h1>

        <p className="mt-6 text-lg md:text-xl">
          Discover stylish outfits for every occasion and build your own personal lookbook.
        </p>

        <a
          href="#outfits"
          className="inline-block bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition"
        >
          Explore Collection
        </a>

      </div>

    </section>
  );
}
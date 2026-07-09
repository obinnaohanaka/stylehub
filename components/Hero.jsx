export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-950 via-gray-900 to-slate-800 rounded-2xl text-white shadow-2xl">

      <div className="max-w-7xl mx-auto px-8 py-24 text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Elevate Your Fashion Game
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Discover stylish outfits for every occasion and build your own
          personal fashion collection with StyleHub.
        </p>

        <a
          href="#outfits"
          className="inline-block mt-8 bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Explore Collection
        </a>

      </div>

    </section>
  );
}
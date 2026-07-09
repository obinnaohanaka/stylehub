import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-pink-400">
              StyleHub
            </h2>

            <p className="mt-2 text-gray-300 max-w-sm">
              Discover fashionable outfits for every season and build your
              personal lookbook with StyleHub.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-gray-300">
            <Link href="/" className="hover:text-pink-400 transition">
              Home
            </Link>

            <Link href="/favorites" className="hover:text-pink-400 transition">
              Favorites
            </Link>

            <Link href="/collection" className="hover:text-pink-400 transition">
              Collection
            </Link>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} StyleHub. Built with Next.js, React and Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import OutfitList from "@/components/OutfitList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <Hero />
      <SearchBar />
      <Filter />
      <OutfitList />
    </main>
  );
}
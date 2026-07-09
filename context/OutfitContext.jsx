"use client";

import toast from "react-hot-toast";
import {
    Heart,
    ShoppingBag,
    Trash2,
    AlertCircle,
} from "lucide-react";

import { createContext, useContext, useEffect, useState } from "react";

const OutfitContext = createContext();

export function OutfitProvider({ children }) {
    // Favorites
    const [favorites, setFavorites] = useState([]);

    // Collection
    const [collection, setCollection] = useState([]);

    // Search & Filters
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("All");
    const [season, setSeason] = useState("All");

    // ==========================
    // Load data from localStorage
    // ==========================
    useEffect(() => {
        const savedFavorites = localStorage.getItem("favorites");
        const savedCollection = localStorage.getItem("collection");

        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }

        if (savedCollection) {
            setCollection(JSON.parse(savedCollection));
        }
    }, []);

    // ==========================
    // Save Favorites
    // ==========================
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // ==========================
    // Save Collection
    // ==========================
    useEffect(() => {
        localStorage.setItem("collection", JSON.stringify(collection));
    }, [collection]);

    // ==========================
    // ==========================
    // Favorite Functions
    // ==========================
    const addFavorite = (outfit) => {
        if (favorites.find((item) => item.id === outfit.id)) {
            toast(
                <div className="flex items-center gap-2">
                    <AlertCircle size={18} className="text-orange-500" />
                    <span>Already in Favorites</span>
                </div>
            );
            return;
        }

        setFavorites((prev) => [...prev, outfit]);

        toast.success(
            <div className="flex items-center gap-2">
                <Heart size={18} className="fill-pink-600 text-pink-600" />
                <span>Added to Favorites</span>
            </div>
        );
    };

    const removeFavorite = (id) => {
        setFavorites((prev) =>
            prev.filter((item) => item.id !== id)
        );

        toast.success(
            <div className="flex items-center gap-2">
                <Trash2 size={18} className="text-red-500" />
                <span>Removed from Favorites</span>
            </div>
        );
    };

    // ==========================
    // Collection Functions
    // ==========================
    const addToCollection = (outfit) => {
        if (collection.find((item) => item.id === outfit.id)) {
            toast(
                <div className="flex items-center gap-2">
                    <AlertCircle size={18} className="text-orange-500" />
                    <span>Already in Collection</span>
                </div>
            );
            return;
        }

        setCollection((prev) => [...prev, outfit]);

        toast.success(
            <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-pink-600" />
                <span>Added to Collection</span>
            </div>
        );
    };

    const removeFromCollection = (id) => {
        setCollection((prev) =>
            prev.filter((item) => item.id !== id)
        );

        toast.success(
            <div className="flex items-center gap-2">
                <Trash2 size={18} className="text-red-500" />
                <span>Removed from Collection</span>
            </div>
        );
    };

    return (
        <OutfitContext.Provider
            value={{
                favorites,
                collection,

                addFavorite,
                removeFavorite,

                addToCollection,
                removeFromCollection,

                searchTerm,
                setSearchTerm,

                category,
                setCategory,

                season,
                setSeason,
            }}
        >
            {children}
        </OutfitContext.Provider>
    );
}

export function useOutfit() {
    return useContext(OutfitContext);
}
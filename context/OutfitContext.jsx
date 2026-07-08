"use client";

import { createContext, useContext, useState } from "react";

const OutfitContext = createContext();

export function OutfitProvider({ children }) {

    const [favorites, setFavorites] = useState([]);

    const [collection, setCollection] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [category, setCategory] = useState("All");

    const [season, setSeason] = useState("All");


    // Favorite Outfit
    const addFavorite = (outfit) => {
        if (!favorites.find((item) => item.id === outfit.id)) {
            setFavorites([...favorites, outfit]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter((item) => item.id !== id));
    };

    // Outfit Collection
    const addToCollection = (outfit) => {
        if (!collection.find((item) => item.id === outfit.id)) {
            setCollection([...collection, outfit]);
        }
    };

    const removeFromCollection = (id) => {
        setCollection(collection.filter((item) => item.id !== id));
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

                // NEW
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
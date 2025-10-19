import React, { useState } from "react";
import Header from "../components/Header";
import ContentCard from "../components/ContentCard";
import FavoritePairs from "../components/FavoritePairs";
import WhyChooseUs from "../components/WhyChooseUs";
import { useOutletContext } from "react-router-dom";

export const HomePage = () => {
  const { latestRates, currencySymbols } = useOutletContext();
  const [newFavorite, setNewFavorite] = useState(null);

  const handleAddFavorite = (pair) => {
    setNewFavorite(pair);
  };

  return (
    <>
      <Header />
      <ContentCard
        latestRates={latestRates}
        currencySymbols={currencySymbols}
        onAddFavorite={handleAddFavorite}
      />
      <FavoritePairs newFavorite={newFavorite} />
      <WhyChooseUs />
    </>
  );
};

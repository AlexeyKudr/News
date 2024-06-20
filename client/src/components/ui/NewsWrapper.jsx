import React from "react";
import NewsCard from "./NewsCard";

export default function NewsWrapper({cards, handleFavorite, favoriteNewsIds}) {
  return (
    <>
      {cards.map((card) => (
        <NewsCard
          key={card.id}
          card={card}
          handleFavorite={handleFavorite}
          isFavorite={favoriteNewsIds.has(card.id)}
        />
      ))}
    </>
  );
}

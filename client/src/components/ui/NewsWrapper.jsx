import React from "react";
import NewsCard from "./NewsCard";

export default function NewsWrapper({cards, handleMore, handleFavorite}) {
  return (
    <>
      {cards.map((card) => (
        <NewsCard
          key={card.id}
          card={card}
          handleMore={handleMore}
          handleFavorite={handleFavorite}
        />
      ))}
    </>
  );
}

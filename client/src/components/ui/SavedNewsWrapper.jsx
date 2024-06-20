import React from "react";
import MyCard from "./MyCard";

export default function SavedNewsWrapper({savedNews, handleDelete}) {
  return (
    <>
      {savedNews.map((card) => (
        <MyCard
          key={card.id}
          card={card}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}

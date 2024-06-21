import React from "react";
import MyCard from "./MyCard";

export default function SavedNewsWrapper({savedNews, handleDelete, user}) {
  return (
    <>
      {user.data ? (
        savedNews.length > 0 ? (
          savedNews.map((card) => (
            <MyCard
              key={card.id}
              card={card}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h3 style={{ color: '#00336C'}}>У вас нет избранных новостей</h3>
        )
      ) : (
        <h3>Пользователь не найден</h3>
      )}
    </>
  );
}

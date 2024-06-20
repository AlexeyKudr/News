import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import NewsWrapper from "../ui/NewsWrapper";
import axiosInstance from "../api/axiosInstance";

export default function NewsPage({user}) {
  const [cards, setCards] = useState([]);
  const [favoriteNewsIds, setFavoriteNewsIds] = useState(new Set());

  useEffect(() => {
    axiosInstance.get("/news").then((res) => setCards(res.data));
    axiosInstance.get("/account")
      .then((res) => {
        const favoriteIds = new Set(res.data.map(news => news.id));
        setFavoriteNewsIds(favoriteIds);
      })
      .catch((error) => console.error("Error fetching favorite news", error));
  }, []);

  const handleFavorite = async (id) => {
    try {
      const response = await axiosInstance.post("/account", {
        userId: user.id,
        newsId: id
      });
      if (response.status === 201) {
        setFavoriteNewsIds((prevSet) => new Set(prevSet).add(id));
        console.log("Новость добавлена в избранное");
      } else {
        console.error("Ошибка при добавлении новости в избранное");
      }
    } catch (error) {
      console.error("Ошибка при добавлении новости в избранное:", error);
    }
  };
  
  return (
    <>
      <div>NewsPage</div>
      <Row>
        <NewsWrapper cards={cards} handleFavorite={handleFavorite} favoriteNewsIds={favoriteNewsIds} />
      </Row>
    </>
  );
}

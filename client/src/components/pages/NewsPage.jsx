import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import NewsWrapper from "../ui/NewsWrapper";
import axiosInstance from "../api/axiosInstance";

export default function NewsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get("/news").then((res) => setCards(res.data));
  }, []);

  const handleMore = (id) => {
    
  };

  const handleFavorite = (id) => {};

  return (
    <>
      <div>NewsPage</div>
      <Row>
        <NewsWrapper cards={cards} handleMore={handleMore} handleFavorite={handleFavorite} />
      </Row>
    </>
  );
}

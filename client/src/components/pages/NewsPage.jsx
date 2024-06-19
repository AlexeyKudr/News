import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import NewsWrapper from "../ui/NewsWrapper";

export default function NewsPage() {
  const [cards, setCards] = useState([]);

  const handleMore = (id) => {};

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

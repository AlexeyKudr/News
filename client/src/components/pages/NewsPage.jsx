import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NewsWrapper from "../ui/NewsWrapper";

export default function NewsPage() {

  const handleMore = (id) => {};

  const handleFavorite = (id) => {};

  return (
    <>
      <div>NewsPage</div>
      <Row>
        <NewsWrapper handleMore={handleMore} handleFavorite={handleFavorite} />
      </Row>
    </>
  );
}

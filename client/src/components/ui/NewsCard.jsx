import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";

export default function NewsCard({ card, handleMore, handleFavorite }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
      <Card.Img variant="top" src={card.image} />
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.preview}</Card.Text>
        <Button variant="primary" onClick={() => handleMore(card.id)}>Подробнее</Button>
        <Button variant="primary" onClick={() => handleFavorite(card.id)}>Добавить в избранное</Button>
      </Card.Body>
    </Card>
  );
}

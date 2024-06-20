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
        <AppModal title="Подробнее" buttonText="Подробнее">
          <div className="text-center">
            <Card.Title>{card.title}</Card.Title>
            <Card.Img variant="top" src={card.image} />
            <Card.Text>{card.description}</Card.Text>
          </div>
        </AppModal>
        <Button variant="primary" onClick={() => handleFavorite(card.id)}>Добавить в избранное</Button>
      </Card.Body>
    </Card>
  );
}

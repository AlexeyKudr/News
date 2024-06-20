import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";

export default function NewsCard({ card, handleMore, handleFavorite }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.discription}</Card.Text>
        <AppModal title="Подробнее" buttonText="Подробнее">
        <div className="text-center">
          
        </div>
        </AppModal>
        <Button variant="primary" onClick={() => handleMore(card.id)}>Подробнее</Button>
        <Button variant="primary" onClick={() => handleFavorite(card.id)}>Добавить в избранное</Button>
      </Card.Body>
    </Card>
  );
}

import React from 'react';
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";
import Button from "react-bootstrap/esm/Button";

export default function MyCard({card, handleDelete}) {
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
            <Button
                onClick={() => handleDelete(card.id)}
                variant="outline-danger"
                className="mb-2"
              >
                Удалить
              </Button>
          </Card.Body>
        </Card>
      );
}

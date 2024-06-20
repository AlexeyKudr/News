import React from 'react';
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";

export default function MyCard({card}) {
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
          </Card.Body>
        </Card>
      );
}

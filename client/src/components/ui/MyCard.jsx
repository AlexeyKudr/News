import React from 'react';
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";
import Button from "react-bootstrap/Button";

export default function MyCard({ card, handleDelete }) {
  const buttonFixedWidthStyle = { width: "auto" };

  const cardStyle = {
    width: "50rem",
    marginLeft: "240px",
    marginBottom: "50px",
    border: `1px solid #00336c`,
  };

  const titleStyle = {
    marginBottom: "10px",
    marginTop: "10px",
  };

  const textPreviewStyle = {
    marginBottom: "10px",
  };

  const modalContentStyle = {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Card style={cardStyle}>
      <Card.Body style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
        <Card.Img variant="top" src={card.image} style={{ marginTop: "10px" }} />
        <Card.Title style={titleStyle}>{card.title}</Card.Title>
        <Card.Text style={textPreviewStyle}>{card.preview}</Card.Text>
        <AppModal title="Подробнее" buttonText="Подробнее" buttonStyle={buttonFixedWidthStyle}>
          <div className="text-center" style={modalContentStyle}>
            <Card.Title style={{ fontSize: "28px", fontWeight: "bold", marginBottom: '10px' }}>{card.title}</Card.Title>
            <Card.Img variant="top" src={card.image} style={{ marginBottom: "20px" }} />
            <Card.Text style={{ marginBottom: "10px" }}>{card.description}</Card.Text>
          </div>
        </AppModal>
        <Button
          style={{  width: "auto" }}
          onClick={() => handleDelete(card.id)}
          variant="outline-danger"
        >
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}

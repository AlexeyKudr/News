import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AppModal from "./AppModal";

export default function NewsCard({ card, handleFavorite, isFavorite }) {
  const buttonFixedWidthStyle = { width: "auto" };

  const [hovered, setHovered] = useState(false);

  const favoriteButtonStyle = {
    width: "100%",
    backgroundColor: hovered ? "#A94064" : "#fff",
    borderColor: "#A94064",
    color: hovered ? "#fff" : "#A94064",
    transition: "background-color 0.3s ease, color 0.3s ease", 
  };

  const cardStyle = {
    width: "25rem",
    margin: "15px",
    border: `1px solid #00336c`, 
  };

  return (
    <Card style={cardStyle}>
      <Card.Body style={{ display: "flex", flexDirection: "column", gap: "10px", height: "100%" }}>
        <Card.Img variant="top" src={card.image} style={{ marginBottom: "10px" }} />
        <Card.Title>{card.title}</Card.Title>
        <Card.Text style={{ flex: "1" }}>{card.preview}</Card.Text>
        <AppModal title="Подробнее" buttonText="Подробнее" buttonStyle={buttonFixedWidthStyle}>
          <div className="text-center" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Card.Title style={{ fontSize: "28px", fontWeight: "bold", marginBottom: '10px' }}>{card.title}</Card.Title> {/* Example style */}
            <Card.Img variant="top" src={card.image} />
            <Card.Text>{card.description}</Card.Text>
          </div>
        </AppModal>
        {!isFavorite && (
          <Button
            style={{ ...favoriteButtonStyle, marginTop: "auto", marginBottom: "10px", alignSelf: "center" }}
            variant="primary"
            onClick={() => handleFavorite(card.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Добавить в избранное
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

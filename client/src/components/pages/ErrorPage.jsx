import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function ErrorPage() {
    return (
        <Container className="text-center mt-5">
          <h1>404</h1>
          <h2>Страница не найдена</h2>
          <p>К сожалению, запрашиваемая вами страница не существует.</p>
          <Button as={NavLink} to="/news" variant="primary">
            Вернуться на главную
          </Button>
        </Container>
      );
    
}

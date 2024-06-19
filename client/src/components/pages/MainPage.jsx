import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function MainPage() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Row>
        <Col className="text-center">
          <h2>Здравствуйте, уважаемый пользователь.</h2>
          <h5 className="d-flex justify-content-center align-items-center">
            Для просмотра новостей&nbsp;
            <NavLink
              to="/auth/signin"
              className="nav-link"
              style={{
                color: "blue",
                textDecoration: "underline",
              }}
            >
              войдите
            </NavLink>
            &nbsp;или&nbsp;
            <NavLink
              to="/auth/signup"
              className="nav-link"
              style={{
                color: "blue",
                textDecoration: "underline",
              }}
            >
              зарегистрируйтесь
            </NavLink>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}

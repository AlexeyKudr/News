import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function SignUpPage({ setUser }) {

  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signup", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
      navigate("/news", { replace: true });
    });
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={signUpHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control name="name" type="text" placeholder="Введите имя" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Введите почту"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Введите пароль"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

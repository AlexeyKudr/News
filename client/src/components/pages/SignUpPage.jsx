import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SignUpPage({signUpHandler}) {
export default function SignUpPage({signUpHandler}) {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
      <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={signUpHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Введите имя"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Почта</Form.Label>
            <Form.Control name="email" type="email" placeholder="Введите почту" />
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

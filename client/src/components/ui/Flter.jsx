import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SearchComponent = ({
  handleFilter,
  keyword,
  setKeyword,
  excludeWord,
  setExcludeWord,
  cards,
}) => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Поиск новостей</h3>
        <Form onSubmit={handleFilter}>
          <Form.Group className="mb-3">
            <Form.Label>Ключевое слово</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите ключевое слово"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Исключить слово</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите слово для исключения"
              value={excludeWord}
              onChange={(e) => setExcludeWord(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Поиск
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchComponent;

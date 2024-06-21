import { Row, Col, Form, Button } from "react-bootstrap";

const SearchComponent = ({
  handleFilter,
  keyword,
  setKeyword,
  excludeWord,
  setExcludeWord,
}) => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5 mb-5">
        <h3 className="text-center" style={{ color: "#00336c" }}>Поиск новостей</h3>
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
          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "#00336c", border: "1px solid #00336c", width: "100%", transition: "background-color 0.3s ease" }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#00284e"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#00336c"}
          >
            Поиск
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchComponent;

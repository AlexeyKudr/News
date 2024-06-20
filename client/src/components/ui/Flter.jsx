import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SearchComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [excludeWord, setExcludeWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/search', {
        keyword,
        excludeWord,
      });

      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Поиск новостей</h3>
        <Form onSubmit={handleSearch}>
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

        <div className="mt-3">
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map((news) => (
                <li key={news.id}>
                  <strong>{news.title}</strong> - {news.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default SearchComponent;


// Запихнуть в route

 //Обработка запроса на поиск
// app.post('/api/search', async (req, res) => {
//     const { keyword, excludeWord } = req.body;
  
//     try {
//       // Пример поиска по ключевому слову и исключению
//       const whereClause = {
//         title: {
//           [Sequelize.Op.like]: `%${keyword}%`,
//         },
//       };
  
//       if (excludeWord) {
//         whereClause.title[Sequelize.Op.notLike] = `%${excludeWord}%`;
//       }
  
//       const results = await News.findAll({
//         where: whereClause,
//       });
  
//       res.json(results);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import NewsWrapper from '../ui/NewsWrapper';
import axiosInstance from '../api/axiosInstance';
import Filter from '../ui/Flter';

export default function NewsPage() {
  const [cards, setCards] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [excludeWord, setExcludeWord] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news');
        setCards(response.data); // Устанавливаем все новости как изначальные результаты
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews(); // Вызываем функцию загрузки новостей при загрузке компонента
  }, []);

  const handleMore = (id) => {};

  const handleFavorite = (id) => {};

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/news', {
        searchString: keyword,
        excludeWord: excludeWord,
      });
      setCards(response.data);
    } catch (error) {
      console.error('Error filtering news:', error);
    }
  };

  return (
    <>
      <div>NewsPage</div>
      <Filter
        handleFilter={handleFilter}
        keyword={keyword}
        setKeyword={setKeyword}
        excludeWord={excludeWord}
        setExcludeWord={setExcludeWord}
        cards={cards}
      />
      <Row>
        <NewsWrapper
          cards={cards}
          handleMore={handleMore}
          handleFavorite={handleFavorite}
        />
      </Row>
    </>
  );
}

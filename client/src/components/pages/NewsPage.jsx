import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import NewsWrapper from '../ui/NewsWrapper';
import axiosInstance from '../api/axiosInstance';
import Filter from '../ui/Flter';

export default function NewsPage({ user }) {
  const [cards, setCards] = useState([]);
  const [favoriteNewsIds, setFavoriteNewsIds] = useState(new Set());
  const [keyword, setKeyword] = useState('');
  const [excludeWord, setExcludeWord] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    axiosInstance.get('/news').then((res) => setCards(res.data));
    axiosInstance
      .get('/account')
      .then((res) => {
        const favoriteIds = new Set(res.data.map((news) => news.id));
        setFavoriteNewsIds(favoriteIds);
      })
      .catch((error) => console.error('Error fetching favorite news', error));
  }, []);

  const handleFavorite = async (id) => {
    try {
      const response = await axiosInstance.post('/account', {
        userId: user.id,
        newsId: id,
      });
      if (response.status === 201) {
        setFavoriteNewsIds((prevSet) => new Set(prevSet).add(id));
        console.log('Новость добавлена в избранное');
      } else {
        console.error('Ошибка при добавлении новости в избранное');
      }
    } catch (error) {
      console.error('Ошибка при добавлении новости в избранное:', error);
    }
  };

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
          handleFavorite={handleFavorite}
          favoriteNewsIds={favoriteNewsIds}
        />
      </Row>
    </>
  );
}

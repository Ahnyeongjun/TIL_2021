import NewsItem from './NewsItem/NewsItem'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as S from './styles';

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category =${category}`;
                const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=67a258e2d05745e2ab5fedb939d32aa8`
                );

                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [category]);

    if (loading) {
        return <S.NewsListBlock>대기 중..</S.NewsListBlock>;
    }
    if (!articles) {
        return null;
    }

    return (
        <S.NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </S.NewsListBlock>
    );
};

export default NewsList;


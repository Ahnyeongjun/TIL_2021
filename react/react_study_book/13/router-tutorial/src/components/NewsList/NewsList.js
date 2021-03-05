import NewsItem from './NewsItem/NewsItem'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import * as S from './styles';
import usePromise from '../../lib/usePromis';

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=67a258e2d05745e2ab5fedb939d32aa8`);
    }, [category]);


    if (loading) {
        return <S.NewsListBlock>대기 중..</S.NewsListBlock>;
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <S.NewsListBlock>에러 발생!</S.NewsListBlock>
    }

    const { articles } = response.data;
    return (
        <S.NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </S.NewsListBlock>
    );
};

export default NewsList;


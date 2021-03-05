import React from 'react';
import * as S from './style';

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    }
];
const Categories = () => {
    return (
        <S.CategoriBlock>
            {categories.map(c => (
                <Categories key={c.name}>{c.text}</Categories>
            ))}
        </S.CategoriBlock>
    )
}
export default Categories;
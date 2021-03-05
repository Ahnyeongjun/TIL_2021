import React from 'react';
import * as S from './style';

const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;
    return (
        <S.NewsItemBlock>
            {urlToImage &&
                <S.Thumbnail>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </S.Thumbnail>
            }
            <S.Contents>
                <h2>
                    <a href={url} target="_blank" rel="noonpener noreferrer">
                        {title}
                    </a>
                </h2>
            </S.Contents>
        </S.NewsItemBlock>
    )
}
export default NewsItem;
import React from 'react';
import Categores from '../components/Categories/categories';
import NewsList from '../components/NewsList/NewsList';

const NewsPage = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <>
            <Categores />
            <NewsList category={category} />
        </>
    )
}
export default NewsPage;
import React, { useState, useCallback } from 'react';
// import axios from 'axios';
import NewsList from './components/NewsList/NewsList';
import Categories from './components/Categories/categories';

const App = () => {

  const [category, setCategory] = useState('all');
  const onSelect = useCallback(categories => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App; 
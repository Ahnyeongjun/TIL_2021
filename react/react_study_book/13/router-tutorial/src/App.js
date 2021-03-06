import React, { useState, useCallback } from 'react';
import ColorBox from './components/colorbox'
// import axios from 'axios';
import { Route } from 'react-router-dom';
import { colorProvider } from './components/color'
// import NewsPage from './components/NewsPage';
const App = () => {
  return (
    <colorProvider>
      <div>
        <ColorBox />
      </div>
    </colorProvider>
  )
  // return <Route path="/:category?" component={NewsPage} />;
};

export default App;
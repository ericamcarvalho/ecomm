import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layout/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
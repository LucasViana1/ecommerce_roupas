import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
// import ModalCart from './components/ModalCart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      {/* <ModalCart /> */}
    </BrowserRouter>
  );
}

export default App;

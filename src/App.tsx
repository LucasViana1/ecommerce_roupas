import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

import Routes from './routes';
import Header from './components/Header';
// import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      {/* <Router history={history}> */}
      <BrowserRouter>
        <Header />
        <Routes />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

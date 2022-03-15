import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import galleryReducer from './galleryState';
import counterReducer from './counterState';
import { logger } from 'redux-logger';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    counter: counterReducer
  },
  //middleware: [...getDefaultMiddleware(), logger]
  //middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

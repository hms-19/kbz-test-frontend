import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import '@splidejs/react-splide/css';
import { Provider } from 'react-redux';
import { store } from './features/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
       <BrowserRouter>
          <App />
       </BrowserRouter>
      </Provider>
  </React.StrictMode>
);

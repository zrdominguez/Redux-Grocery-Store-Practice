import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { populateProduce } from './store/produce';
import { addToCart, removeFromCart } from './store/cart';

const store = configureStore()

if (import.meta.env.MODE !== "production") {
  window.store = store;
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

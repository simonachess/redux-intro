import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import './index.scss';
import App from './App.jsx';
import { Provider } from 'react-redux'
import store from './Store'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


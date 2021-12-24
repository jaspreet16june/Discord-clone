import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userReducer from "./redux/reducer/userReducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let myStore = createStore(userReducer);
ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

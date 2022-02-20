import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store";


const display = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

display()
store.subscribe(display);
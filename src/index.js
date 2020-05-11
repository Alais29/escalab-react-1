import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  //BrowserRouter funciona para las versiones nuevas y antiguas de react, mientras que el que trae por defecto solo funciona para las mas nuevas
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

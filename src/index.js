import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    {/* //BrowserRouter funciona para las versiones nuevas y antiguas de react, mientras que el que trae por defecto solo funciona para las mas nuevas */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

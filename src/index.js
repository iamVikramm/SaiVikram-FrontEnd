import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import Data from './reducers';
import App from './Components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(Data);

root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);



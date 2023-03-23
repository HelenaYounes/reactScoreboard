import React from 'react';
import ReactDOM from 'react-dom/client';
import {PlayersProvider} from './context/PlayersContext';
import App from './components/App.js';
import './App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayersProvider>
      <App />
    </PlayersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

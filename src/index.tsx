import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import "./plugins/tailwind.css";
import "./assets/style/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

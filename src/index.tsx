import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/styles.css';
import { Card } from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

reportWebVitals();

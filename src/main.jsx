// src/main.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  /* App.js를 가져온것임 */  /*  ./  같은폴더 안에서  */
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);


reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import AboutPage from './pages/AboutPage/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <h1>This is a placeholder. Let's get this rebuild done!</h1>
    <AboutPage></AboutPage>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

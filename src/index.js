import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
import AboutPage from './pages/AboutPage/AboutPage';
import FAQPage from './pages/FAQPage/FAQPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage/HomePage';
import PastProjectsPage from './pages/PastProjectsPage/PastProjectsPage'

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <div className='gradient'>
      <AboutPage />
      <FAQPage />
      <PastProjectsPage />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

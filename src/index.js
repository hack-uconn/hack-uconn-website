import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './utils/reportWebVitals';
//import AboutPage from './pages/AboutPage/AboutPage';
import FAQPage from './pages/FAQPage/FAQPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage/HomePage';
import NavbarPage from './pages/NavbarPage/NavbarPage'

ReactDOM.render(
  <React.StrictMode>
    <div className='gradient'>
    </div>
    <h1>This is a placeholder. Let's get this rebuild done!</h1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

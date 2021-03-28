import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopBar from './component/TopBar'
import Main from './component/Main'
import reportWebVitals from './reportWebVitals';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





const rootElem = document.getElementById('root')

ReactDOM.render( 
<div>

    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />

</div>, rootElem);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

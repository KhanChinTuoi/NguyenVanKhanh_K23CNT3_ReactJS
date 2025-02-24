import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NvkApp from '../../../Day05/nvk-lesson05/src/Nvkapp';

const nvkroot = ReactDOM.createRoot(document.getElementById('nvkroot'));
nvkroot.render(
  // <React.StrictMode>
    <NvkApp />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

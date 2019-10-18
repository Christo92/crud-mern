import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// Components
import App from './components/App';

// Let's mount
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.querySelector('#root')
);
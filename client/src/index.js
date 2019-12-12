import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// Components
import App from './components/App/App';

// Let's mount
ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.querySelector('#root')
);
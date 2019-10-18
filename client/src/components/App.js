import React, { Component } from 'react';
// Components
import Navigation from './Navigation';
// Styles
import './styles/index.scss';

class App extends Component {
    render() {
        return (
            <div className="app-mern">
            <Navigation />
            </div>
        )
    }
}

export default App;
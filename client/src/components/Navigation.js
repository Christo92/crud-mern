import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
// Components
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import PersonList from './PersonList';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <header className="header">
                    <Link to={'/'} className="header__home">CRUD-MERN</Link>
                    <div className="header__menu">
                        <NavLink className="header__menu__link" to={'/create'} activeClassName="active">Create</NavLink>
                        <NavLink className="header__menu__link" to={'/list'} activeClassName="active">List</NavLink>
                    </div>
                </header>
                    <Switch>
                        <Route exact path="/" component={Home} />   
                        <Route path="/create" component={Create} />
                        <Route path="/edit/:id" component={Edit} />
                        <Route path="/list" component={PersonList} />
                    </Switch>
            </Router>
        )
    }
}

export default Navigation;
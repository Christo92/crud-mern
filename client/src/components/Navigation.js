import React from 'react';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
// Components
import Home from './Home';
import Edit from './Edit';
import PersonList from './PersonList';

function Navigation() {
    return (
        <div>
            <header className="header">
                <Link to={'/'} className="header__home">CRUD-MERN</Link>
                <div className="header__menu">
                    <NavLink className="header__menu__link" to={'/create'} activeClassName="active">Create</NavLink>
                </div>
            </header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={PersonList} />
                <Route path="/edit/:id" component={Edit} />
            </Switch>
        </div>
    )
}

export default Navigation;
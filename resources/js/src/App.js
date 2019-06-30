import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCrypto from './pages/AddCrypto';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <PublicRoute exact path="/login" component={Login} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/add" component={AddCrypto} />
                    <PrivateRoute path="/" component={Dashboard} />
                </Switch>
                
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

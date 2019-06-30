import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default class PublicRoute extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Check for user autorization and redirect
        if (true) {
            return (
                <Route {...this.props} />
            )
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: this.props.location }
                    }}
                />
            )
        }
    }
}

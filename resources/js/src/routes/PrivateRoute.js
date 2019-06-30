import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LoadingScreen from 'react-loading-screen';
import api from '../gateway/api'

export default class PrivateRoute extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: false,
            loading: true,
        };
    }

    async componentWillMount(){

        try {
            let auth = await api.checkUserAuth();

            setTimeout(()=>{
                this.setState({
                    loading: false,
                    auth: auth
                });
            }, 1000)

        } catch (error) {

        }
    }

    render() {

        if (this.state.loading) {
            return (<LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='red'
                textColor=''
                logoSrc=''
                text=''
            ><span></span></LoadingScreen>
            )
        }

        if (!this.state.loading) {
            // Check for user autorization and redirect
            if (this.state.auth) {
                return (
                    <Route {...this.props} />
                )
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: this.props.location }
                        }}
                    />
                )
            }
        }
    }
}

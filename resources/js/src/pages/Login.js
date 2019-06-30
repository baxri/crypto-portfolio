import React, { Component } from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap';
import api from "../gateway/api";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      client_id: '2',
      grant_type: 'password',
      username: 'giorgi.bibilashvili89@gmail.comc',
      password: 'gio123456',
      client_secret: 'pBH7whKW3o243FLPSvsIMXkNb1k7T1qJqztzbFyL',
    }
  }

  async login(event) {
    event.preventDefault();
    this.setState({ loading: true });

    try {

      let result = await api.post('/oauth/token', this.state);
      localStorage.setItem('access_token', result.access_token);
      window.location.href = "/"

    } catch (err) {
      toast.error(err.message);
    } finally {
      this.setState({ loading: false });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <h1 className="text-center"><span style={{color: 'red', fontWeight: 'bold'}}>CRYPTO</span>PORTFOLIO</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 mt-5">
            <form onSubmit={this.login.bind(this)}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="username" onChange={this.handleChange.bind(this)} value={this.state.username} id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" onChange={this.handleChange.bind(this)} value={this.state.password} id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <Button type="submit" onClick={this.login.bind(this)} color="danger col-12">{this.state.loading ? "Authorizing..." : "Login"}</Button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

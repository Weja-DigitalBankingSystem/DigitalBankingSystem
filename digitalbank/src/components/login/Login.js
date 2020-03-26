import React, { Component } from 'react';
import logo from '../img/logo_white.png';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Login extends Component {

  constructor(props)
  {
    super(props);

    this.state = 
    {
      username : "",
      password : ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    const {username, password} = this.state;

    axios
    .post(
      "http://localhost:8080/authenticate",
      {
        username: username,
        password : password
      },
      {withCredentials: true}
    )
    .then(response => {
      console.log(response);
      // if(response.data.jwt == "ok")
      // {
      //   this.props.handleSuccessfulAuth()
      // }
    })
    .catch(error => {
      console.log(error)
    });
    event.preventDefault();
  }
  
  render() {
    return (
    <Form className="login-form" onSubmit={this.handleSubmit}>
      <img src={logo} alt="app logo" id ="logo"/>
      <div className="title text-center">WEJA Bank Application</div>
      <FormGroup>
        <Label className="login-label">Username</Label>
        <Input type="text" id="username" name="username" placeholder="username"/>      
      </FormGroup>
      <FormGroup>
        <Label  className="login-label">Password</Label>
          <Input type="password" id="username" name="username" placeholder="password"/>
      </FormGroup>
      <Button className="btn-lg btn-block" id="button" type="submit">Log in</Button>
      <div className="text-center">
        <a className="login-a" href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a className="login-a" href="/sign-up">Forgot Password</a>
      </div>        
    </Form>
    );
  } 
}

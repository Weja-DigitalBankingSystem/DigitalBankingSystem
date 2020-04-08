import React, { Component } from 'react';
import logo from '../img/logo_white.png';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {

    event.preventDefault();

    let logininfo = 
    {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(logininfo);

    fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(logininfo)      
    })
    .then(      
      response => response.json())
    .then(data => {
      if(data.loginpermitted === "permitted")
      {
        this.props.history.push({
          pathname: '/accountsummary',
          data: data // your data array of objects
        })
      }      
    });
  }
  
  render() {
    return (
    <Form className="login-form" onSubmit={this.handleSubmit}>
      <img src={logo} alt="app logo" id ="logo"/>
      <div className="title text-center">WEJA Bank Application</div>
      <FormGroup>
        <Label className="login-label">Username</Label>
        <Input type="text" name="username" placeholder="username" value={this.state.username} onChange={e =>this.setState({ username: e.target.value})}/>      
      </FormGroup>
      <FormGroup>
        <Label  className="login-label">Password</Label>
          <Input type="password" name="password" placeholder="password" value={this.state.password} onChange={e =>this.setState({ password: e.target.value})}/>
      </FormGroup>
      <Button className="btn-lg btn-block" id="button" type="submit" name="action">Log in</Button>
      <div className="text-center">
        <a className="login-a" href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a className="login-a" href="/sign-up">Forgot Password</a>
      </div>        
    </Form>
    );
  } 
}

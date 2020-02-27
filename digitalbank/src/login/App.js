import React, { Component } from 'react';
import logo from '../img/logo_white.png';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class App extends Component {
  render() {
    return (
         <Form className="login-form">
          <img src={logo} alt="app logo" id ="logo"/>
          <div class="title text-center">WEJA Bank Application</div>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="email"/>
          
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
            <Input type="password" placeholder="password"/>
          </FormGroup>
          <Button className="btn-lg btn-block" id="button">Log in</Button>
          <div className="text-center">
            <a href="/sign-up">Sign up</a>
            <span className="p-2">|</span>
            <a href="/sign-up">Forgot Password</a>        

        </div>
        
      </Form>
    );
  }
 
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Form className="login-form">
        <h1><span className="font-weight-bold"></span>WEJA Bank App</h1>
        <h2>Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="email"/>
          
        </FormGroup>
        <FormGroup>
        <Label>Password</Label>
          <Input type="password" placeholder="password"/>
        </FormGroup>
        <Button className="btn-lg btn-dard btn-block">Log in</Button>
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

import React, { Component } from 'react';
import logo from '../img/logo_white.png';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


/**
 * note: make axios process cross origin
 */
axios.interceptors.response.use(function (response) {
  return response.data;//extract data
}, function (error) {
  return Promise.reject(error);
})
const joinPath = (...paths) => paths.map(it=> it.replace(/^\/|\/$/g, '')).join('/')

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      error: null
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state
    const base_url = 'https://apisandbox.openbankproject.com/'
    const url =  joinPath(base_url, '/my/logins/direct')
    axios({
      url,
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `DirectLogin username="${username}",password="${password}",consumer_key="dnfci5pp3emwx1p2wiee0nn4j2iva2r3iol00hhe"`
      }
    }).then(result => {
      this.setState({'token': result.token, 'error': null});
      localStorage.setItem('token',result.token)
    }).catch(this.error_handler)
  }
  
  render() {
    return (
      <div className="container">
        {
            this.state.token ?
            this.props.history.push({
              pathname: '/accountsummary',
            })
            :
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
          }


      </div>
    );
  } 
}

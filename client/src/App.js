import React, { Component } from 'react';
import './App.css';
import loginWithFacebook from './img/loginWithFacebook.png';
import Auth from '../src/utils/autho';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar.js';

const auth = new Auth();

class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      userData : {name : undefined}
    }
  }
  handleClick = () => {
    auth.login();
    auth.handleAuthentication();
  }
  // }
  // handleAuthentication = () => {
  //   auth.handleAuthentication();
  // }
  // getInfoUser = () => {
  //   api.get('/userinfo').then(res => console.log(res));
   
  // }
  render() {
    return (
      <div className="App">
      <AppNavbar />
      <h1>Hello</h1>
      <img src={loginWithFacebook} alt="Login with facebook button" onClick={this.handleClick}/>
      {/* <button onClick={this.handleClick}>login with Facebook</button> */}
        {/* <button onClick={this.handleAuthentication}>Aunthentication with Facebook</button>
        <button onClick={this.getInfoUser}>get user's info</button> */}
        <i class="fab fa-github"></i>
      </div>
    );
  }
}

export default LogIn;

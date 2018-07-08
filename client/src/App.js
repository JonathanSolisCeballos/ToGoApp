import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar.js';
import Auth from '../src/utils/autho';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, CardTitle, CardText,Row, Col }  from 'reactstrap';
import api from './utils/apifb'
const auth = new Auth();

class LogIn extends Component {
  constructor(){
    super();
    this.state = {
      user : {}
    }

    this.fetchData = this.fetchData.bind(this);
  }

  handleClick = async () => {
    await auth.login();
    auth.handleAuthentication();

  }

  handleLogout() {
    auth.logout();
    window.location.reload();
  }

  isAuthenticated() {
    return auth.isAuthenticated();
  }

  fetchData() {
    return api.get('/userinfo').then(res => this.setState({user: res.data})).catch(console.log);
  }

  componentDidMount(){
    if(this.isAuthenticated())
    this.fetchData();
        
    
  }

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <Card body outline color="success" className="logincard">
      <Row>
      <Col sm="6">
        <Card body body outline color="primary" className="cardfb">
          <CardTitle>INICIAR SESION EN FACEBOOK</CardTitle>
          <CardText>Inicia sesión en facebook para ingresar fácilmente a nuestra plataforma</CardText>
            {
                !this.isAuthenticated() &&
                <Button className="fblogin login" onClick={this.handleClick}></Button>
            }
        </Card>
      </Col>
      <Col sm="6">
        <Card body body outline color="danger" className="cardfb">
          <CardTitle>INICIAR SESIÓN CON GOOGLE</CardTitle>
          <CardText>Inicia sesión en google para ingresar fácilmente a nuestra plataforma.</CardText>
          <Button className="glogin login"></Button>
        </Card>
      </Col>
    </Row>
      </Card>
      {
        this.isAuthenticated() && 
        <h1>Hello {this.state.user.name}!</h1>
      }
      {
        this.isAuthenticated() && 
        <img src={this.state.user.picture} alt="userPhoto" />
      }
      

      {/* <button onClick={this.handleClick}>login with Facebook</button> */}
        {/* <button onClick={this.handleAuthentication}>Aunthentication with Facebook</button>
        <button onClick={this.getInfoUser}>get user's info</button> */}
        <Button color="danger" onClick={this.handleLogout} className="btnlogout">Log out</Button>{' '}
        {/* <button onClick={this.handleLogout}>log out</button> */}
        {/* <button onClick={this.fetchData}>fetchData</button> */}
      </div>
    );
  }
}
export default LogIn;

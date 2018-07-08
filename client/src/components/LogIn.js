import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText,Row, Col }  from 'reactstrap';
import Autho from '../utils/autho';
import api from '../utils/apifb';
const auth = new Autho();


class LogIn extends Component {
    constructor(){
        super();
        this.state = {
          user : {}
        }
    
        this.fetchData = this.fetchData.bind(this);
        LogIn.isAuthenticated = this.isAuthenticated();
      }
    
      handleClick = async () => {
        await auth.login();
        auth.handleAuthentication();
    
      }
    
      handleLogout() {
        auth.logout();
        window.location.reload();
      }
    
      fetchData() {
        return api.get('/userinfo').then(res => this.setState({user: res.data})).catch(console.log);
      }
    
      componentDidMount(){
        if(this.isAuthenticated())
        this.fetchData();
            
        
      }
    isAuthenticated(){
        return auth.isAuthenticated();
    }
  render() {
    return (
      <div>
        <Card body outline color="success" className="logincard">
      <Row>
      <Col sm="6">
        <Card body outline color="primary" className="cardfb">
          <CardTitle>INICIAR SESION EN FACEBOOK</CardTitle>
          <CardText>Inicia sesión en facebook para ingresar fácilmente a nuestra plataforma</CardText>
            { 
                !this.isAuthenticated() &&
                <Button className="fblogin login" onClick={this.handleClick}></Button>
            }
        </Card>
      </Col>
      <Col sm="6">
        <Card body outline color="danger" className="cardfb">
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
    
        <Button color="danger" onClick={this.handleLogout} className="btnlogout">Log out</Button>
      </div>
    )
  }
}
export default LogIn;
import React, { Component } from 'react';
import './App.css';
import './estilos.css'
import AppNavbar from './components/AppNavbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn';
import Floatingicon from './components/Floating-icon';
import Footer from './components/Footer';
import Masinfo from './components/Masinfo';
import Mainslider from './components/Mainslider';
import Quienessomos from './components/Quienessomos';
import Info from './components/Info';
import $ from 'jquery';

class App extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('#fixed-action-btn').floatingActionButton();});
        $(document).ready(function(){
            $('.slider').slidenav();
        });
        $(document).ready(function(){
            $('.slider').slider();
        });
      
      }
  

  render() {
    return (
      <div className="App">
      <AppNavbar />
      {/* <LogIn /> */}
      <Mainslider />
      <Quienessomos/>
      <Floatingicon />
      <Info />
      <Masinfo />
      <Footer />
      </div>
    );
}
}
export default App;

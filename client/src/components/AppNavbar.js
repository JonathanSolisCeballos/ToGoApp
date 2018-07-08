import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <section id="inicio">
        <nav className="orange lighten-1">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#quienessomos">¿Quiénes somos?</a></li>
                    <li><a href="#masinfo">Más información</a></li>
                    <li><a href="#">Iniciar Sesión</a></li>
                </ul>
        </nav>

        <ul className="sidenav" id="mobile-demo" id="sidenav">
            <li><a href="#">Inicio</a></li>
            <li><a href="#quienessomos">¿Quiénes somos?</a></li>
            <li><a href="#masinfo"></a>Más información</li>
            <li><a href="#">Iniciar Sesión</a></li>
        </ul>
    </section>
      </div>
    );
  }
}

export default AppNavbar;
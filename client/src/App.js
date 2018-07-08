import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn';

class App extends Component {

  render() {
    return (
      <div className="App">
      <AppNavbar />
      <LogIn />

      </div>
    );
  }
}
export default App;

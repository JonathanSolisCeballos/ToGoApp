import React, { Component } from 'react';
import logo from './logo.svg';
import prueba from './vjs.png';
import './App.css';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    removeTodo(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        });
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return ( 
                <div className = "col-md-5" key = { i } >
                <div className = "card mt-4" >
                <div className = "card-title text-center" >
                <h3> { todo.title } </h3> 
                <span className = "badge badge-pill badge-danger ml-2"> { todo.priority } </span> 
                </div>
                <div className = "card-body" > { todo.description } </div> 
                <div className = "card-footer" >
                <button className = "btn btn-danger" onClick = { this.removeTodo.bind(this, i) }> Delete </button> 
                </div>
                </div> 
                <div class="col-sm-6 col-md-4">

    <div className="thumbnail" key = { i } >
      <img src={prueba} alt="..."/>
      <div className="caption">
        <h3>{ todo.title }</h3>
        <p> { todo.priority } </p>
        <p> { todo.description } </p>
        <p><button className = "btn btn-danger" onClick = { this.removeTodo.bind(this, i) }> - </button>  
        <a href="#" classNAme="btn btn-default" role="button"> + </a></p>
      </div>
    </div>
  </div>


                </div>
                
            )
        });

        // RETURN THE COMPONENT
        return ( 
            <div className = "App" >
            <nav className = "navbar navbar-dark bg-dark" >
            <a className = "navbar-brand" href = "/" > Tasks 
            <span className = "badge badge-pill badge-light ml-2" > { this.state.todos.length } 
            </span> 
            </a > 
            </nav>

{/* Menú */}
            <nav className = "navbar navbar-dark" >
              <a className = "navbar-brand" href = "#ihhj" > ToGo </a> 
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link" href="#qs">¿QUIÉNES SOMOS?</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contacto">CONTACTO</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#jh">INICIAR SESIÓN</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#hv">REGISTRARSE</a>
                    </li>
                </ul>
            </nav>

      {/*  */}

            <div className = "container" >
            <div className = "row mt-4" >
            <div className = "col-md-4 text-center" >
            <img src = { logo } className = "App-logo" alt = "logo" />
            <TodoForm onAddTodo = { this.handleAddTodo } > </TodoForm> </div>
            <div className = "col-md-8" >
            <div className = "row" > { todos } </div> 
            </div > 
            </div> 
            </div > 
            </div>
        );
    }
}

export default App;
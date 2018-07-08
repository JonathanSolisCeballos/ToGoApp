import React, { Component } from 'react';
import './App.css';
import { todos } from './bt.json';

import bmM from './menu/big-mac_Mcds.png';
import cafeM from './menu/cafe_Mcds.jpg';
import ccM from './menu/coca-cola_Mcds.png';
import hdcqM from './menu/hamb-doble-con-queso_Mcds.png';
import mcfoM from './menu/mc-flurry-oreo_Mcds.png';
import mcpsoM from './menu/mc-patatas_Mcds.png';
import mcpM from './menu/mc-pollo_Mcds.png';
import palfM from './menu/papas-a-la-francesa_Mcds.png';
import payM from './menu/pay_Mcds.png';

import bt from './menu/banana-tempura.png';
import crepa from './menu/crepa.png';
import gyoza from './menu/gyoza.jpg';
import msh from './menu/misoshiro.jpg';
import pj from './menu/paella-japonesa.jpg';
import sun from './menu/sunomono.jpg';
import sushi from './menu/sushi.jpg';
import tyk from './menu/teriyaki.jpg';
import tkts from './menu/torikatsu.jpg';

const productosm= [hdcqM, cafeM, bmM, payM, mcfoM, ccM, mcpsoM, palfM, mcpM];
const productosbt= [bt, sun, pj, tkts, tyk, sushi, crepa, gyoza, msh];

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos,
            product: '',
            company: '',
            description: '',
            price: '',
            total: ''
        };
          this.handleAddTodo = this.handleAddTodo.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.countTotal = this.countTotal.bind(this);
    }
    
    removeTodo(index) {
      var total1=parseInt(this.state.todos[index].total);

        if(total1>0){
            this.state.todos[index].total=total1-1;
         }else{
            this.state.todos[index].total=0;
        }
    }

    handleSubmit(e) {
      e.preventDefault();
      this.setState({
        product: '',
        company: '',
        description: '',
        price: '',
        total: ''
      });
  }

    addFood(index) {
      var total1=parseInt(this.state.todos[index].total);
        if(total1<10){
            this.state.todos[index].total=total1+1;
          }else if(total1==10){
            this.state.todos[index].total=10;
        }
     }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    countTotal(){
      var index=0;
      var ct=[];
      var cn=[];
      var cp=[];

      for(var i=0; i<this.state.todos.length; i++){
        if(this.state.todos[i].total>0){
          console.log(this.state.todos[i].product);

          ct.push(this.state.todos[i].total);
          cn.push(this.state.todos[i].product);
          cp.push(this.state.todos[i].price);
        }
      }

    }

    render() {
      const todos = this.state.todos.map((todo, i) => {
          return ( 
              <div className = "col-md-5" key = { i } >
           {/* Prueba del menú */}
                <form onSubmit = { this.handleSubmit } className = "card-body" >
                  <div className="thumbnail" key = { i } >
                    <img src= { productosbt[i] } alt="..."/>
                    <div className="caption">
                      <h3>{ todo.product }</h3>
                      <p> { todo.description } </p>
                      <p> $ { todo.price } </p>
                      <p><button type="submit" className = "btn btn-danger" onClick = { this.removeTodo.bind(this, i)} > - </button> 
                      <span className = "badge" > { this.state.todos[i].total } </span>  
                      <button className = "btn btn-success" onClick = { this.addFood.bind(this, i) }> + </button></p>
                    </div>
                  </div> 
                 </form > 
                </div>
            )
        });

        return ( 
            <div className = "App" >
          {/* Nav */}
              <nav className = "navbar" >
                <a className = "navbar-brand" href = "#ihhj" > ToGo </a> 
              </nav>
          {/*  */}
              <div className = "container" >
              <div className = "col-md-8 text-center" >
              <div className = "row" > { todos } </div> 
              </div></div> 
  <button type="button" class="btn btn-default" onClick={ this.countTotal }>Resumen de compra</button>
            </div>
        );
    }
}
export default App;
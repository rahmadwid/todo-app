import './App.css';
import React, {Component} from 'react';
import Moment from 'moment';
import Header from './Header'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = { todos : [] }
  }

  addTodo = (e) => {
    e.preventDefault();

    let jam = this.refs.jam.value
    let aktivitas = this.refs.aktivitas.value

    this.state.todos.push({jam, aktivitas})

    this.setState({ todos: this.state.todos})

    this.refs.formulir.reset()
    this.refs.jam.focus()
  }

  removeTodo = (i) => {
    this.state.todos.splice(i,1)
    this.setState({ todos: this.state.todos})
  }


render() {
  return (
    <div className='wrapper'>
      <Header />
      <form ref="formulir" class="row g-3">
       <div class="col-auto">
        <input type="text" className='form-control' ref="jam" placeholder='jam aktivitas'/>
       </div>
       <div class="col-auto">
        <input type="text" className='form-control' ref="aktivitas" placeholder='jenis aktivitas'/>
       </div>
       <div class="col-auto">
        <button onClick={this.addTodo} className='btn btn-info' >simpan</button>
       </div>
      </form>
      <hr/>
      <div className='list' >
        <ul>
        <TransitionGroup className="todo-list">
          {this.state.todos.map((data, i)=>
           <CSSTransition
           key={i}
           timeout={500}
           classNames="item"
         >
          <li >
            <div >
              <button onClick={()=>this.removeTodo(i)}className='btn btn-outline-danger'>hapus</button> {data.jam} : {data.aktivitas}
            </div>
            <hr />
          </li>
          </CSSTransition>
          )}      
          </TransitionGroup>    
        </ul>
      </div>
    </div>
  )}};

export default App;

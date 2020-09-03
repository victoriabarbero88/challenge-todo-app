import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";





import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import UpdateTodo from './components/UpdateTodo';

class App extends Component {
  render() {
    return (
      <div >
        <AddTodo />
        <TodoList />
       <UpdateTodo />
        
      </div>
    );
  }
}

export default App;

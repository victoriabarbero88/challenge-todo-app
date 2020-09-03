import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";





import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import UpdateTodo from './components/UpdateTodo';
import TodoDetail from './components/TodoDetail';

class App extends Component {
  render() {
    return (
      <div >
      
       
        <Switch>
          <Route exact path='/' component={TodoList}/>
          <Route exact path='/todos' component={AddTodo}/>
          <Route exact path='/todos/edit/:id' component={UpdateTodo}/>
          <Route exact path='/todos/:id' component={TodoDetail}/>
         
        </Switch>
        
      </div>
    );
  }
}

export default App;

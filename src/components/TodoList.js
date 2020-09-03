import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import UpdateTodo from "./UpdateTodo"
import AddTodo from './AddTodo';



class TodoList extends Component {
  constructor() {
    super();
      this.state = {listOfTodos: []};
  }
  getAllTodos = () => {
    axios.get('http://localhost:4000/api/v1/todos').then(responseFromApi => {
      this.setState({
        listOfTodos: responseFromApi.data
      });
    });
  };
  deleteTodo = (todoId) => {

    axios
      .delete(`ttp://localhost:4000/api/v1/`)
      .then (() =>this.getAllTodos()) 
      .catch(err => {
        console.log(err);
    });
  }
  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    return (
      <div>
        
        <div>
          {this.state.listOfTodos.map(todo => {
            return (
              <div key={todo._id}>
                <Link to={`/todos/${todo._id}`}>
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                  <button className='button' onClick={() => this.deleteTodo(todo._id)} >Delete</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default TodoList;
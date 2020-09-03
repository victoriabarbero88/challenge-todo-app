import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
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
      .delete(`http://localhost:4000/api/v1/todos/${todoId}`)
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
        <AddTodo />
        <div>
          {this.state.listOfTodos.map(todo => {
            return (
              <div key={todo._id}>
                <Link to={`/todos/${todo._id}`}>
                  <h2>{todo.title}</h2>
                  <p>{todo.body}</p>
                </Link>
                <button className='button' onClick={() => this.deleteTodo(todo._id)} >Delete</button>
                
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default TodoList;
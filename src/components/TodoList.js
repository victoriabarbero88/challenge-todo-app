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
  handleFormSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    const body = this.state.body;
    console.log(body)
    axios
      .put(`http://localhost:4000/api/v1/todos/${this.state._id}`, {
        title,
        body
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };
  
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };

  render() {
    return (
      <div>
        <AddTodo />
        <div className="list">
          {this.state.listOfTodos.map(todo => {
            return (
              <div key={todo._id}>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="form">
                      <input type="text" name="title" value={todo.title} onChange={e => this.handleChange(e)} />
                      <textarea  name="body" value={todo.body} onChange={e => this.handleChange(e)}/>
                      <input type="submit" value="Submit" className="button" />
                    </div>
                  </form>  
                <Link to={`/todos/edit/${todo._id}`}>
                  <button className='button'>Edit</button>
                </Link>
                <button className='button' onClick={() => this.deleteTodo(todo._id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default TodoList;
import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



class TodoDetail extends Component {
  constructor() {
    super();
      this.state = {};
  }

  componentDidMount() {
    this.getSingleTodo();
  }

  getSingleTodo = () => {
    const { params } = this.props.match;
    axios
    .get(`http://localhost:4000/api/v1/todos/${params.id}`)
    .then(responseFromApi => {
      const theTodo = responseFromApi.data;
      this.setState(theTodo);
    })
    .catch(err => {
      console.log(err);
    });
  };
  

  render() {
    return (
      <div>
        <div>
          <Link to={`/todos/edit/${this.state._id}`}>
            <h2>{this.state.title}</h2>
            <p>{this.state.body}</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default TodoDetail;
import React, { Component } from "react";
import axios from "axios";


class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { params } = this.props.match;
    
    axios
      .get(`http://localhost:4000/api/v1/todos/${params.id}`)
      .then(resonseFromApi => {
        const theTodo = resonseFromApi.data;
        this.setState(theTodo);
      })
      .catch(err => {
        console.log(err);
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    const body = this.state.body;

    const { params } = this.props.match;
   

    axios
      .put(`http://localhost:4000/api/v1/todos/${params.id}`, {
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
      <div className="edit">
       
        <form onSubmit={this.handleFormSubmit}>
          <div className="Div">
            
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} />
           
            <textarea  name="body" value={this.state.body} onChange={e => this.handleChange(e)}/>
            
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateTodo;

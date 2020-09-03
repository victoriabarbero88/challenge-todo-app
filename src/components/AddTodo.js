import React, { Component } from "react";
import axios from "axios";


class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
     
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;

    axios
      .post(`http://localhost:4000/api/v1/todos`, {title, body})
      .then(() => {       
        this.setState({title: "", body: ""})
        
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value });
  };


  render() {
    return (
      <div className="add">
        <h2>To Do + </h2>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form">
              
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={e => this.handleChange(e)}
                placeholder="Title"
              />
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={e => this.handleChange(e)}
                placeholder="Body"
              />

              <input type="submit" value="Submit" className="button"/>
    
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTodo;
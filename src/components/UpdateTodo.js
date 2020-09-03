import React, { Component } from "react";
import axios from "axios";


class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const todoId = this.props.id;
    
    axios
      .get(`http://localhost:4000/api/v1/todos/${todoId}`)
      .then(resonseFromApi => {
        const theTodo = resonseFromApi.data;
        //console.log(thePet)
        this.setState(theTodo);
        //console.log(this.state)
      })
      .catch(err => {
        console.log(err);
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const title = this.state.title;
    const body = this.state.body;


    const todoId = this.props.match.params.id;
   

    axios
      .put(`http://localhost:4000/api/v1/todos/${todoId}`, {
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
          
            <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)}/>
            
            <textarea  name="body" value={this.state.body} onChange={e => this.handleChange(e)} className="Divtext"/>
            
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateTodo;

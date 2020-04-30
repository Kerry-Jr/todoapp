import React, { Component } from 'react';
import axios from 'axios';
class TodoCard extends Component {
  state = {
    todo: {
      text: '',
      completed: '',
      id: '',
    },
    inputText: ''
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/todos/${this.props.match.params.todoId}`);
      this.setState({ todo: data });
    } catch (e) {
      console.log(e);
    }
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleUpdateText = async event => {
    try {
      const { data } = await axios.patch(`/api/todos/${this.props.match.params.todoId}/updatetext`, { text: this.state.inputText });
      this.setState({ todo: data, inputText: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleDelete = async () => {
    try {
     await axios.delete(`/api/todos/${this.props.match.params.todoId}`);
     this.props.history.push('/todos');
    } catch (error) {
      console.log(error);
    }
  }





  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.state.todo.text}</p>
        <p>{this.state.todo.completed}</p>
        <p>{this.state.todo.id}</p>
        <input
        name="inputText"
        value={this.state.inputText}
        onChange={this.handleInputChange}
        />
       <button onClick={this.handleUpdateText}>Update Todo</button>
       <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.props.history.goBack}>Go Back</button>
        

      </div>
      
    );
  }
}
export default TodoCard;
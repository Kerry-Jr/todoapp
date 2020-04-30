import React, { Component } from 'react';
import axios from 'axios';
import RenderTodoList from '../../components/renderTodoList';
// import { withRouter } from 'react-router-dom';

class TodoForm extends Component {
  state = {
    todos: [],
    todoInput: ''
  }
  async componentDidMount() {
    console.log("Inside componentDidMount");
    try {
      const { data } = await axios.get('/api/todos');
      this.setState({ todos: data });
    } catch (e) {
      console.log(e);
    }
  }
 
  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await axios.post('/api/todos', {text: this.state.todoInput });
      const todos = [...this.state.todos, data];
      this.setState({ todos, todoInput: '' });
    } catch (e) {
      console.log(e);
    }
  }

  handleDeleteTodo = async id => {
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    }
  }
  
  handleUpdateTodo = async id => {
    try {
      console.log(id);
      const { data } = await axios.patch(`/api/todos/${id}`);
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    console.log("I rendered inside of Form");
    console.log(this.props);
    return (
      <div>
        {/* { this.renderTodos() } */}
        <RenderTodoList
        items={this.state.todos}
        handleDelete={this.handleDeleteTodo}
        handleUpdate={this.handleUpdateTodo}
        />
        <form>
          <input
            name="todoInput"
            value={this.state.todoInput}
            onChange={this.handleInputChange}
          />
          <button onClick={(e) => this.handleSubmit(e)}>Add todo</button>
        </form>
      </div>
    );
  }
};

export default TodoForm;
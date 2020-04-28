import React, { Component } from 'react';
import axios from 'axios';
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
  renderTodos = () => {
    if (this.state.todos.length === 0) {
      return <h1>No todos yet</h1>;
    } else {
      return (
        <ul>
          {
            this.state.todos.map(todo => {
              return <li
                key={todo.id}
                style={{ color: todo.completed ? 'blue' : 'red' }}
              >{todo.text}</li>
            })
          }
        </ul>
      );
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
  render() {
    console.log("I rendered inside of Form");
    return (
      <div>
        { this.renderTodos() }
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
}
export default TodoForm;
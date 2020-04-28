import React, { Component } from 'react';
import axios from 'axios';
import Counter from './Counter';
import TodoForm from './TodoForm';
class App extends Component {
  render() {
    console.log("I rendered inside of App")
    return (
      <>
        <Counter/>
        <TodoForm/>
        
      </>
    );
  }
}
export default App;


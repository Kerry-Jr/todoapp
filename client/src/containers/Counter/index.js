import React, { Component } from 'react';
class Counter extends Component {
  state = {
    counter: 0
  }
  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    console.log('rendered inside of counter')
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.props.history.goBack}>Go back</button>
        <button onClick={ () => this.props.history.push('/todos') }>Go to todos</button>
      </div>
    );
  }
}
export default Counter;
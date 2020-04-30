import React from 'react';
import { Link } from 'react-router-dom';
const RenderTodoList = props => {
  const renderTodoListItems = () => {
    if (props.items.length === 0) {
      return <h1>No todos yet</h1>;
    } else {
      return props.items.map(todo => {
        return (
          
          <div key={todo.id}>
         
            <Link to={`/todos/${todo.id}`}><li style={{ color: todo.completed ? 'blue' : 'red' }} >{todo.text}</li></Link>
            <button onClick={ () => props.handleDelete(todo.id)}>Delete</button>
            <button onClick={ () => props.handleUpdate(todo.id)}>Update</button>
            
          </div>
        )
      });
    }
  }
  return (
    <ul>
      { renderTodoListItems() }
    </ul>
  );
};
export default RenderTodoList;
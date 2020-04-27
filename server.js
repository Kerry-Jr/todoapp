const express = require('express');
// const mysql = require('mysql2');

// the filename index is a special name in Node
// if we require a folder in Node and we don't specify a file name
// node will automatically look for an index.js inside of that folder


const routes = require('./routes');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'todos_db',
// }).promise();
const PORT = 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// any route that goes to slash,
// have the router object inside of routes
// handle the routing for us

app.use(routes);

// app.get('/api/todos', async (req, res) => {
//   const query = 'SELECT * FROM todos;';
//   try {
//     const [todos] = await connection.query(query);
//     res.status(200).json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });
// app.get('/api/todos/:id', async (req, res) => {
  
// });
// app.post('/api/todos', async (req, res) => {
 
// });
// app.delete('/api/todos/:id', async (req, res) => {
  //  Should delete a todo with that specific id from params AND
  //  Should return to me all of the todos from the database as a response
   
//   });

// app.patch('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;

//   const query5 = 'UPDATE todos SET ? WHERE ?;';

//   try {
//     await connection.query(query5, [{ text }, { id }]);
//     // await connection.query(query5, { text });
//     const  getTodos = 'SELECT * FROM todos WHERE ?;';
//     const [todos] = await connection.query(getTodo, { id });
//     res.json(todos[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
//   //  You will pull out the id from req.params
//   //  You will pull out the text from req.body
//   //  Query your database to update that specific todo by it's id
//   //  You will update the text of that todo into what the user is updating it to
//   //  After you update the data, send back that newly updated data as a response
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { text } = req.body;
//   const getTodoById = 'SELECT * FROM todos WHERE ?;';
//   try {
//     const [todos] = await connection.query(getTodoById, { id });
//     const foundTodo = todos[0];
//     const updateTodoById = 'UPDATE todos SET ?, ? WHERE ?;'; //     await connection.query(updateTodoById, [{ text }, { completed: !foundTodo.completed}, { id }]);
//     const [todosUpdated] = await connection.query(getTodoById, { id });
//     res.json(todosUpdated[0]);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });

// app.get('/api/todos/completed', async (req, res) => {
//   const query = 'SELECT * FROM todos WHERE completed = true;';
//   console.log('I am hit');
//   try {
//     const [todos] = await connection.query(query);
//     console.log(todos);
//     res.json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });
// app.get('/api/todos/incomplete', async (req, res) => {
//   const query = 'SELECT * FROM todos WHERE completed = false;';
//   try {
//     const [todos] = await connection.query(query);
//     res.json(todos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// });


app.listen(PORT);

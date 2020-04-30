const connection = require('../config/connection');

const todoQueries = require('../models/todos/todosQueries');

module.exports = {
  getAllTodos: async (req, res) => {
    const query = 'SELECT * FROM todos;';
    try {
      const [todos] = await connection.query(query);
      res.status(200).json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  addTodo: async (req, res) => {
    const { text } = req.body;
    if (!text) {
      return res.json({ error: 'You must provide text for todos ' });
    }
    try {
      const [response] = await connection.query(todoQueries.addTodo, { text });
      const [todos] = await connection.query(todoQueries.findTodoById, response.insertId);
      res.json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    // const query = 'DELETE FROM todos WHERE ?;';
    try {
      await connection.query(todoQueries.deleteTodoById, id);
      // const getTodos = 'SELECT * FROM todos;';
      const [todos] = await connection.query(todoQueries.findAllTodos);
      res.json(todos);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
  updateTodoById: async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    // const todoId = parseInt(id);
    try {
      const [todos] = await connection.query(todoQueries.findTodoById, id);
      const foundTodo = todos[0];

      const [updatedTodo] = await connection.query(todoQueries.updateTodoCompleted, [!foundTodo.completed, id]);
      console.log(id);
      console.log(updatedTodo);
      if (updatedTodo.affectedRows !== 0) {
        const [allTodos] = await connection.query(todoQueries.findAllTodos);
        res.json(allTodos)
      }


      // console.log(todos);
      // res.status(200).json(todos[0]);
    } catch (e) {
      res.status(403).json({ e });
    }
  },
};

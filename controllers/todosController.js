const connection = require('../config/connection')

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
    // if (!text) {
    //   return res.json({ error: 'You must provide text for todos ' });
    // }
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
  }
};
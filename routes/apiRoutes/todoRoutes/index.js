const router = require('express').Router();
// api/todos prepend to every route inside of here

const todosController = require('../../../controllers/todosController');

router.route('/')
  .get(todosController.getAllTodos)

  .post(todosController.addTodo);

router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById)
  .patch(todosController.updateTodoById);
// .put(todosController.putTodoById)


module.exports = router;


//updateTodoCompletedById: async (req, res) => {
//   const { id } = req.params;
//   try {
//     const [todos] = await connection.query(todoQueries.findTodoById, id);
//     const foundTodo = todos[0];
//     await connection.query(todoQueries.updateTodoCompletedById, [!foundTodo.completed, id]);
//     const [allTodos] = await connection.query(todoQueries.findAllTodos);
//     res.json(allTodos);
//   } catch (e) {
//     res.status(403).json({ e });
//   }
// },
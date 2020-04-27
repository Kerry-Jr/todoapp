const router = require('express').Router();
// api/todos prepend to every route inside of here

const todosController = require('../../../controllers/todosController');

router.route('/')
  .get(todosController.getAllTodos)

  .post(todosController.addTodo);

router.route('/:id')
  .get(todosController.getTodoById)
  .delete(todosController.deleteTodoById);
  // .patch(todosController.patchTodoById)
  // .put(todosController.putTodoById)



module.exports = router;
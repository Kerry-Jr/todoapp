const router = require('express').Router();

const todoRoutes = require('./todoRoutes')

router.use('/todos', todoRoutes);

module.exports = router;
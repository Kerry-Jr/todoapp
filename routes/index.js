const router = require('express').Router(); 

// prepend to every route

const apiRoutes = require('./apiRoutes');


router.use('/api', apiRoutes);

module.exports = router;
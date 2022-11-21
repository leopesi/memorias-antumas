const express = require('express');
const router = express.Router();
const tutorialRoutes = require('./tutorial.routes');

router.use('/', tutorialRoutes);
console.log('1º - routes')
module.exports = router;
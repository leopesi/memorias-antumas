const express = require('express');
const router = express.Router();
const tutorialRoutes = require('./tutorial.routes');
const commentRoutes = require('./comment.routes');

router.use('/', tutorialRoutes, commentRoutes);

module.exports = router;
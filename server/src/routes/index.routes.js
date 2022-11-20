const express = require('express');
const router = express.Router();
//const userRoutes = require('./usuario.routes');

router.use('/', userRoutes);

module.exports = router;
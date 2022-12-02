const routes = require('express').Router();
const postController = require('../controllers/tutorial.controller')

//Rotas
routes.post('/tutorials', postController.create);
routes.get('/tutorials', postController.findAll);
routes.get('/tutorials/:id', postController.findById);
routes.put('/tutorials/:id', postController.update);
routes.delete('/tutorials/:id', postController.deleteById);

//Modulo
module.exports = routes;
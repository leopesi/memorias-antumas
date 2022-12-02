const routes = require('express').Router();
const postComment = require('../controllers/comment.controller')

//Rotas

routes.post('/comments/:id', postComment.create);
routes.get('/comments', postComment.find);
routes.get('/comments/:id', postComment.findById);
routes.put('/comments/:id', postComment.update);
routes.delete('/comments/:id', postComment.deleteById)

//Modulo
module.exports = routes;
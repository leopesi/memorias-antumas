const routes = require('express').Router

//Metodo de peticion
routes.post('/tutorials/add');
routes.get('/tutorials', userController.find);
routes.get('/tutorials/:id', userController.findById);
//routes.put('/tutorials/:id', userController.update);
//routes.delete('/tutorials/:id', checkToken, userController.deleteById);

//Modulo
module.exports = routes;
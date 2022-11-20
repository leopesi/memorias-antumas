const Sequelize = require('sequelize')
require('dotenv').config()

//Credenciais
const DB_DATABASE = process.env.DB_DATABASE
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log('Conectado ao localhost!');
}).catch(function(){
    console.log('Erro na conexão com o localhost!');
})

module.exports = sequelize
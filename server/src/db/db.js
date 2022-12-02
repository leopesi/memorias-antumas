const Sequelize = require('sequelize')
require('dotenv').config()

//Credenciais5ijj nmn 0i6y
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

//sequelize.sync({force: true}).then(() => {console.log('Drop and Resync Db');});

db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.comment = require('../models/comment.model')(sequelize,Sequelize)
db.tutorial = require('../models/tutorial.model')(sequelize,Sequelize)

db.tutorial.hasMany(db.comment, { as: "comment" });
db.comment.belongsTo(db.tutorial, {
  foreignKey: "tutorialId",
  as: "tutorial",
});

module.exports = db;
const db = require("../db/db");

const Sequelize = require('sequelize');

const Tutorial = db.define('tutorial', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
//Criar a tabela caso ainda não esteja criada
//User.sync();


//Verifica e faz alteração na tabela caso exista alguma
//Tutorial.sync({alter: true})

module.exports = Tutorial;
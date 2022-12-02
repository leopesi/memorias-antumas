const db = require("../db/db");
const Tutorial = db.tutorial;

var postController = {
    create: create,
    findAll: findAll,
    findById: findById,
    update: update,
    deleteById: deleteById
}
async function create(req, res) {
    console.log(`req.body.title -> ${req.body.title}`)
    const {title, description} = req.body
        
    if (!title) {
        return res.status(422).json({message: 'O título é obrigatório!'})
    }
    if (!description) {
        return res.status(422).json({message: 'A descrição é obrigatória!'})
    }

    const tutorial = {
        title,
        description
    }
    try {
        await Tutorial.create(tutorial)
        res.status(201).json({msg: "Tutorial criado!"})
        console.log('Tutorial criado com éxito!')
    }
    catch {
        console.log(tutorial)
        res.status(500).json({msg: "Erro no servidor!"})
    }
};

async function findAll(req, res) {
    await Tutorial.findAll().

        then((data) => {
            res.send(data);
            console.log('Lista de tutoriais encontrada.')
        })
        .catch((error) => {
            console.log(error);
        });

};

async function findById(req, res) {
    await Tutorial.findByPk(req.params.id).
        then((data) => {
            res.send(data)
            console.log('Tutorial encontrado.')
        })
        .catch((error) => {
            console.log(error);
        });
};

async function update(req, res) {
    const {title, description} = req.body
    var tutorial = {
        title,
        description,
    };

    Tutorial.update(tutorial, { where: { id: req.params.id } }).
        then((data) => {
            res.status(200).json({
                message: "Updated successfully",
                tutorial: tutorial
                
            })
            console.log('Tutorial atualizado.')
        })
        .catch((error) => {
            console.log(error);
        });
};

async function deleteById(req, res) {
    Tutorial.destroy({ where: { id: req.params.id } }).
        then((data) => {
            res.status(200).json({
                message: "Deleted successfully",
                tutorial: data
            })
        })
        .catch((error) => {
            console.log(error);
        });

};


//Modulo
module.exports = postController;

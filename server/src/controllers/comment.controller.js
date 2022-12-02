const db = require("../db/db");
const Comment = db.comment;

var postComment = {
    create: create,
    find: find,
    findById: findById,
    update: update,
    deleteById: deleteById
}
async function create(req, res) {
    console.log(`req.body.text -> ${req.body.text}`)
    const {name, text} = req.body
        
    if (!name) {
        return res.status(422).json({message: 'O nome é obrigatório!'})
    }
    if (!text) {
        return res.status(422).json({message: 'O texto é obrigatório!'})
    }

    const comment = {
        name,
        text,
        //tutorialId: 1,
    }
    try {
        await Comment.create(comment)
        res.status(201).json({msg: "Comentário criado!"})
        console.log('Comentário criado com éxito!')
    }
    catch {
        console.log(comment)
        res.status(500).json({msg: "Erro no servidor!"})
    }
};

async function find(req, res) {
    Comment.findAll().

        then((data) => {
            res.send(data);
            console.log('Lista de tutoriais encontrada.')
        })
        .catch((error) => {
            console.log(error);
        });

};

async function findById(req, res) {
    Comment.findByPk(req.params.id).
        then((data) => {
            res.send(data)
            console.log('Tutorial encontrado.')
        })
        .catch((error) => {
            console.log(error);
        });
};

async function update(req, res) {
    const {name, text} = req.body
    var tutorial = {
        name,
        text,
    };
    Comment.update(tutorial, { where: { id: req.params.id } }).
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
    Comment.destroy({ where: { id: req.params.id } }).
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
module.exports = postComment;

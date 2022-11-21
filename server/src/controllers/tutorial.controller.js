const CRUD = require('../controllers/crud')

var postController = {
    create: create,
    find: find,
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
        await CRUD.create(tutorial)
        res.status(201).json({msg: "Tutorial criado!"})
        console.log('Tutorial criado com éxito!')
    }
    catch {
        console.log(error)
        res.status(500).json({msg: "Erro no servidor!"})
    }
};
console.log('3º - Controller')
async function find(req, res) {
    CRUD.findAll().

        then((data) => {
            res.send(data);
            console.log('Lista de tutoriais encontrada.')
        })
        .catch((error) => {
            console.log(error);
        });

};

async function findById(req, res) {
    CRUD.findById(req.params.id).
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
    CRUD.update(tutorial, req.params.id).
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
    CRUD.deleteById(req.params.id).
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

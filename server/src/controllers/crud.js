const Tutorial = require('../models/tutorial.model');

var TutorialCrud = {
    findAll: findAll,
    create: create,
    findById: findById,
    update: update,
    deleteById: deleteById,

}

function findAll() {
    return Tutorial.findAll(  );
}

function findById(id) {
    return Tutorial.findByPk(id );
}

function deleteById(id) {
    return Tutorial.destroy({ where: { id: id } });
}

function create(post) {
    var newPost = new Tutorial(post);
    return newPost.save();
}

function update(post, id) {
    return Tutorial.update(post, { where: { id: id } });
}
module.exports = TutorialCrud;
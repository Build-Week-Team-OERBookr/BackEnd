const db = require("../database/db-config");

module.exports = {
    get,
    getById,
    add,
    updateBook,
    remove,
}

function get() {
    return db("books");
}


function getById(id) {
    return db("books")
        .where("id", id).first()

}


function add(book) {
    return db("books")
    .insert(book, "id")
    .then(ids => {
        return getById(ids[0]);
    });
}

function updateBook(id, changes) {
    return db("books")
        .where({ id })
        .update(changes)
        .then(_ => getById(id))
}

function remove(id) {
    return db("books")
        .where('id', id)
        .del();
}

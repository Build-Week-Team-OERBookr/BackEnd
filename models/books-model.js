const db = require("../database/db-config.js");

module.exports = {
    get,
    getById,
    add,
    updateBooks,
    removeBooks,
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
        return findById(ids[0]);
    });
}

function updateBooks(id, changes) {
    return db("books")
        .where({ id })
        .update(changes)
        .then(_ => findById(id))
}

function removeBooks(id) {
    return db("books")
        .where('id', id)
        .del();
}

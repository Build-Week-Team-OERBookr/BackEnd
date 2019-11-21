const db = require("../database/db-config");

module.exports = {
    get,
    getById,
    getByUsername,
    add,
    // authUser,
}; 

function get() {
    return db('users')
        .select('id', 'username', 'password');
};

function getById(id) {
    return db('users')
        .select('id', 'username', 'password')
        .where({ id })
        .first();
};

function getByUsername(username) {
    return db('users')
        .where({ username })
        .first();
};

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => getById(id));
};

// function authUser(condition) {
//     return db('users')
//         .where(condition)
//         .first();
// }
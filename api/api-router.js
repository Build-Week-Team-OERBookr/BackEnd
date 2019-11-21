const router = require("express").Router();

const restricted = require("../auth/restricted");

const authRouter = require("../auth/auth-router");
const usersRouter  = require('../routes/user-router.js');
const bookRouter  = require('../routes/books-router.js');


router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use("/users", restricted, usersRouter);
router.use('/books', bookRouter);

module.exports = router;
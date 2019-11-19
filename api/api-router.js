const router = require("express").Router();

// const restricted = require("../middleware/restricted-middleware");

const authRouter = require("../auth/auth-router");
const usersRouter  = require('../routes/user-router.js');
// const bookRouter  = require('../routes/books-router.js');


router.use('/auth', authRouter);
router.use('/users', usersRouter);
// // router.use("/users", restricted, usersRouter);
// router.use('/textbooks', bookRouter);

module.exports = router;
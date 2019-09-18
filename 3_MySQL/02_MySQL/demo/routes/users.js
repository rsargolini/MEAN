var express = require('express');
var userController = require('../controllers/userController');
var userRouter = express.Router();

// login
// POST: http://localhost:3000/users/
userRouter.post('/', userController.postUserLogin);

module.exports = userRouter;
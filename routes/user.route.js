const express = require('express');
const { createUser, getAllUser } = require('../controllers/user.controller');

const userRouter = express.Router()

// create user
userRouter.post('/', createUser);

// getAll User
userRouter.get('/', getAllUser);





module.exports = userRouter;


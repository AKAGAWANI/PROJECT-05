const express = require('express');
const router = express.Router();

const {createUser} = require('../controllers/userController')
const {userLogin} = require('../controllers/loginController')
const {userAuthentication} = require('../middlewares/authentication')


//User API Route Handlers
router.post('/register', createUser)
router.post('/login', userLogin)

module.exports = router
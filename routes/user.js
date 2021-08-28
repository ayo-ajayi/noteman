const express = require('express'),
router = express.Router(),
userController = require('./../controllers/user');

router
.post('/register', userController.register)
.post('/login', userController.login);

module.exports = router; 
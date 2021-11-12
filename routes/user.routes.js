const router = require('express').Router();
const authController = require('../controllers/auth.controller.Js');
const userController = require ('../controllers/user.controller');


//auth
router.post('/register', authController.signUp);

router.get('/', userController.getAllUsers);

module.exports = router;
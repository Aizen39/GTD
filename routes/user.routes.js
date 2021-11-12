const router = require('express').Router();
const authController = require('../controllers/auth.controller.Js');

//ajout d'un utilisateur
router.post('/register', authController.signUp);

module.exports = router;
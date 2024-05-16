const router = require('express').Router();
const { signupValidation } = require('../1 - configurations/validations');

//controller functions
const {signup, login, edit} = require('../3 - controllers/user');

//API endpoints
//insert new
router.post('/signup', signupValidation(), signup);
//update
router.put('/edit', signupValidation(), edit);
//login
router.post('/login', login);

module.exports = router;
const router = require('express').Router();
const { signupValidation } = require('../configurations/validations');

//controller functions
const {signup, login, edit} = require('../controllers/user');

//API endpoints
//insert
router.post('/signup', signupValidation(), signup);
//update
router.put('/edit', signupValidation(), edit);
//login
router.post('/login', login);

module.exports = router;
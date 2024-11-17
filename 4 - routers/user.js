const router = require('express').Router();
const { signupValidation } = require('../1 - configurations/validations');

//controller functions
const {signup, login, edit, mock} = require('../3 - controllers/user');

//API endpoints
//insert new
router.post('/signup', signupValidation(), signup);
//update
router.put('/edit', signupValidation(), edit);
//login
router.post('/login', login);
//mock tables
router.get('/mock', mock);

module.exports = router;
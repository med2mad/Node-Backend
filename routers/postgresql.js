const router = require('express').Router();
const { bodyValidation, idValidation } = require('../configurations/validations');

//controller functions
const {getAll, add, edit, remove} = require('../controllers/postgresql');

//API endpoints
//Get
router.get('/', getAll);
//Insert
router.post('/', bodyValidation(), add);
//Update
router.put('/:id', idValidation(), bodyValidation(), edit);
//Delete
router.delete('/:id', idValidation(), remove);

module.exports = router;
const router = require('express').Router();
const { bodyValidation, idValidation } = require('../1 - configurations/validations');

//controller functions
const {getAll, add, edit, remove} = require('../3 - controllers/mysql');

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
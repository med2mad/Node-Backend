const router = require('express').Router();
const { bodyValidation, idValidation } = require('../1 - configurations/validations');

//controller functions
const {getAll, add, edit, remove} = require('../3 - controllers/mysql');

//API endpoints
router.get('/', getAll);
router.post('/', bodyValidation(), add);
router.put('/:id', idValidation(), bodyValidation(), edit);
router.delete('/:id', idValidation(), remove);

module.exports = router;
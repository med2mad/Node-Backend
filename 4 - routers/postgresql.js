const router = require('express').Router();
const { bodyValidation, idValidation } = require('../1 - configurations/validations');

//controller functions
const {get, post, put, remove} = require('../3 - controllers/postgresql');

//API endpoints
router.get('/', get);
router.post('/', bodyValidation(), post);
router.put('/:id', idValidation(), bodyValidation(), put);
router.delete('/:id', idValidation(), remove);

module.exports = router;
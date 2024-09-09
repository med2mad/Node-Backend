const router = require('express').Router();
const { bodyValidation, mongooseIdValidation } = require('../1 - configurations/validations');
const mongoSanitize = require('express-mongo-sanitize');
router.use(mongoSanitize());

//controller functions
const {get, post, put, remove} = require('../3 - controllers/mongodb');

//API endpoints
router.get('/', get);
router.post('/', bodyValidation(), post);
router.put('/:id', mongooseIdValidation(), bodyValidation(), put);
router.delete('/:id', mongooseIdValidation(),remove);

module.exports = router;
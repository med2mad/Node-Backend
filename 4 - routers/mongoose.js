const router = require('express').Router();
const { bodyValidation, mongooseIdValidation } = require('../1 - configurations/validations');
const mongoSanitize = require('express-mongo-sanitize');
router.use(mongoSanitize());

//controller functions
const {getAll, add, edit, remove} = require('../3 - controllers/mongoose');

//API endpoints
router.get('/', getAll);
router.post('/', bodyValidation(), add);
router.put('/:id', mongooseIdValidation(), bodyValidation(), edit);
router.delete('/:id', mongooseIdValidation(),remove);

module.exports = router;
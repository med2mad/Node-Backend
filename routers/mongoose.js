const router = require('express').Router();
const { bodyValidation, mongooseIdValidation } = require('../configurations/validations');
const mongoSanitize = require('express-mongo-sanitize');
router.use(mongoSanitize());

//controller functions
const {getAll, add, edit, remove} = require('../controllers/mongoose');

//API endpoints
//Get
router.get('/', getAll);
//Insert
router.post('/', bodyValidation(), add);
//Update
router.put('/:id', mongooseIdValidation(), bodyValidation(), edit);
//Delete
router.delete('/:id', mongooseIdValidation(),remove);

module.exports = router;
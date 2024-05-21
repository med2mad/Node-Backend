const router = require('express').Router();

//controller functions
const {getAll, add} = require('../3 - controllers/snippet');

//API endpoints
router.get('/', getAll);
router.post('/', add);

module.exports = router;
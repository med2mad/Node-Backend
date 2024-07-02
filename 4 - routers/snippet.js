const router = require('express').Router();

//controller functions
const {get, post} = require('../3 - controllers/snippet');

//API endpoints
router.get('/', get);
router.post('/', post);

module.exports = router;
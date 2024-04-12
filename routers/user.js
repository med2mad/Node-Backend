const router = require('express').Router();
const jwt = require('jsonwebtoken');

//controller functions
const {signup, login, edit} = require('../controllers/user');

//API endpoints
//insert
router.post('/signup', signup);
//login
router.post('/login', login);
//update
router.put('/edit', edit);

//block unauthorized user actions
router.post('*', verifyUser); router.put('*', verifyUser); //router.delete('*', verifyUser);

module.exports = router;




function verifyUser(req, res, next) {
    jwt.verify(req.body.token, process.env.jwt_secret, (err, decoded)=>{
        if (err) { res.status(401).send('Action fail (Not Authorized !!)'); }
        else { next() }  
    })
}
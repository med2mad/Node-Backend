const router = require('express').Router();
const {Snippet} = require('../2 - models/Snippet');

//API endpoints

//Insert
router.post('/snippet', (req,res)=>{
    Snippet.create({"_id":req.body._id, "snippet":req.body.snippet, "date":req.body.date, "time":req.body.time, "username":req.body.username, "uri":req.body.uri, "back":req.body.back, "ajax":req.body.ajax, "method":req.body.method})
});

module.exports = router;
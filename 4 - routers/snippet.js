const router = require('express').Router();
const {Snippet} = require('../2 - models/Snippet');

//API endpoints (Insert only)
router.post('/snippet', (req,res)=>{ //no controller file
    Snippet.create({"_id":req.body._id, "snippet":req.body.snippet, "date":req.body.date, "time":req.body.time, "username":req.body.username, "uri":req.body.uri, "back":req.body.back, "ajax":req.body.ajax, "action":req.body.action, "db":req.body.db})
    .then((entry)=>{
        res.json({"newId":entry.id}); //only to send a usless response
    });
});

module.exports = router;
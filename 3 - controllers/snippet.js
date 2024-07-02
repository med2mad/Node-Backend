const Snippet = require('../2 - models/Snippet');

module.exports.
get = (req,res)=>{
    Snippet.findAll({
        order: [['_id', 'DESC']],
    })
    .then((data)=>{
        res.json({"rows":data});
    });
};

module.exports.
post = (req,res)=>{
    Snippet.create({"_id":req.body._id, "snippet":req.body.snippet, "date":req.body.date, "time":req.body.time, "username":req.body.username, "uri":req.body.uri, "back":req.body.back, "ajax":req.body.ajax, "action":req.body.action, "db":req.body.db})
    .then((entry)=>{
        res.json({"newId":entry.id}); //only to send a usless response
    });
};
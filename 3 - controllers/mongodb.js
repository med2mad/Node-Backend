const Profile = require('../2 - models/Mongodb');
require('../1 - configurations/conMongodb'); //mongoose does not need exporting connection object

module.exports.
get = async (req, res)=>{
    const q = {name:{ $regex: escapeRegExp(req.query.name) }};

    const count = await Profile.find(q).countDocuments().exec();

    if(req.query.limit==0){res.json({"rows":[],"count":count});}
    else{
        if (req.query.age) {q.age = req.query.age;}
        Profile.find(q).sort({_id:-1}).select("-__v -timestamp").skip((req.query.page-1)*req.query.limit).limit(req.query.limit).then((data)=>{
            res.json({"rows":data,"total":count});
        });
    }
};

module.exports.
post = (req, res)=>{
    const photo = req.PHOTO_PARSED; //by the time save() finishes there will be no more "req.body"
    req.body.photo = req.PHOTO_PARSED;

    const row = new Profile(req.body);
    row.save().then((data)=>{
        res.json({"newId":data._id, "photo":photo});
    });
};

module.exports.
put = (req, res)=>{
    Profile.findById(req.params.id).then((row)=>{
        row.name=req.body.name;
        row.age=req.body.age;
        row.photo=req.PHOTO_PARSED;

        row.save().then(()=>{
            res.json({"editedId":req.params.id, "photo":req.PHOTO_PARSED})
        });
    });
};

module.exports.
remove = (req, res)=>{
    Profile.findOneAndDelete({"_id":req.params.id}).then(()=>{
        //GET replacement row
        const q = {_id: {$lt: req.query.lasttableid}};
        q.name = {$regex: '.*' + req.query.name + '.*'};
        if (req.query.age) {q.age = req.query.age;}
        
        Profile.find(q).sort({"_id":-1}).select("-__v -timestamp").limit(1).then((data)=>{
            res.json({"deletedId":req.params.id, "rows":data});
        });
    });
};

function escapeRegExp(text) {return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');}
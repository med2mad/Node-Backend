const {Op} = require('sequelize');
const Profile = require('../2 - models/Mysql');

module.exports.
get = async (req, res)=>{
    const whereClause = {name: {[Op.like]:'%'+req.query._name+'%'}};
    if (req.query._age) {whereClause.age = req.query._age;}
    
    Profile.findAndCountAll({
        where: whereClause,
        limit: parseInt(req.query._limit),
        offset:parseInt(req.query._skip),
        order: [['_id', 'DESC']],
    })
    .then((data)=>{
        res.json({"rows":data.rows, "total":data.count});
    });
};

module.exports.
post = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Profile.create({"name":req.body.name, "age":req.body.age, "photo":photo})
    .then((entry)=>{
        res.json({"newId":entry._id, "photo":photo});
    });
};

module.exports.
put = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Profile.update({"name":req.body.name, "age":req.body.age, "photo":photo}, {where:{_id: req.params.id}})
    .then(()=>{
        res.json({"editedId":req.params.id, "photo":photo});
    });
};

module.exports.
remove = (req, res)=>{
    Profile.destroy({where:{_id: req.params.id}})
    .then(()=>{
        const whereClause = {
            _id: {[Op.lt]: parseInt(req.query.lasttableid)},
            name: {[Op.like]: '%'+req.query._name+'%'},
        };
        if (req.query._age) {whereClause.age = req.query._age;}
    
        Profile.findAll({
            where: whereClause,
            order: [['_id', 'DESC']],
        })
        .then((entries)=>{
            res.json({"deletedId":req.params.id, "rows":entries});
        });
    });
};
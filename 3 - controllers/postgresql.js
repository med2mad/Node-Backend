const {Op,fn,col} = require('sequelize');
const Profile = require('../2 - models/Postgres');

module.exports.
get = async (req, res)=>{
    let whereClause = {};
    if (req.query.name) {whereClause.name = {[Op.like]:'%'+req.query.name+'%'};}
    if (req.query.age) {whereClause.age = req.query.age;}
    const limit = (req.query.limit?req.query.limit:0);
    const offset = (req.query.page?(req.query.page-1)*limit:0);
    
    let count = await Profile.findAll({where:whereClause, attributes: [[fn('count', col('_id')), 'total']]});

    Profile.findAll({
        where: whereClause,
        limit: parseInt(limit),
        offset:parseInt(offset),
        order: [['_id', 'DESC']],
    })
    .then((data)=>{
        res.json({"rows":data, "total":count});
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
            name: {[Op.like]: '%'+req.query.name+'%'},
        };
        if (req.query.age) {whereClause.age = req.query.age;}
    
        Profile.findAll({
            where: whereClause,
            order: [['_id', 'DESC']],
        })
        .then((entries)=>{
            res.json({"rows":entries});
        });
    });
};
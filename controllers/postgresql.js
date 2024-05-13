const Sequelize = require('sequelize'); //for Op/fn/col
const {Profile} = require('../models/Postgesql');

module.exports.
getAll = async (req, res)=>{
    const whereClause = {name: {[Sequelize.Op.like]:'%'+req.query._name+'%'}};
    if (req.query._age) {whereClause.age = req.query._age;} 
    
    let count = await Profile.findAll({where:whereClause, attributes: [[Sequelize.fn('count', Sequelize.col('_id')), 'total']]});

    Profile.findAll({
        where: whereClause,
        limit: parseInt(req.query._limit),
        offset:parseInt(req.query._skip),
        order: [['_id', 'DESC']],
    })
    .then((data)=>{
        res.json({"rows":data, "total":count[0].toJSON().total});
    });
};

module.exports.
add = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Profile.create({"name":req.body.name, "age":req.body.age, "photo":photo})
    .then((entry)=>{
        res.json({"newId":entry._id, "photo":photo});
    });
};

module.exports.
edit = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Profile.update({"name":req.body.name, "age":req.body.age, "photo":photo}, {where:{_id: req.params.id}})
    .then(()=>{
        res.json({"photo":photo});
    });
};

module.exports.
remove = (req, res)=>{
    Profile.destroy({where:{_id: req.params.id}})
    .then(()=>{
        const whereClause = {
            _id: {[Sequelize.Op.lt]: parseInt(req.query.lasttableid)},
            name: {[Sequelize.Op.like]: '%'+req.query._name+'%'},
        };
        if (req.query._age) {whereClause.age = req.query._age;}
    
        Profile.findAll({
            where: whereClause,
            order: [['_id', 'DESC']],
        })
        .then((entries)=>{
            res.json(entries);
        });
    });
};
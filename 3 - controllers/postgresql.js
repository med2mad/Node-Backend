const {Op} = require('sequelize');
const sequelize = require('../1 - configurations/conPostgres');
const Model = require('../2 - models/Postgres');

module.exports.
get = (req, res)=>{
    let whereClause = {};
    if (req.query.name) {whereClause.name = {[Op.like]:req.query.name};}
    if (req.query.age) {whereClause.age = req.query.age;}
    const limit = (req.query.limit?req.query.limit:0);
    const offset = (req.query.page?(req.query.page-1)*limit:0);

    const query = {where:whereClause, limit:parseInt(limit), offset:parseInt(offset), order:[['_id', 'DESC']]}

    Model.findAndCountAll(query)
    .then((data)=>{
        const rawSQL = sequelize.dialect.queryGenerator.selectQuery('profile', query);
        res.json({"rows":data.rows, "total":data.count, rawSQL});
    });
};

module.exports.
post = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Model.create({"name":req.body.name, "age":req.body.age, "photo":photo})
    .then((entry)=>{
        res.json({"newId":entry._id, "photo":photo, "rawSQL":"INSERT INTO profiles (name, age, photo) VALUES ('"+req.body.name+"', "+req.body.age+", '"+photo.replace('%20',' ')+"');"});
    });
};

module.exports.
put = (req, res)=>{
    const photo = req.PHOTO_PARSED;

    Model.update({"name":req.body.name, "age":req.body.age, "photo":photo}, {where:{_id: req.params.id}})
    .then(()=>{
        res.json({"photo":photo, "rawSQL":"UPDATE profiles SET name='"+req.body.name+"', age="+req.body.age+", photo='"+photo.replace('%20',' ')+"' WHERE id="+req.params.id+";"});
    });
};

module.exports.
remove = (req, res)=>{
    Model.destroy({where:{_id: req.params.id}})
    .then(()=>{
        const whereClause = {
            _id: {[Op.lt]: parseInt(req.query.lasttableid)},
            name: {[Op.like]: '%'+req.query.name+'%'},
        };
        if (req.query.age) {whereClause.age = req.query.age;}
    
        Model.findAll({
            where: whereClause,
            order: [['_id', 'DESC']],
        })
        .then((entries)=>{
            res.json({"rows":entries, "rawSQL":"DELETE FROM profiles WHERE id="+req.params.id+";"});
        });
    });
};
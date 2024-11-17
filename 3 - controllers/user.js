const User = require('../2 - models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Op} = require('sequelize');

/////////mocking requires///////
const sequelizeMysql = require('../1 - configurations/conMysql');
const sequelizePostgres = require('../1 - configurations/conPostgres');

module.exports.
signup = async (req, res)=>{
    //if username already exists
    const user = await User.findOne({ where: {username:req.body.username} });
    if(user)
        return res.send("exists");
    else{
        const hash = await bcrypt.hash(req.body.password, 10);
        User.create({"username":req.body.username, "hash":hash, "userphoto":(req.PHOTO_PARSED)?req.PHOTO_PARSED:'profile.jpg'})
        .then(async (user)=>{
            await sequelizeMysql.query("CREATE TABLE profiles_"+req.body.username+" LIKE profiles;")
            await sequelizeMysql.query("INSERT INTO profiles_"+req.body.username+" SELECT * FROM profiles;")
            await sequelizePostgres.query("CREATE TABLE profiles_"+req.body.username+" (LIKE profiles INCLUDING ALL);")
            await sequelizePostgres.query("INSERT INTO profiles_"+req.body.username+" SELECT * FROM profiles;")
            const token = jwt.sign({"id":user.id}, process.env.jwt_secret);
            res.send({"username":req.body.username, "userphoto":(req.PHOTO_PARSED)?req.PHOTO_PARSED:'profile.jpg', "token":token});
        });
    }
};

module.exports.
edit = (req, res)=>{
    //if username already exists
    User.findAll({ where: { [Op.and]: [{username:req.body.username},{username:{[Op.ne]:req.body.oldusername}}] } })
    .then(async (users)=>{
        if(users.length > 0){
            return res.send("exists");
        }
        else{
            const hash = await bcrypt.hash(req.body.password, 10); const photo=(req.PHOTO_PARSED)?req.PHOTO_PARSED:'profile.jpg';
            User.update( {"username":req.body.username, "hash":hash, "userphoto":photo}, {where:{"username":req.body.oldusername}} )
            .then(()=>{
                res.send({"username":req.body.username, "userphoto":photo});
            });
        }
    })
};

module.exports.
login = (req, res)=>{
    User.findAll({ where:{username:req.body.username}, raw: true })
    .then(async (users)=>{
        if(users.length == 1){
            const match = await bcrypt.compare(req.body.password, users[0].hash)
            if(match){
                const token = jwt.sign({"id":users[0].id}, process.env.jwt_secret);
                res.json({"user":users[0], "token":token});
            }
            else{ res.json(false); }
        }
        else{ res.send(false); }
    });
};

module.exports.
mock = async(req, res)=>{
    await sequelizeMysql.query("DROP TABLE IF EXISTS profiles_"+req.query.username+";")
    await sequelizeMysql.query("CREATE TABLE profiles_"+req.query.username+" LIKE profiles;")
    await sequelizeMysql.query("INSERT INTO profiles_"+req.query.username+" SELECT * FROM profiles;")
    
    await sequelizePostgres.query("DROP TABLE IF EXISTS profiles_"+req.query.username+";")
    await sequelizePostgres.query("CREATE TABLE profiles_"+req.query.username+" (LIKE profiles INCLUDING ALL);")
    await sequelizePostgres.query("INSERT INTO profiles_"+req.query.username+" SELECT * FROM profiles;")

    res.json({"message":'tables mocked'})
};

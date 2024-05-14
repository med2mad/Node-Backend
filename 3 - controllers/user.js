const {User} = require('../2 - models/User');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.
signup = async (req, res)=>{
    //if username already exists
    const user = await User.findOne({ where: {username:req.body.username} });
    if(user)
        return res.send("exists");
    else{
        const hash = await bcrypt.hash(req.body.password, 10);
        User.create({"username":req.body.username, "hash":hash, "userphoto":(req.PHOTO_PARSED)?req.PHOTO_PARSED:'profile.jpg'})
        .then((user)=>{
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
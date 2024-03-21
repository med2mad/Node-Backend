const {sequelizeMysql, SequelizeClass} = require('../../configurations/mysqlSequelizecon');

const Profile = sequelizeMysql.define('profile', {
    _id:{
        type: SequelizeClass.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: SequelizeClass.STRING,
        validate:{ len:{args:[1,30], msg:"name from 1 to 30 chars !"} },
        allowNull: false,
    },
    age:{
        type: SequelizeClass.INTEGER,
        validate:{ min:{args:18, msg:"under aged !"}, max:{args:99, msg:"over aged !"} },
        allowNull: false,
    },
    photo:{
        type: SequelizeClass.STRING,
        defaultValue: '',
        allowNull: false,
    },
},
{
    createdAt:false,
    updatedAt:false
},
);

module.exports.Profile = Profile;
module.exports.Op = SequelizeClass.Op;
module.exports.fn = SequelizeClass.fn;
module.exports.col = SequelizeClass.col;
module.exports.SequelizeClass = SequelizeClass;
module.exports.sequelizeMysql = sequelizeMysql;
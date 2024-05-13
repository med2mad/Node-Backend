const Sequelize = require('sequelize');
const {sequelizePostgresql} = require('../configurations/postgresqlconn');

const Profile = sequelizePostgresql.define('profile', {
    _id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        validate:{ len:{args:[1,30], msg:"name from 1 to 30 chars !"} },
        allowNull: false,
    },
    age:{
        type: Sequelize.INTEGER,
        validate:{ min:{args:18, msg:"under aged !"}, max:{args:99, msg:"over aged !"} },
        allowNull: false,
    },
    photo:{
        type: Sequelize.STRING,
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
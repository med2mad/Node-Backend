const { DataTypes } = require('sequelize');
const sequelizePostgresql = require('../1 - configurations/postgresqlconn');

const Profile = sequelizePostgresql.define('profile', {
    _id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING,
        validate:{ len:{args:[1,30], msg:"name from 1 to 30 chars !"} },
        allowNull: false,
    },
    age:{
        type: DataTypes.INTEGER,
        validate:{ min:{args:18, msg:"under aged !"}, max:{args:99, msg:"over aged !"} },
        allowNull: false,
    },
    photo:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
    },
},
{
    createdAt:false,
    updatedAt:false
},
);

module.exports = Profile;
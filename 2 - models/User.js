const { DataTypes } = require('sequelize');
const sequelizeMysql = require('../1 - configurations/conMysql');

const User = sequelizeMysql.define('user', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING,
        validate:{ len:{args:[5,10], msg:"name from 5 to 20 chars !"} },
        allowNull: false,
        unique: true,
    },
    userphoto:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
    },
    hash:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    createdAt:false,
    updatedAt:false
}
);

module.exports = User;
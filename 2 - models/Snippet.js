const { DataTypes } = require('sequelize');
const {sequelizeMysql} = require('../1 - configurations/mysqlconn');

const Snippet = sequelizeMysql.define('snippet', {
    _id: DataTypes.INTEGER,

    back: DataTypes.STRING,

    ajax: DataTypes.STRING,

    method: DataTypes.STRING,

    time: DataTypes.INTEGER,

    username: DataTypes.STRING,

    uri: DataTypes.STRING,

    snippet: DataTypes.TEXT,

    date: DataTypes.STRING,
},
{
    createdAt:false,
    updatedAt:false
},
);

module.exports.Snippet = Snippet;
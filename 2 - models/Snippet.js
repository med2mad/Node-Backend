const { DataTypes } = require('sequelize');
const { sequelizeMysql } = require('../1 - configurations/mysqlconn');

const Snippet = sequelizeMysql.define('snippet', {
    _id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    back: DataTypes.STRING,

    ajax: DataTypes.STRING,

    action: DataTypes.STRING,

    db: DataTypes.STRING,

    time: DataTypes.INTEGER,

    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },

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
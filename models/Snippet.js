const Sequelize = require('sequelize');
const {sequelizeMysql} = require('../configurations/mysqlconn');

const Snippet = sequelizeMysql.define('snippet', {
    _id: Sequelize.INTEGER,

    back: Sequelize.STRING,

    ajax: Sequelize.STRING,

    method: Sequelize.STRING,

    time: Sequelize.INTEGER,

    username: Sequelize.STRING,

    uri: Sequelize.STRING,

    snippet: Sequelize.TEXT,

    date: Sequelize.DATE,
},
{
    createdAt:false,
    updatedAt:false
},
);

module.exports.Snippet = Snippet;
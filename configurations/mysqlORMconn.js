const Sequelize = require('sequelize');
const {app} = require('./app');

const sequelizeMysql = new Sequelize("dbname", "root", "", 
    {
        host: "localhost",
        dialect: 'mysql',
        logging: false, //no logs in console
    }
);

sequelizeMysql.authenticate() //test if "new Sequelize()" connected before start listening
.then(()=>{
    app.listen(5010, ()=>{console.log("Mysyql " + 5010);});
})
.catch((err) => {
    console.log('Mysql ORM initial connextion error: ', err);
});

module.exports.sequelizeMysql = sequelizeMysql;
module.exports.SequelizeClass = Sequelize;
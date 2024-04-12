const Sequelize = require('sequelize');

const sequelizeMysql = new Sequelize("dbname", "root", "", 
    {
        host: "localhost",
        dialect: 'mysql',
        logging: false, //no logs in console
    }
);

sequelizeMysql.authenticate() //test if "new Sequelize()" connected
.then(()=>{
    console.log("Mysyql Connected.");
})
.catch((err) => {
    console.error('Mysql ORM connextion error !!');
    console.log(err);
});

module.exports.sequelizeMysql = sequelizeMysql;
module.exports.SequelizeClass = Sequelize;
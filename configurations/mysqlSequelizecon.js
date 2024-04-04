const Sequelize = require('sequelize');
const {app} = require('./expressapp');

// const sequelizeMysql = new Sequelize('railway', 'root', 'xJwoFJaXRoEPUyydYUeqqtfSfmRFmmcV', 
//     {
//         host: 'monorail.proxy.rlwy.net',
//         port: 24314,
//         dialect: 'mysql',
//         logging: false, //no logs in console
//     }
// );
const sequelizeMysql = new Sequelize("test", "root", "", 
    {
        host: "localhost",
        dialect: 'mysql',
        logging: false, //no logs in console
    }
);

sequelizeMysql.authenticate() //test connection made using "new Sequelize" before start listening
.then(()=>{
    app.listen(5010, ()=>{console.log("Mysyql " + 5010);});
})
.catch((err) => {
    console.log('Mysql ORM initial connextion error: ', err);
});

module.exports.sequelizeMysql = sequelizeMysql;
module.exports.SequelizeClass = Sequelize;
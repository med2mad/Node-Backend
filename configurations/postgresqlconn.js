const Sequelize = require('sequelize');

const sequelizePostgresql = new Sequelize("postgres://postgres:5432@localhost/dbname",
    {logging: false} //no logs on consol
);

sequelizePostgresql.authenticate() //test if "new Sequelize()" connected
.then(()=>{
    console.log("Postgresql Connected.");
})
.catch((err) => {
    console.error('Postgresql ORM connextion error !!');
    console.log(err);
});

module.exports.sequelizePostgresql = sequelizePostgresql;
module.exports.SequelizeClass = Sequelize;
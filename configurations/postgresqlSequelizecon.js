const Sequelize = require('sequelize');
const {app} = require('./expressapp');

const sequelizePostgresql = new Sequelize(process.env.postgresConStr,
    {logging: false} //no logs on consol
);

sequelizePostgresql.authenticate() //test connection made using "new Sequelize" before start listening
.then(()=>{
    app.listen(5030, ()=>{console.log("Postgresql " + 5030);});
})
.catch((err) => {
    console.log('Postgresql ORM initial connextion error: ', err);
});

module.exports.sequelizePostgresql = sequelizePostgresql;
module.exports.SequelizeClass = Sequelize;
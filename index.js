const app = require('./1 - configurations/app');

//////////////////auth (mysqlDB->users)//////////////////
const authRouter = require('./4 - routers/user');
app.use(authRouter);

//////////////////////////mysql//////////////////////////
const mysqlRouter = require('./4 - routers/mysql');
app.use('/Mysql', mysqlRouter);

/////////////////////////mongoose/////////////////////////
// const mongooseRouter = require('./4 - routers/mongodb');
// app.use('/Mongodb', mongooseRouter);

////////////////////////postgresql////////////////////////
const postgresqlRouter = require('./4 - routers/postgresql');
app.use('/Postgresql', postgresqlRouter);

//////////////////////////404/////////////////////////////
app.use((req, res)=>{
    res.status(404).json("404 , no routes !!");
});

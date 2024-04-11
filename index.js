const {app} = require('./configurations/app');

///////////////////////auth (5010) (mysql.DB->users)///////////////////////////
const authRouter = require('./auth/router');
app.use(authRouter);

/////////////////////mysql 5010///////////////////////
const mysqlRouter = require('./routers/mysql');
app.use('/mysql', mysqlRouter);

///////////////////mongoose 5020//////////////////////
const mongooseRouter = require('./routers/mongoose');
app.use('/mongoose', mongooseRouter);

//////////////////postgresql 5030/////////////////////
const postgresqlRouter = require('./routers/postgresql');
app.use('/postgresql', postgresqlRouter);

////////////////////404///////////////////////////////
app.use((req, res)=>{
    res.status(404).json("404 , no routes !!");
});
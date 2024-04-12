const {app} = require('./configurations/app');

///////////////////////auth (mysqlDB->users)///////////////////////////
const authRouter = require('./routers/user');
app.use(authRouter);

/////////////////////mysql///////////////////////
const mysqlRouter = require('./routers/mysql');
app.use('/mysql', mysqlRouter);

///////////////////mongoose//////////////////////
const mongooseRouter = require('./routers/mongoose');
app.use('/mongoose', mongooseRouter);

//////////////////postgresql/////////////////////
const postgresqlRouter = require('./routers/postgresql');
app.use('/postgresql', postgresqlRouter);

////////////////////404///////////////////////////////
app.use((req, res)=>{
    res.status(404).json("404 , no routes !!");
});
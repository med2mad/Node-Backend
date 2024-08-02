const app = require('./1 - configurations/app');

//////////////////auth (mysqlDB->users)//////////////////
const authRouter = require('./4 - routers/user');
app.use(authRouter);

////////////////snippets (mysqlDB->snippets)////////////////
const snippetRouter = require('./4 - routers/snippet');
app.use('/snippet', snippetRouter);

//////////////////////////mysql//////////////////////////
const mysqlRouter = require('./4 - routers/mysql');
app.use('/Mysql', mysqlRouter);

/////////////////////////mongoose/////////////////////////
const mongooseRouter = require('./4 - routers/mongoodb');
app.use('/Mongoodb', mongooseRouter);

////////////////////////postgresql////////////////////////
const postgresqlRouter = require('./4 - routers/postgresql');
app.use('/Postgresql', postgresqlRouter);

//////////////////////////404/////////////////////////////
app.use((req, res)=>{
    res.status(404).json("404 , no routes !!");
});
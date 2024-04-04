const {Client}= require('pg');
const {app} = require('./expressapp');

// const pool = new Client({connectionString : process.env.postgresConStr});
const pool = new Client({connectionString : "postgres://postgres:5432@localhost/test"});
// const pool = new Client({connectionString : "postgres://vwvnxbct:XNLTn1mvFz6q4vf0IS5c9iXoSALqn68q@surus.db.elephantsql.com/vwvnxbct"});

pool.connect().then((err) => {
  if (err){console.log("PostgreSQL initial connection error");}
  else{
    app.listen(5030, ()=>{console.log("PostgreSQL " + 5030);});
  }
})

module.exports = pool;
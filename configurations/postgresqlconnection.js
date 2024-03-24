const {Client}= require('pg');
const {app} = require('./expressapp');

const pool = new Client({connectionString : process.env.postgresConStr});

pool.connect().then((err) => {
  if (err){console.log("PostgreSQL initial connection error");}
  else{
    app.listen(5030, ()=>{console.log("PostgreSQL " + 5030);});
  }
})

module.exports = pool;
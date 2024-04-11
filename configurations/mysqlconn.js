const mysql = require('mysql2');
const {app} = require('./app');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbname",
  port: 3306,
});

con.connect((err) => {
  if (err){console.error("Mysyql initial connection error");}
  else{
      app.listen(5010, ()=>{console.log("Mysyql " + 5010);});
  }
});

module.exports = con;
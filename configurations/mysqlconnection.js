const mysql = require('mysql2');
const {app} = require('./expressapp');

// const con = mysql.createConnection({
//   host: process.env.mysql_host, 
//   user: process.env.mysql_user,
//   password: process.env.mysql_password, 
//   database: process.env.mysql_database, 
//   port: 3306,
// });
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3306,
});

con.connect((err) => {
  if (err){console.error("Mysyql initial connection error");}
  else{
      app.listen(5010, ()=>{console.log("Mysyql " + 5010);});
  }
});

module.exports = con;
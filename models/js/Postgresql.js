const con = require('../../configurations/postgresqlconn');

module.exports = class Profile {

    static table='profiles';

    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.photo = data.photo;
    }

    static findAll(q, qCount) {
        return new Promise(function(myResolve, myReject) {
            con.query(qCount, (err, countData)=>{
                con.query(q, (err, rowsData)=>{
                    myResolve({"rows":rowsData.rows,"total":countData.rows[0].count});
                }); 
            });
        }); 
    }

    create() {
        return new Promise((myResolve, myReject)=>{
            con.query("INSERT INTO "+Profile.table+" (name, age, photo) VALUES ('"+ this.name +"', "+ this.age +", '"+ this.photo +"') RETURNING _id;", (err, data)=>{    
                myResolve({"newId":data.rows[0]._id, "photo":this.photo});
            });
        }); 
    }

    static update(id, body, photo) {
        return new Promise(function(myResolve, myReject) {
            con.query("UPDATE "+Profile.table+" SET name='"+ body.name +"', age ='"+ body.age +"', photo='"+ photo +"' WHERE _id='"+ id +"'", (err, data)=>{
                myResolve({"photo":photo});
            })
        });
    }
    
    static delete(id, replacement) {
        return new Promise(function(myResolve, myReject) {
            con.query("DELETE FROM "+Profile.table+" WHERE _id='"+ id +"'", (err, data)=>{
                con.query(replacement, (err, rows)=>{
                    myResolve(rows.rows)
                });
            });
        });
    };
};
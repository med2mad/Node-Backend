const express = require('express');
// const cors = require('cors');
const multer = require('./multer');
const { querySanitizer } = require('../configurations/validations');
const responseTime = require('response-time');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// origin:'http://localhost:8080' 
// app.use(cors({origin:'http://localhost:8080', exposedHeaders:'*'}));//cors + access x-response-time header

// let origins = ['http://localhost:5000','http://localhost:5010','http://localhost:5020','http://localhost:5030','http://localhost:8080','*']
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', origins);
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     next();
//   })

// app.use(cors({origin:function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', origins);
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     next();
//   }
//   , exposedHeaders: '*'}));//cors + access x-response-time header


app.use(responseTime({suffix:false}));//add x-response-time to response headers

app.use(express.json());
app.post('*', multer, photoParser); app.put('*', multer, photoParser);

app.use(querySanitizer());

// app.listen(process.env.PORT || 5000, ()=>{console.log("listening on global port");});

module.exports.app = app;



function photoParser(req, res, next){//parses the name of the photo in a new variable called "req.PHOTO_PARSED"
    if(req.file){req.PHOTO_PARSED = req.file.filename;}
    else{req.PHOTO_PARSED = req.body.selectedPhotoName;}
    next();
}
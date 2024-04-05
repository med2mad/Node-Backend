const express = require('express');
const cors = require('cors');
const multer = require('./multer');
const { querySanitizer } = require('../configurations/validations');
const responseTime = require('response-time');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// origin:'http://localhost:8080' 
app.use(cors({origin:'*', exposedHeaders:'*'}));//cors + access x-response-time header

app.use(responseTime({suffix:false}));//add x-response-time to response headers

app.use(express.json());
app.post('*', multer, photoParser); app.put('*', multer, photoParser);

app.use(querySanitizer());

app.listen(5000, () => {console.log("global port " + 5000);});

module.exports.app = app;



function photoParser(req, res, next){//parses the name of the photo in a new variable called "req.PHOTO_PARSED"
    if(req.file){req.PHOTO_PARSED = req.file.filename;}
    else{req.PHOTO_PARSED = req.body.selectedPhotoName;}
    next();
}
const express = require('express');
const cors = require('cors');
const multer = require('./multer');
const { querySanitizer } = require('../configurations/validations');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// origin:'http://localhost:8080' 
app.use(cors({origin:'*'})); //CORS

app.use(express.json());
app.post('*', multer, photoParser); app.put('*', multer, photoParser);

app.use(querySanitizer());

const port = process.env.PORT || 5000;
app.listen(5000, () => {console.log(`: : : port ${port}`);});

module.exports.app = app;





async function photoParser(req, res, next){//parses the name of the photo in a new variable called "req.PHOTO_PARSED"
    if(req.file){req.PHOTO_PARSED = req.file.filename;}
    else{req.PHOTO_PARSED = req.body.selectedPhotoName;}
    next();
}
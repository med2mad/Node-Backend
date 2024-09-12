const multer = require('multer');
const fs = require('fs');
// const d = __dirname+'/../../public/uploads';
// const d = "C:/Users/MED/Desktop/AJAX Paradise/public/uploads/";
const d =  '/webProjects/AJAX School/vue front/public/uploads/'; //this is consedered "localhost/webprojects", without the initial slash (/) the adress is relative (webProjects folder is created in this app)

const storg = multer.diskStorage({destination: (req,file,callback)=>{ fs.mkdirSync(d, {recursive:true});
                                                                      callback(null, d);
                                                                    }, 
                                  filename: (req,file,callback)=>{ callback(null, Date.now()+'_'+file.originalname); //what to parse in req.file.filename
                                                                  }
                                });

const midleware = multer({
                          storage: storg ,
                          limits: {fileSize:1024*1024*10} , //req.file is undifined if 'limits' and 'fileFilter' are not met
                          fileFilter: (req, file, callback)=>{
                                        if(file.mimetype.split("/")[0]!=="image")
                                          callback("Error: Only Images!", false);
                                        else {return callback(null, true);}
                                    }
                        });

module.exports = midleware.single("photo"); //the parser midleware
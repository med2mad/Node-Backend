const MyProfile = require('../models/orm/Mysql').Profile;
const PoProfile = require('../models/orm/Postgesql').Profile;
const MoProfile = require('../models/orm/Mongoose').Profile;
const {randFullName, randNumber} = require('@ngneat/falso');
const fs = require('fs');
let name = 'a';

const Models=[MyProfile,PoProfile];
Models.forEach((Model, index)=>{
    //recreate table in database
    Model.sync({force:true})
    //populate tables
    .then(()=>{
        fs.readdir('others/profilePhotos', (err, files)=>{//get uploaded photo names in array
            for (let i=0; i<100; i++){
                do{name = randFullName({withAccents:false});}while(name.lenght<1 || name.lenght>25);
                Model.create({
                    'name': name,
                    'age': randNumber({min:18, max:99, precision:1}),
                    'photo': (0.8-Math.random()>0) ? files[randNumber({min:0, max:files.length-1, precision:1})] : '', //put random photo but not all the time
                });
            }
        });
    });
});


require('../configurations/mongooseconn'); //mongoose does not export connection object (action hangs until conneciton is estbalished)

MoProfile.deleteMany().then(()=>{//clear table
    fs.readdir('others/profilePhotos', (err, files)=>{//get uploaded photo names in array
        for (let i=0; i<100; i++){
            do{name = randFullName({withAccents:false});}while(name.lenght<1 || name.lenght>25);
            MoProfile.create({//populate table
                'name': name,
                'age': randNumber({min:18, max:99, precision:1}),
                'photo': (0.8-Math.random()>0)? files[randNumber({min:0, max:files.length-1, precision:1})] : '', //put random photo but not all the time
            });
        }
    });
});

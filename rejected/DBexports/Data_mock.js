const MyProfile = require('../../2 - models/Mysql');
const PoProfile = require('../../2 - models/Postgres');
// const MoProfile = require('../../2 - models/Mongodb');
const fs = require('fs');


const Models=[MyProfile,PoProfile];
Models.forEach((Model)=>{
    Model.sync({force:true}) //recreate table in database
    //populate table
    .then(()=>{
        fs.readdir('./profilePhotos', (err, files)=>{//put photo names in array
            files.forEach((file)=>{
                Model.create({
                    'photo': file,
                    'name': file.split('.')[0],
                    'age': Math.floor(Math.random() * 21) + 20
                });
            })
        });
    });
});


// require('../1 - configurations/conMongodb'); //mongoose doesn't export, connects directly (action hangs until conneciton is estbalished)

// MoProfile.deleteMany().then(()=>{//clear table
//     fs.readdir('./profilePhotos', (err, files)=>{//put photo names in array
//         files.forEach((file)=>{
//             MoProfile.create({//populate table
//                 'photo': file,
//                 'name': file.split('.')[0],
//                 'age': Math.floor(Math.random() * 21) + 20
//             });
//         })
//     });
// });
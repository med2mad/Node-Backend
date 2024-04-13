const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/dbname")
.then(() => {
  console.log("Mongoose Connected.");
})
.catch((err) => {
  console.error('Mongoose connextion error !!');
  console.log(err);
});

//does not need to export moongoose connection obejct
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://med:allahommairhamna@cluster0.7zp3rzt.mongodb.net/dbname")
.then(() => {
  console.log("Mongoose Connected.");
})
.catch((err) => {
  console.error('Mongoose connextion error !!');
  console.log(err);
});

//does not need to export moongoose connection obejct
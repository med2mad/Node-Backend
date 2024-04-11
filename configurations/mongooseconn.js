const mongoose = require('mongoose');
const {app} = require('./app');

mongoose.connect("mongodb://localhost:27017/dbname",
// mongoose.connect("mongodb+srv://med:allahommairhamna@cluster0.7zp3rzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
   {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  app.listen(5020, () => {console.log("Mongoose " + 5020);});
})
.catch((err) => {
  console.log('Mongoose initial connextion error: ', err);
});

//does not need to export moongoose connection obejct
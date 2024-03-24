const mongoose = require('mongoose');
const {app} = require('./expressapp');

mongoose.connect(process.env.mongooseConStr, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { //if connection works it start listening
  app.listen(5020, () => {console.log("Mongoose " + 5020);});
})
.catch((err) => {
  console.log('Mongoose initial connextion error: ', err);
});

//does not need to export moongoose connection obejct
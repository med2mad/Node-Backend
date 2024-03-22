const {app} = require('./expressapp');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connString = "https://data.mongodb-api.com/app/data-okfte/endpoint/data/v1";
mongoose.connect(connString, {useNewUrlParser: true, useUnifiedTopology: true})

.then(() => { //if connection works it start listening
  app.listen(5020, () => {console.log("Mongoose: " + 5020);});
})
.catch((err) => {
  console.log('Mongoose initial connextion error: ', err);
});

//does not need to export moongoose connection obejct
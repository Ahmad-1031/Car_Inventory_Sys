const mongoose = require('mongoose');
const dbURI = "mongodb+srv://ahnadshahzad10119_db_user:Test1212@cluster0.fsqkrnm.mongodb.net/carsys?retryWrites=true&w=majority";

try {
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log("Mongoose is connected") },
    err => { console.log(err) }
  );
} catch (e) {
  console.log("could not connect");
}

require('./locations');
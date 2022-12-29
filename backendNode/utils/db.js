const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const db = async () =>
  mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log('Connected!'));

module.exports = db;
// task123;

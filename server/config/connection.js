const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI,{
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true}).then(()=> {
console.log('Database Successfully Connected')},error =>{
console.log(error)})

module.exports = mongoose.connection;
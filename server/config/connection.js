const mongoose = require('mongoose');
require('dotenv').config()

const uri = procces.env.MONGODB_URI
mongoose.connect("mongodb://127.0.0.1:27017/gamefndr",{
        uri: uri,
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true}).then(()=> {
console.log('Database Successfully Connected')},error =>{
console.log(error)})

module.exports = mongoose.connection;
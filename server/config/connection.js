const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/gamefndr",{
        useCreateIndex:true,
        useNewUrlParser: true,
        useUnifiedTopology: true}).then(()=> {
console.log('Database Successfully Connected')},error =>{
console.log(error)})

module.exports = mongoose.connection;
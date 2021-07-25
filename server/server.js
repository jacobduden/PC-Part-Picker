const express = require('express');
const db = require('./config/connection.js');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index');
const { authMiddleware } = require('./utils/Auth');
const cors = require('cors')

const app = express();
const PORT = process.env.MONGODB_URI || 3001;
require('dotenv').config()



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(cors({
    origin: "http://localhost:3000/",
}))
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Navigate to localhost:${PORT}`)
    })
})
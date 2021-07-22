const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index');
const { authMiddleware } = require('./utils/Auth');

const app = express();
const PORT = 3001;


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Navigate to localhost:${PORT}`)
    })
})
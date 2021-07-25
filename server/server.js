const express = require('express');
const db = require('./config/connection.js');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index');


const app = express();
const PORT = process.env.MONGODB_URI || 3001;
require('dotenv').config()

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  app.get('/graphql', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Navigate to localhost:${PORT}`)
    })
})
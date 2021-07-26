const {ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
    savedParts: [partSchema]
}

type gameSchema {
    gameId: String
    name: String
    background_image: String
    esrb_rating: Int
    genres: String
    platforms: String
    metacritic: Int
}

input gameInput {
    gameId: String
    name: String
    background_image: String
    esrb_rating: Int
    genres: String
    platforms: String
    metacritic: Int
}

type Query {
    me: User
}

type Auth {
    token: ID!
    user: User
    }

    type Mutation {
<<<<<<< HEAD
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        saveGame(input: gameInput): User
        removeGame(gameId: String!): User
=======
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        savePart(input: partInput): User
        removePart(partId: String!): User
>>>>>>> 731fe45a601eb09046455ed6c7dbe3ea06dbb435
    }
`;

module.exports = typeDefs;
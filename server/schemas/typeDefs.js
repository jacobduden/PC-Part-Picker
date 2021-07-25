const {ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String!
    savedGames: [gameSchema]
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
        login(username: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        saveGame(input: gameInput): User
        removeGame(gameId: String!): User
    }
`;

module.exports = typeDefs;
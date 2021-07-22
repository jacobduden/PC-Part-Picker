const { gql } =require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    savedGames: [gameSchema]
}

type gameSchema {
    gameId: String
    seller: String
    Title: String
    price: Int
    image: String
    description: String
    link: String
    genre: String
    platform: String
}

input gameInput {
    gameId: String
    seller: String
    title: String
    price: Int
    image: String
    description: String
    link: String
    genre: String
    platform: String
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
        addUser(username: String!, email: String!, password: String!): Auth
        saveGame(input: gameInput): User
        removeGame(gameId: String!): User
    }
`;

module.exports = typeDefs;
const { gql } =require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    savedParts: [partSchema]
}

type PartSchema {
    partId: String
    seller: String
    partName: String
    price: Int
    image: String
    link: String
}

input PartInput {
    partId: String
    seller: String
    partName: String
    price: Int
    image: String
    link: String
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
        savePart(input: partInput): User
        removePart(partId: String!): User
    }
`;

module.exports = typeDefs;
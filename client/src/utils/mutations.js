import gql from 'graphql-tag';

export const CREATE_USER = gql`
mutation addUser($username: String!, $password: String!){
    addUser(username: $username, password: $password) {
        User {
        _id
        username
        email
        savedGames {
                gameId
                seller
                title
                price
                image
                description
                link
            }
        }
    }
}
`;

export const USER_LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}
`;

export const SAVE_GAME = gql`
mutation saveGame($input: gameInput){
    saveGame(input: $input){
        _id
        username
        email
        gameInput {
            # _id
            gameId
            seller
            title
            price
            image
            description
            link
        } 
    }
}
`;

export const REMOVE_GAME = gql`
mutation removeGame($bookId: String!){
    removeGame(gameId: $gameId){
        _id
        username
        email
        gameInput {
            # _id
            gameId
            seller
            title
            price
            image
            description
            link
        }
    }
}
`;
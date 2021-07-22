import gql from 'graphql-tag';
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        savedGames{
            # _id
            gameId
            seller
            price
            title
            description
            image
            link
        }
    }
}
`
import gql from 'graphql-tag';
export const GET_ME = gql`
{
    me {
        _id
        username
        email
        savedParts{
            # _id
            partId
            seller
            price
            description
            image
            link
        }
    }
}
`
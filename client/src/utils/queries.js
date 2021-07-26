import gql from 'graphql-tag';
export const GET_ME = gql`
{
    me {
        _id
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
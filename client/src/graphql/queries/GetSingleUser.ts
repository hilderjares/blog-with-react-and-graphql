import gql from "graphql-tag"

export default gql`
    query GetSingleUser($userId: ID!) {
        user(where: { id: $userId }) {
            id
            name
            email
        }
    }
`

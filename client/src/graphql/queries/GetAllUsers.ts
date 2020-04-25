import gql from "graphql-tag"

export default gql`
    query GetAllUsers {
        users {
            id
            name
            email
        }
    }
`

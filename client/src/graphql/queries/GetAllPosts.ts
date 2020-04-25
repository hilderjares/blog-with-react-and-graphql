import gql from "graphql-tag"

export default gql`
    query GetAllPosts {
        posts {
            id
            title
            author {
                name
            }
        }
    }
`

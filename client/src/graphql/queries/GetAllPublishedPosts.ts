import gql from "graphql-tag"

export default gql`
    query GetAllPublishedPosts {
        feed {
            id
            title
            createdAt
            author {
                name
            }
            category {
                name
            }
        }
    }
`

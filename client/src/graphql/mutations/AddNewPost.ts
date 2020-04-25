import gql from "graphql-tag"

export default gql`
    mutation($title: String!, $user: User!) {
        createPost(title: $title, author: $user)
    }
`

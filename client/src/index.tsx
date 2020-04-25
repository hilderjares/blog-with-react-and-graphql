import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"
import ApolloClient, { ApolloLink } from "apollo-boost"
import { onError } from "apollo-link-error"
import { ApolloProvider } from "@apollo/react-hooks"
import Routes from "./components/Routes/Routes"
import "./index.css"

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = ApolloLink.from([errorLink])

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
})

client.link = link

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
)

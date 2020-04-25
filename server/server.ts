import { GraphQLServer } from "graphql-yoga"
import resolvers from "./resolvers"

const options = {
    port: 4000,
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
}

const server = new GraphQLServer({
    typeDefs: `${__dirname}/schema.graphql`,
    resolvers: resolvers,
})

server.start(options, ({ port }) =>
    console.log(`🚀 Server is running on localhost:${port}`)
)

const { ApolloServer } = require('apollo-server');
const typeDefs = `
type Query {
    info:String!
}
`
const resolvers = {
    Query: {
        info: () => 'This resolver relates to Info Query'
    }
}
const server = new ApolloServer({ typeDefs, resolvers })
server
    .listen()
    .then(({ url }) => console.log(`Your server is running at ${url}`))
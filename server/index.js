require('dotenv').config()
console.log(process.env.MONGO_URI)
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen({port: 8024}).then(({ url }) => {
  console.log(`server listening at ${url}`)
})
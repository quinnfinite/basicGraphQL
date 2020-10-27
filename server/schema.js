const { gql } = require('apollo-server');

const typeDefs= gql`
 type Query {
   animals: [Animal]!
   animal(type: String, name: String): [Animal]!
 }
 type Animal {
   name: String!
   type: String!
   noise: String!
 }
`
module.exports = typeDefs;
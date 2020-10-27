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
 type Mutation {
   addAnimal(type: String!, name: String!, noise: String!): Animal
 }
`
module.exports = typeDefs;
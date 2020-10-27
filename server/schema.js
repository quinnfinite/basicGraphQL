const { gql } = require('apollo-server');

const typeDefs= gql`
 type Query {
   animals: [Animal]!
 }
 type Animal {
   name: String!
   animal_type: String!
   noise: String!
 }
`
module.exports = typeDefs;
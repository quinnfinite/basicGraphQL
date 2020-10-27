const { findAnimals } = require('./db.js')

module.exports = {
  Query: {
    animals: (_,__,{})=> {
      return animalData
    },
    animal: (_, queryArgs, {})=> {
      return findAnimals(queryArgs)
    }
  }
}
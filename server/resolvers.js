const { findAnimals, addAnimal } = require('./db.js')

module.exports = {
  Query: {
    animals: (_,__,{})=> {
      return animalData
    },
    animal: (_, queryArgs, {})=> {
      return findAnimals(queryArgs)
    }
  },
  Mutation: {
    addAnimal: (_, animal, {}) => {
      return addAnimal(animal)
    }
  }
}
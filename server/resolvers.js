

module.exports = {
  Query: {
    animals: (_,__,{})=> {
      return [
        {
          "name": "Sebastian",
          "animal_type": "Camel",
          "noise": "I am thirsty"
        }
      ]

    }
  }
}
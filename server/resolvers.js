

module.exports = {
  Query: {
    animals: (_,__,{})=> {
      return animalData
    },
    animal: (_, queryArgs, {})=> {
      return animalData.reduce((acc, currentAnimal)=> {
          let add = true;
          for (var key in queryArgs) {
            if(queryArgs[key] !== currentAnimal[key]) add = false;
          }
          if (add) acc.push(currentAnimal)
          return acc
        },[])

        // console.log(data)

        // return [animalData[0]]
    }
  }
}

var animalData = [
  {
    "name": "Sebastian",
    "type": "Camel",
    "noise": "I am thirsty"
  },
  {
    "name": "Bart",
    "type": "Bat",
    "noise": "moo"
  }
]
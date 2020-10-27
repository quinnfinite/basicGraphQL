const { MongoClient } = require('mongodb')

const uri = process.env.MONGO_URI
const client = new MongoClient(uri, {useUnifiedTopology: true});
(async function connect () {
  await client.connect()
})()

const dbName = process.env.DB_NAME
const dbCollection = process.env.DB_COLLECTION
module.exports = {
 findAnimals: async (query) => {
   const database = client.db(dbName);
   const collection = database.collection(dbCollection)
   var allAnimals = await collection.find(query).toArray()
   return allAnimals
 },
 addAnimal: async (animal) => {
  const database = client.db(dbName);
  const collection = database.collection(dbCollection)
  var newAnimal = await collection.insertOne(animal)
  return animal
 }
}

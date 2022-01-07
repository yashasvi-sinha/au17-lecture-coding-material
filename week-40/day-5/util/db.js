const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongoServer = new MongoMemoryServer()

async function dbConnect() {
    await mongoServer.start() //issue fixed
    
    const dbURL = mongoServer.getUri()
    console.log(`🚀 ~ dbConnect ~ dbURL`, dbURL)
    await mongoose.connect(dbURL)

}

async function dbDisconnect() {

    await mongoose.connection.dropDatabase()
    await mongoose.connection.close() //close the connection
    await mongoServer.stop() //actually remove the in memory mongodb server instance

}

module.exports = { dbConnect, dbDisconnect }
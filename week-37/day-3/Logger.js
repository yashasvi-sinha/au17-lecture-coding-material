const { EventEmitter } = require('events')
const { getFormattedString } = require('./utils')
const { appendFile } = require('fs/promises')

class Logger extends EventEmitter {


}

const myLogger = new EventEmitter()



myLogger.on('request_received', () => {
    console.log('Some request came from the client')
})

myLogger.on('request_received', (request) => {
    
    const message = getFormattedString(request)

    console.log(message)
})


myLogger.on('request_received', (request) => {
    
    const requestMessage = getFormattedString(request)

    appendFile('./appLogs/logs.txt', requestMessage)
})

module.exports = { myLogger }
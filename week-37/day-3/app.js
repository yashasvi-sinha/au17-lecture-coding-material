const { EventEmitter } = require('events')

// instance of emitter
const myEmitter = new EventEmitter()


// Defining a custom event and attaching a listener for it
myEmitter.on('kalamStudents', () => {
    console.log('Kalam students wala event occurred')
})

myEmitter.once('kalamStudents', () => {
   let sum  = 77 + 44
   console.log('Sum is ', sum)
})

myEmitter.listenerCount('kalamStudents')


// //Trigger/emit an event
// myEmitter.emit('kalamStudents')

// setTimeout(() => {
    
//     //Trigger/emit an event
//     myEmitter.emit('kalamStudents')
// }, 5000)

myEmitter.emit('kalamStudents')
myEmitter.emit('kalamStudents')
myEmitter.emit('kalamStudents')
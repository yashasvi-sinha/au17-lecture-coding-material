const express = require('express');
const app = express();
const { createServer } = require('http')

const httpServerInstance = createServer(app)

const { Server } = require('socket.io')
const socketIoServerInstance = new Server(httpServerInstance) //initialize socket server

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
});

httpServerInstance.listen(5000, () => {
    console.log('Example app listening on port port!');
});


//when client connects
socketIoServerInstance.on('connection', (socket) => {
    console.log('Client Connected')
    // console.log(`🚀 ~ socketIoServerInstance.on ~ socket`, socket)

    console.log(socket.id)
   

    socket.on('chatMessage', (messageMeta, arr) => {
        
        console.log(`Received: `, messageMeta)

        socket.broadcast.emit('messageToAll', messageMeta)

    })
})



//Run app, then load http://localhost:port in a browser to see the output.
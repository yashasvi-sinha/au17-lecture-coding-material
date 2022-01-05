const express = require('express');
const app = express();
const { WebSocketServer } = require('ws')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
});

app.listen(5000, () => {
    console.log('Example app listening on port port!');
});


const wsServer = new WebSocketServer({ port: 5001 })

const coonections = new Map()

wsServer.on('connection', (connObj) => {
    console.log('Socket Connection Created')
    // console.log('ConnObj', connObj)

    coonections.set("ALSKDJALSKDJALSDK", connObj)

    connObj.on('close', () => {
        console.log('Socket Connection Closed')
    })

    connObj.on('message', (data) => {
        console.log(`Client Sends ${data}`)
    })


    setInterval(() => {

        connObj.send('Hello from Server')

    }, 5000)
    
})


//Run app, then load http://localhost:port in a browser to see the output.
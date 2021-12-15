const express = require('express');
const app = express();
const { myLogger } = require('./Logger')

function myMiddleware(req, res, next) {

    myLogger.emit('request_received', req, res)
    next()
}

app.use(myMiddleware)

app.use(express.urlencoded({extended: true}))

app.get('/status', (req, res) => {
    res.send('This a response from the server.')
});

app.listen(5000, () => {
    console.log('Example app listening on 5000');
});

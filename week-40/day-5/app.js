const express = require('express');

const SmartPhoneModel = require('./model/Smartphone')

const app = express();
app.use(express.json())

app.get('/api/smartphones', async (req, res) => {
    res.json(await SmartPhoneModel.find())
});

app.post('/api/smartphones', async (req, res) => {
    const result = await SmartPhoneModel.create(req.body)
    res.status(201).json(result)
});

app.post('/api/smartphones', (req, res) => {
    
});

app.delete('/api/smartphones', (req, res) => {
    
});


module.exports = { app }
//Run app, then load http://localhost:5000 in a browser to see the output.
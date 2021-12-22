require('dotenv').config();
const { connectDatabase } = require('./db');
const express = require('express');
const { User } = require('./model/User');
const app = express();
const { hash } = require('bcrypt')

connectDatabase()

app.use(express.json())

app.post('/register', async (req, res) => { 

    const insertedResult = await User.create(req.body)
   
    res.send(insertedResult)
});



app.get('/users', async (req, res) => { 

    const allUsers = await User.find({})
    res.send(allUsers)
});


app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

//Run app, then load http://localhost:5000 in a browser to see the output.

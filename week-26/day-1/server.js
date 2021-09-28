const express = require('express')
const { MongoClient } = require('mongodb')


const dbURL = `mongodb+srv://survey_app:BHQTXIFFFsWTnhd0@cluster0.xdoik.mongodb.net/survey_database?retryWrites=true&w=majority`

const client = new MongoClient(dbURL)
let db = null
let collectionRef = null

async function init(){
    //connect to the database
    await client.connect()

    //get reference of the database by the name
    db = client.db('survey_database')

    //get the reference of collection from the database
    collectionRef = db.collection('survey_response')
}

init()

const app = express()




app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    
    res.sendFile(`${__dirname}/survey.html`)
})
//BHQTXIFFFsWTnhd0
//survey_app



app.post('/', async (req, res) => {

    console.log(req.body)

    

    //inserting the data into my database
    const insertResult = await collectionRef.insertOne(req.body)

    res.send(insertResult)

})


app.get('/survey_data', async (req, res) => {

    const data = await collectionRef.find({}).toArray()

    res.send(data)

})



app.listen(3000, () => {
    console.log('Server Started!!!!')
})

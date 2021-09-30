const {MongoClient, ObjectId} = require('mongodb');

const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true})) //


const dbURL = `mongodb+srv://rest_api_user:jEauKieiLe4pKPhc@cluster0.xdoik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(dbURL)

//add new product
app.post('/products', async (req, res) => {


    console.log("COMING FROM INSOMNIA")

    await client.connect()

    let dbRef = client.db('amazon_db')

    const productColRef = dbRef.collection('products')
    
    const productData =  req.body
    
    const insertedResult = await productColRef.insertOne(productData)
    
    res.json(insertedResult)
})


//get all products
app.get('/products', async (req, res) => {

    await client.connect()

    let dbRef = client.db('amazon_db')

    const productColRef = dbRef.collection('products')

    const allProducts = await productColRef.find({}).toArray()
    
    res.json(allProducts)
})

//get specific product
app.get('/products/:uniqueId', async (req, res) => {

    await client.connect()

    let dbRef = client.db('amazon_db')

    const productColRef = dbRef.collection('products')

    const idObj = new ObjectId(req.params.uniqueId)

    const product = await productColRef.findOne({ "_id": idObj })

    res.json(product)
    
})

// delete specific product
app.delete('/products/:uniqueId', async (req, res) => {

    await client.connect()

    let dbRef = client.db('amazon_db')

    const productColRef = dbRef.collection('products')

    const idObj = new ObjectId(req.params.uniqueId)

    const product = await productColRef.deleteOne({ "_id": idObj })

    res.json(product)
    
})


//update specific product
app.put('/products/:uniqueId', async (req, res) => {


    await client.connect()

    let dbRef = client.db('amazon_db')

    const productColRef = dbRef.collection('products')
    
    const newData =  req.body
    
    const idObj = new ObjectId(req.params.uniqueId)

    const insertedResult = await productColRef.updateOne({_id: idObj}, {$set: newData })
    
    res.json(insertedResult)
})


const PORT = 5000
app.listen(PORT, () => {
    console.log('Server Started')
})




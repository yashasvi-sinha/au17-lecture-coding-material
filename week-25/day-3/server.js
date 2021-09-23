const express = require('express')
// const path = require('path')
const app = express()

app.use(express.urlencoded())


const PORT  = 3000


app.get('/', (req, res) => {
    
    console.log(__dirname)

    res.send('Home route Working')
})


app.get('/survey', (req, res) => {
    res.sendFile(`${__dirname}/views/survey.html`)
})

app.get('/survey/submit', (req, res) => {

    const str = `Server Received: Name: ${req.query.name}, Email: ${req.query.email}, Phone: ${req.query.phone}`
    console.log(str)

    res.send(str)
})


app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/views/signup.html`)
})

//not good approach for sensitive data
// app.get('/signup/submit', (req, res) => {
//     res.send(req.query)
// })

app.post('/signup/submit', (req, res) => {
    console.log('THIS WAS HIT')
    console.log(req.body)
    
    res.send(req.body)
})





app.get('/category/:categoryName/:subCategoryName', (req, res) => {
    res.send(`<h1>Your are on ${req.params.categoryName} Page. Sub page: ${req.params.subCategoryName}</h1>`)
})






app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/views/404.html`)
})


app.listen(PORT, () => {
    console.log("Server Started")
})
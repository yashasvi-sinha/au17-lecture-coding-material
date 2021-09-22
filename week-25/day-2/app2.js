const express = require('express')

const app = express()


app.get('/test/a/b/amazing', (req, res) => {

    res.send("Working")

})

app.get('/students', (req, res) => {
    res.send("<h1>Hello Students</h1>")
})


app.get('/instructor', (req, res) => {
    res.send("RELOADED")
})

app.get('/work', (req, res) => {

    res.sendFile('I:/Projects/AttainU/Lecture Coding Materials/au17-lecture-coding-material/week-25/day-2/working.html')

})


app.listen(8080)

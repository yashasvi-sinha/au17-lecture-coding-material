const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json()) //middleware to understand JSON based request
app.use(cookieParser()) //middleware to understand/parse cookies in the request

const Sessions = {}

let sessionId = 50000

app.post('/login', (req, res) => {


    //check in database for the user

    

    //
    Sessions[sessionId] = {
        user: req.body.email
    }


    res.cookie('mySessionId', sessionId, { maxAge: 10000})
    res.send(`Session Created. Your session Id is ${sessionId}`)

    sessionId++;

    console.log(Sessions)

})


function checkLoggedIn(req, res, next){
    console.log(req.cookies)
    const userSessionId = req.cookies.mySessionId
    console.log("🚀 ~ file: server.js ~ line 37 ~ app.get ~ userSessionId", userSessionId)
    const userSession = Sessions[userSessionId]
    console.log("🚀 ~ file: server.js ~ line 39 ~ app.get ~ user", userSession)



    if (userSession) {
        req.currentUser = userSession.user
        next()
    }else{
        res.send('You must be logged in')
    }
}


app.get('/profile', checkLoggedIn, (req, res) => {

    res.send(`Hi, ${req.currentUser}`)
})

app.listen(3000, () => console.log("SERVER STARTED"))
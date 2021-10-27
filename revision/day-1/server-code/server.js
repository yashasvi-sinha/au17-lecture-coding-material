const express = require('express');
const app = express();

const session = require('express-session')


app.use(express.urlencoded({extended: true}))

const sessionStore = new session.MemoryStore()

app.use(session({
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { maxAge: 60000 },
    secret: "ASLDKJASLDKJSAD"
}))

app.get('/protected', (req, res) => {

    console.log(req.session)
    if (req.session.userId) {

        const html = `
            <h1>This was protected but you are logged in</h1>
            <a href="/logout">Log Out</a>
        `
        return res.send(html);
    }

    res.redirect('/login')
   
});

app.get('/login', (req, res) => {

    const form = `
    <form action="/login" method="post">
        <input name="username"/>
        <input name="pass"/>
        <input type="submit"/>
    </form>
    
    `

    res.send(form)

})


app.post('/login', (req, res) => {
    
    console.log(req.body)
    console.log(req.session)
    if (req.body.username === "admin" && req.body.pass === "test") {
        //create session and respond

        req.session.userId = req.body.username
        console.log(req.session)

        return res.redirect('/protected')
    }

    return res.send('You need to be logged in')


})


app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/login')
})



app.get('/allAvailable', (req, res) =>{

    console.log(sessionStore)
    res.send("Any one can access this")

})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Example app listening on port port!`);
});

//Run app, then load http://localhost:port in a browser to see the output.
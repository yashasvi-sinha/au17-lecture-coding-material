const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true})) //middleware

app.get('/serverHTML',  (req, res) => {

    console.log("SOMEONE VISITED")

    const a = 123

    // switch (a) {
        
    //     case 'ABC':
    //         res.send("VALUE WAS ABC")
    //         break;
    
    //     case 'ZXC':
    //         res.send("VALUE WAS ZXC")
    //         break;
    //     default:
    //         res.send("I DON't KNOW THE VALUE")
    // }

    res.sendFile(`${__dirname}/basic.html`)

} )


app.post('/cake', (req, res) => {

    console.log(req.body)

    res.send("DATA REC")
})


const PORT = 5000
app.listen(PORT, () => {
    console.log('Server Started')
})


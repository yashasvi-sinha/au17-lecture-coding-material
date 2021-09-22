/**
 * Basic Server Creation Snippet
 */

const http = require('http')

const server = http.createServer((req, res) => {
    // console.log("SOME HTTP REQUEST CAME")
    // console.log(a
    console.log(req.url)
    if(req.url == '/students'){
        res.write("<h1>Hello Students</h1>")
        res.end()
    } else if (req.url == '/instructors'){
        res.write("Hello All Instructors")
        res.end()
    }else{
        res.write("Hello All Stranger")
        res.end()
    }
    
})

const PORT = 4000

server.listen(PORT)

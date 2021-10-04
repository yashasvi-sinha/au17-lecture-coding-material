const express = require('express');
const app = express();

//BADDDDDD
// app.get('/todoApp', (req, res) => {
//     res.sendFile(`${__dirname}/public/todo.html`)
// });

app.get('/cssFiles/todo.css', (res, req) => {
    req.sendFile(`${__dirname}/public/todo.css`)
})

// app.get('/jsFiles/todo.js', (req, masti) => {
//     masti.sendFile(`${__dirname}/public/todo.js`)
// })


app.use(express.static('public')) //middleware

// app.use('/projects/all', express.static('public')) //middleware
// app.use(express.static('/cssFiles/todo.css')) //middleware

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

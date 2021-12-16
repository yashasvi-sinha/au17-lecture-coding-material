const express = require('express');
const app = express();
const ejs = require('ejs');

const axios = require('axios').default

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {

    // const userName = "John Doe" // mocking that this has been fetched from database
    // const age = 44

    const userName = req.query.user // mocking that this has been fetched from database
    const age = req.query.age

    res.render('home', { userName, age })
});


app.get('/products', async (req, res) => {

    const response = await axios.get('https://fakestoreapi.com/products')

    const prods = response.data

    console.log(prods)

    res.render('products', { prods, userName: "Abraham"} )
})

app.listen(5000, () => {
    console.log('Example app listening on 5000');
});

// let count1 = 10
// let count2 = 20

// let result = ++count1 + count2-- 

// console.log(`🚀 ~ result`, result)
// console.log(`🚀 ~ count1`, count1)
// console.log(`🚀 ~ count2`, count2)

// let a = 10
// let b = 15
// const final = 38 - 10

// console.log(`🚀 ~ final`, final)
// 1<2<3

console.log(`🚀 ~ 1<2<3`, true)
// 7>6>4
console.log(`🚀 ~ 7>6>4`, 7>6>4)

1 == true
0 == false


console.log(`🚀 ~ {} +{}`, {} + {})



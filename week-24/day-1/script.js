// HTTP Requests and Ajax

// const url = 'https://jsonplaceholder.typicode.com/todos/1'

// const httpMethod = 'GET'


// let requestObj = new XMLHttpRequest()

// requestObj.open(httpMethod, url)



// requestObj.onload = function (){
//     if (requestObj.status == 200) {
//         console.log(requestObj.response)
//     }
// }

// requestObj.onerror = function (){

//     console.log('Error Occurred!!!!')

// }

// requestObj.send()


const obj = {
    name: "yash",
    greet: function (){
        console.log(`${this.name} says Hello`)
    }
}


// obj.greet()


// console.log(obj)

const stringFormat = JSON.stringify(obj)

// console.log(stringFormat)

const someObj = JSON.parse(`[ { "test": 123 } , { "test": 123 } ]`)

const user = {
    name: "User 1",
    phone: "+917987495465"
}


const str = JSON.stringify(user)

const a = `
<xml>

    <name>User 1</name>
    <phone>+917987495465</phone>
</xml>
`

// console.log(someObj.test)









const url = 'https://jsonplaceholder.typicode.com/todos/1'

const httpMethod = 'GET'

function a(){

    if (condition) {
       b() 
    }

}


function b(){
    if (condition) {
        a()
    }
}

const responsePromise = fetch(url)
responsePromise
    .then((res) => res.json())
    .then((data) => console.log(data))




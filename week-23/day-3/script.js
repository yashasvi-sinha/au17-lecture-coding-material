// ECMAScript 6 or ES6

// ES5 ==> ES6 (2009 ===> 2015) //let const arrow set map, Class
//2016 ==> ES7 //Promises
//2017 ==> ES7 //Async await functions



// console.log(person.name) 
// var person = {
//     name: "yash"
// }


// let and const  
/*
1. Not Hoisted
2. Block Scoped

*/

function a(){
    var asd

    {
        let xyz = "Testing"
        asd = "123"
        console.log(asd)
        console.log(xyz)

        {
            let zxc = "Nested"
            console.log(xyz)
            console.log(zxc)
        }
        console.log(abcde)
        console.log(zxc)
    }


    {
        let abcde = "Pasta"

        console.log(xyz)
        console.log(abcde)
        {}
        {}
        {
            {

            }
        }
    }

    console.log(asd)
    console.log(zxc)
    console.log(xyz)
}

// {
//     let xyz = "Testing"
//     var asd = "123"
//     console.log(asd)
//     console.log(xyz)
// }



/*
Let vs Const

1. Can change the value of let, cannot reassign a const declaration
*/


// const name = "Yash"
// console.log(name)

// name = 123
// console.log(name)



// const arr = [1,5,23,123,656,123]
// console.log(arr)

// arr = ["Changed",5,23,123,656,123]

// arr[0] = "Changed"
// console.log(arr)


// const person = {
//     myProperty: 123
// }
// console.log(person)

// person.myProperty = "Yash"
// console.log(person)

// person = "Test"


// console.log(person)


// const hello = "Hello " + "World"
const name = "Yash"
const greeting = "How are you doing?"
const hello = `Hello World from ${name}, ${greeting}` 


//Hello World from Yash
console.log(hello)
const concat = "Hello World from " + name + ", " + '\n' + '\t'+ '\t' + '\t' + '\t'+ '\t'+ '\t' + greeting 
console.log(concat)


// document.getElementById().innerHTML = "<div> <h1>" +

// "</h1><p></p>"


// document.getElementById().innerHTML = `
// <div>
//     <h1></h1>
//     <p></p>
//     <section>
//         <h1></h1>
//         <section></section>
//     </section>
// </div>`


const str = "This is a string which contains a lot of Words"

// console.log(str.endsWith("yash"))

// console.log(str.endsWith("yash", 6))


//console.log(str.startsWith("This", 0))

// console.log(str.charAt(1)) //h
console.log(str.toLowerCase().includes("words")) //h






//Arrow Functions & Destructuring

//function expression
// const sum = function (num1, num2){

//     const total = num1 + num2;
//     return total
// }
// const finalSum = sum(12, 10) //22

///////// Arrow Function //////

const sum = (num1, num2) => num1 + num2


const finalSum = sum(12, 10) //22


const makeUpper = str => str.toUpperCase()


const Person = () => {
    this.name = "asd"
    this.greet = function(){
        return `Hi from ${this.name}`
    }
}

// function makeUpper(str){
//     return str.toUpperCase()
// }
/*
Does not have its own bindings to this or super, and should not be used as methods.
Does not have arguments, or new.target keywords.
Not suitable for call, apply and bind methods, which generally rely on establishing a scope.

Can not be used as constructors.
Can not use yield, within its body.


*/





// const arr = [123,43]

// arr.


// Array.of

// const input = document.getElementById('someId')

// input.addEventListener('click', function(e) {
//     console.log("Click Event Triggered")
// })


///////// Arrow Function //////

// const input = document.getElementById('someId')

// input.addEventListener('click', (e, zxc) => myOwnfunctio() )



//Destructuring

/*
Special syntax which allows to "unpack" arrays or objects into a bunch of variables


*/

// const arr = ["John", "Ramesh", "Cena"]

// const [firstName, last] = arr

// const firstName = arr[0]
// const lastName = arr[1]


// `Hi my name is ${firstName} ${lastName}`  


// a = 32  b = 44

// let temp = a
// a = b
// b = temp


// let a = 32, b = 44

//  [b,a] = [a,b] 
// [b,a] = [32, 44]
// [b=0,a=1 ]
// [32, 44]


// const arr = [55,66,77,99]

// const [ first, , third ] = arr




const obj = {
    title: {
        text: "Menu",
        length: 4
    },
    width: 100,
    height: 90
}


let {title} = obj // const title = {text: "Menu", length: 4}

title = "ASD"



console.log(title)

// width

// console.log(obj.title.toUpperCase())

// document.getElementById().addEventListener('click', e => {

//     const { type, ctrlKey,  } = e


    
// })
// "yDAAH"

const num = ["yash", "Desh", "Aditya", "Akhilesh", "Hemanth"] 

const totalSum = num.reduce((prev, curr, indx) => {
    prev.push(curr[0] + curr[1])
    return prev

}, [])


const newArr = num.map(curr => curr[0] + curr[1])
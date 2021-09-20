// const num = 123
// const sum = (num2) => {
//     console.log(num)

//     console.log(`The sum of ${num} and ${num2} is ${num + num2}`)
// }

// console.log("Hello World")

// sum(520)

// localStorage.getItem()

// document.getElementById("asdas")


// const rl = 

const readLine  = require("readline-sync")
const cs = require("color-string")

const userInput = readLine.questionInt("Please enter a value between 0-255:")

const colorString = cs.to.hex([userInput, userInput, userInput])

console.log(colorString)


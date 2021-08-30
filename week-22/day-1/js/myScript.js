



// var document = {
//     head: {
//         title: {
//             value: "Flipkart"
//         }
//     },
//     body: {
//         h1: {},
//         section: {
//             div: {
//                 button: {}
//             },
//             div: {
//                 h1: {},
//                 p: {}
//             }
//         }
//     }
// }

// document.head.title.value = "Amazon"  //manipulate the content 

// document.body['h1'] = {} //manipulated the DOM


var incrementBtn = document.getElementById('increment')
var decrementBtn = document.getElementById('decrement')
var counterElement = document.getElementById('counter')

var counterValue = Number(counterElement.innerText) 
console.log(this)

//on clicking of the button execute/invoke some function
incrementBtn.addEventListener('click', function() { 
 
    console.log(this)

    this.style.border = "3px solid pink"

    counterValue += 1
    counterElement.innerText = counterValue

    counterElement.style.color = "red" // "red"

    counterElement.style.border = '2px solid green'

}) 


decrementBtn.addEventListener('click', function () {
    
    counterValue -= 1
    counterElement.innerText = counterValue


})



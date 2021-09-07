//IIFE 
// Immediately Invoked Function Expression ()


// function abc(){
//     console.log("abc is logged")
// }
// abc()



// (function (){
//     console.log("abc is logged")
// })()

// // addEventListener("click", function () {  })


// console.log("Calling Outside abc")



// (function(){
//     var btn = document.getElementById
// })()


// console.log("1 plus 1 is " + 1 + 1 + 1 ) // associativity (Left to Right)



// setInterval // do stuff every nth interval/seconds


// setTimeout // do stuff only ONCE after n amount of time

// setTimeout(asynchronousTask, 5000) // execute asynchronousTask every 3 seconds


var count = 1
var intervalId = setInterval(asynchronousTask, 2000) // execute asynchronousTask every 3 seconds
var timeoutId = setTimeout(asynchronousTask, 10000) // execute asynchronousTask every 3 seconds

console.log("Line38")
function asynchronousTask(){
    
    console.log("Executed", count)
    count++;
    if (count > 2) {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
        return;
    }
}
console.log("Line42")


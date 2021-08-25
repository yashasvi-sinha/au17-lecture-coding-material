// f(x) = x + 1

// g(y) = y + 2


// f(g(y))

// // y = 5
// g(y) = y + 2 
//     = 5 + 2
// g(y) = 7

// f(7)
// f(x) = x + 1

// f(7) = 7 + 1
//     = 8

function f(x) {
    return x + 1
}

function g(y){
    return y + 2
}
// g(f(5))// == g(6) == 8
// var result = g(3) //5


// function declaration
// named
function sum(num1, num2){
    return num1 + num2;
}
var asd;
// function expression
// unnamed or referenced function
var addition = function (num1, num2){
    return num1 + num2;
}

// var abc = sum(22, 55)

// var myRes = addition(22, 55)




function dummy(xyz){

    var result = xyz(25, 44)

    console.log(result)

    // return xyz
}

// dummy(sum)


// function name(params) {
//     //asdasd
//     //asdasd
//     //asdasd
//     params()
// }


// name(dummy)

// var result = dummy( sum )


// Anonymous functions

function operation(param1, param2, yash){    

    var result = yash(param1, param2) // 23
    console.log(result)

    
}





operation(55, 32,  function(x, y) { return x - y } )





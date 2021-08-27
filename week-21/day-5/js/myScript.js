// Arrays ==> Lists in Python

{} //=>  object literal

[] // => array literal

var abc = [5, 10, 8] // 

// var arr = new Array(10); // arr [, , , , , , , , , ] 




var nested = [ 123, [12,32,123,9], [5,6,7] ]

// nested[1][1]
//accessing elements inside arrays

// console.log(abc[0])

abc[0] = "Changed"



// for (var index = 0; index < mixed.length; index++) {
//     var element = mixed[index];

//     console.log(element)
// }



// abc == property names itself 
// for (var abc in mixed) {
//     console.log(abc)

//     console.log(mixed[abc])

// }

// abc == values of the properties directly
// for (var abc of mixed) {
    
//     console.log(abc)
// }


// function myForEach( abcd ){

//     for (let index = 0; index < mixed.length; index++) {
//         const element = mixed[index];
        
//         abcd(element, index)
//     }

// }

// myForEach(  function(item, i){ console.log(i); console.log(item); }   )




// mixed.forEach( function(ele, index, zzxc) {

//     console.log(this)

//     // console.log(zzxc)
//     // console.log(index)
//     // console.log(ele)



// }   ) //

// mixed.forEach()

// nested.forEach()









var mixed = [123,43123,123, "abc", false, true ]


var test = mixed

console.log(mixed)

// var asd = mixed.join("*") //return

// var test = new Array(mixed)

// test.reverse() // in-place mutation

console.log(test)
console.log(mixed)

// mixed.sort()

var xyz = mixed.map(function(a, i){

    return a
})

mixed.splice(0, 5, 55, 44)
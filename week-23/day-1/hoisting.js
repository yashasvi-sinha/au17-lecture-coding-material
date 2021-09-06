/* 
Hoisting:

Definition:
1. Pulling up of named function and var keyword/declaration to the top of the scope.


*/
// var myName
// console.log(myName)




// myName = "Yash"






//Source Code
var value = a()
function a(){
   return myName
}
var myName = "Yash"


///////////////////// after the setup/memory allocation stage
var value; //undefined
var myName; //undefined
function a(){
    return myName
}
value = a(); //undefined
myName = "Yash"




//////////////
console.log(abc);
var abc = a(`raj`);

console.log(a("deshraj"));
function a(myName) {
  return myName;
}


////////////// after 1st Phase
var abc;
function a(myName) {
    return myName;
}
console.log(abc); //undefined
abc = a(`raj`); // abc = "raj"
console.log("deshraj"); // "deshraj"







// var myName
// console.log(myName)
// function a(){
//     function b(){

//     }
//     function z(){

//     }


//     b()





// }











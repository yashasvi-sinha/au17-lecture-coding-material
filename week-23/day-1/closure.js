// Closure //
// Definition: 
/*
1. phenomenon of inner functions being able access/modify parent functions variables
2. the ability of inner function to change the value of parent function's children/members even when
    the parent function has finished execution

3. The ability of inner functions to access variables/functions in the lexical scope


*/

// function a(){
//     var count = 123

//     return {
//         get: function() {
//             return count
//         }
//     } 
// }


// console.log(a().get())


// Pass function to another func
// Return a function from another func

function init(){
    
    var playerScore = 0 // 
    var playerName = null

    
    function increaseScore(){
        var a = 123;
        playerScore = playerScore + 5
    
        reduceScore()

        // 3rd 
        function asd(){

        }

        return playerScore
    
    }
    
    
    function reduceScore(params) {
        
        playerScore = playerScore - 5
    
        return playerScore
    }

    function getScore() {
        return playerScore;
    }

    function setName(name){
        playerName = name
    }

    function getName(){
        return playerName
    }

    return {
        increment: increaseScore,
        decrement: reduceScore,
        getScore: getScore,
        
    }

}

0
var scoreManager = init() // returning ref of a function






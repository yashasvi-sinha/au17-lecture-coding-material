const getJokeBtn = document.getElementById('getJokeBtn')
const jokeHeading = document.getElementById('jokeH1')

const baseURL = 'https://v2.jokeapi.dev/joke/Any'

function updateJokeInUi(response){
    console.log("Request Completed")
    console.log("response", response)


    if (response.type === "single") {
        jokeHeading.innerText = response.joke
        return
    }

    const str = `${response.setup} |||| ${response.delivery}`
    jokeHeading.innerText = str
}

function rejected(){
    console.log("Request Failed")
}

async function getJoke() {

    // console.log(responsePromise);
    // responsePromise.then( yash => yash.json() ).then(fulfilled)
    // responsePromise.catch(rejected)
    
    try {
        
        const response = await fetch(baseURL) //10sec
        
    
        //1. We need convert to JSON
        const jsonData = await response.json()
        
        //2. Using the JSON to do something useful
        console.log(jsonData)

        updateJokeInUi(jsonData)    


    } catch (err) {
        
    
        jokeHeading.innerText = "Error Occurred"

    }


}

getJokeBtn.addEventListener('click', getJoke)


// class Promise{
//     constructor(params) {
        
//     }
// }


// function fetch(url){

//     return new Promise((zxc) => {

//         //http suff
        

//         zxc()


//     })

    

// }

let count = 10

// const ownPromiseObject = 

function prom(time) {
    return new Promise((resolve, reject) => {

        // console.log(abc)
    
        setTimeout(() => {
    
            if (count === 10) {
                resolve()
            }else{
                reject()
            }
    
        }, time )
    
    })
}

// console.log(ownPromiseObject)


// ownPromiseObject.then(() => {
//     console.log("Promise fulfilled")
// })

// ownPromiseObject.catch(() => {
//     console.log("Promise Rejected")
// })


async function test(t) {
    
    await prom(t)

    console.log("Promise fulfilled")
}
test(5000)
console.log("ASDASD")

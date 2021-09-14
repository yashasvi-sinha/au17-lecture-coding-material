const getJokeBtn = document.getElementById('getJokeBtn')
const jokeHeading = document.getElementById('jokeH1')

const baseURL = 'https://v2.jokeapi.dev/joke/Any'


function fulfilled(response){
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


getJokeBtn.addEventListener('click', () => {

    const responsePromise = fetch(baseURL)
    // console.log(responsePromise);

    responsePromise.then( yash => yash.json() ).then(fulfilled)

    responsePromise.catch(rejected)


})






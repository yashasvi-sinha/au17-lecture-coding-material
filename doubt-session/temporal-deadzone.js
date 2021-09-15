
// console.log(abc)
// var abc = "my text"


// //
// var abc;
// console.log(abc)
// abc = "my text"



const abc = "My text"
console.log(abc)


// let score = undefined;

// if (score = 0) {
//     console.log(abc)
// }

function dharm(xyz){
    console.log("Permission Given")
    console.log(xyz)

    console.log("Lat: ", xyz.coords.latitude)
    console.log("Lon: ", xyz.coords.longitude)

}



function dharm2(){
    console.log("Permission Denied")
}

// navigator.geolocation.getCurrentPosition(dharm, dharm2)



const choice = 99999 //prompt("Choose a color between RGB:")

switch (choice) {
    
    case 'r':
        console.log('You chose Red')
        break
        
    case 'g':
        console.log('You chose Green')
        break

    case 'b' :
        console.log('You chose Blue')
        break
    
        default:
        console.log('Unknown Choice')
        
}


const myList = document.getElementById('list')
const myBtn = document.getElementById('myBtn')



myBtn.addEventListener('click', () =>{

    const data = "ABC"

    // const inner = myList.innerHTML
    // console.log("inner", inner)

    // const newStr = `${inner}   <li>${data}</li>`

    // myList.innerHTML = newStr


    const newElem = document.createElement('li')

    newElem.innerText = data

    newElem.style.background = 'green'

    myList.appendChild(newElem)


})






// document.head.title.value = "Amazon"  //manipulate the content 

// document.body['h1'] = {} //manipulated the DOM



// var counterValue = Number(counterElement.innerText) 

//on clicking of the button execute/invoke some function
// incrementBtn.addEventListener('click', function(event) { 
    
//     console.log(event)
    
// }) 

// function handler(e){

    
//     console.log("Clicked")
//     console.log(e)

// }

// decrementBtn.addEventListener('click', handler)
// decrementBtn.addEventListener('mouseover', function(e){

//     console.log("Hovered")
//     console.log(e)
// })

// document.addEventListener('keydown', handler)




var incrementBtn = document.getElementById('increment')
var decrementBtn = document.getElementById('decrement')
var btnWrapper = document.getElementsByClassName('btn-wrapper')[0]

// console.log(btnWrapper)


var counterElement = document.getElementById('counter')


incrementBtn.addEventListener('click', function(e){
    e.stopPropagation() // prevents the bubbling of the event

    console.log('Clicked on Increment BTN')
})

btnWrapper.addEventListener('dblclick', function(e){
    e.stopPropagation()
    console.log('Clicked on Wrapper')
})

document.addEventListener('click', function(e){
    console.log('Clicked on Document')
})


var heading = document.createElement('button')

heading.innerText = "My Dynamic Element"

heading.id = "getValue"

counterElement.before(heading) 

// counterElement.

// counterElement.innerHTML= "<div><p>ASDASD</p> <button>Click</button></div>"


var input = document.getElementById('myInput')


document.getElementById('getValue').addEventListener('click', function(e){
    e.stopPropagation()
    
    console.log(input.value)
})

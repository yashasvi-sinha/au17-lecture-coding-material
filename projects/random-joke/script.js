let count = 10

const ownPromiseObject = new Promise((resolve, reject) => {

    // console.log(abc)

    const data = "SOME DATA FROM FETCH"
    setTimeout(() => {

        if (count === 10) {
            resolve(data)
        }else{
            reject(new Error("Some Error"))
        }

    }, 5000 )

})

console.log(ownPromiseObject)


ownPromiseObject.then((z) => {
    
    console.log("Promise fulfilled")
    console.log("z", z)
})

ownPromiseObject.catch(() => {
    console.log("Promise Rejected")
})







//Rest 7 Spread



function sum(...rest){

    console.log(rest)
    let s = 0
    for (let index = 0; index < rest.length; index++) {
        
        s += rest[index]
        console.log(rest[index])
        
    }

    return s
}

const total = sum(56,10)


const str = "Kalam batch is awesome!!!!!!!!"

const characters = [...str]
console.log("characters", characters)



// for (let index = 0; index < string.length; index++) {
//     const char = string[index];
    
    

// }

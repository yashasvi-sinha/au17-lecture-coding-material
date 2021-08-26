//arrays ==> Lists
// Objects ==> properties and methods


// var name = "Ashwin"
// var gender = "Male"
// function walk(){
//     console.log(name + " is walking" )
// }

// walk() // Ashwin is walking

// var name1 = "Akash"
// var gender = "Male"
// function walk1(){
//     console.log(name1 + " is runs" )
// }

// ashwin.walk()
// aksah.walk()


//Object Literals 1st 

var person = {
    name: "Ashwin",
    age: 123,
    "person gender": "M",
    walk: function () {
        console.log("Walking")
    },
    address: {
        line1 : "",
        line2: "",
        city: "",
        pretty: function () {
            console.log("")
        }
    }
}



// person.address.pretty()

//dot notation ==> access properties and methods of an object
//  person.walk()
//  console.log(person.age)


// person["person gender"]
// console.log(person["person gender"])



// //bracket notation

// console.log(person["age"])

// var a = person["age"] // 123
// var b = person["walk"] // function () { console.log("walking")}

// b()

// person["walk"]


// console.log(typeof person["age"])
// console.log(typeof person["age"])


//person.age = 500
//console.log(person.age)
//console.log(person.age)


person.address = "Earth"

person.walk = function () {
    console.log("OVERRIDE!!!!")
}

// person.walk()

delete person["walk"]


// console.log(person)






// function Person(name, umar){

//     return {
//         name: name,
//         age: umar
//     }
// }



// Constructor Functions

function Person(name, umar, gen){
    this.name = name
    this.age = umar
    this.gender = gen

    this.intro = function() {
        console.log("Hi My name is " + this.name + " and I am " + this.age + " years old.")
    }

}

//When you use new keyword
//1. A new empty object is created and assigned to this.
//2. The function body executes. Usually it modifies this, adds new properties to it.
//3. The value of this is returned.

/*
function Person(name, umar){
    this = {} // implicit

    this.name = name
    this.age = umar

    return this // implicit
}
*/

var ash = new Person("Ashwin", 21, "Male")
var aksh = new Person("Akash", 25, "Male")
// console.log(ash)
// console.log(aksh)

ash.intro()
aksh.intro()


//for in ==> used for iterating over an object's keys/properties

for (var key in ash) {
    console.log(key)
    console.log(ash[key])
}


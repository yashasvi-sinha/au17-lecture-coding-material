// ES6 Classes 


function Human(age, gen){
    this.age = age
    this.gender = gen
    this.getInfo = function () {
        return `Age: ${this.age} `
    }
}


// function Person(name){
//     this.name = name
//     this.getInfo = function () {
//         const str = Human.getInfo()
//         return `${str} Vaishnavi`
//     }
// }

// Person.prototype.school = "123"
// Person.prototype.school = "123"

class Person extends Human{
 
    constructor(name, age, gen){
        super(age, gen)
        this._name = name;

    }

    get name(){
        return this._name.toUpperCase()
    }

    walk(){
        return `${this.name} is walking fast`
    }

}


const vi = new Person("vijay")
// console.log(vi)
// console.log(vi.name)
// console.log(vi.walk())



class Rectangle {

    constructor(l, b){

        this._length = l
        this._breadth = b

    }


    get length() {
        return `${this._length}`
    }


    set breadth(newBreadth) {

        
        if (newBreadth > 0) {
            this._breadth = newBreadth

        }else{
            throw new Error("Negative Values not accepted")
        }



    }

    set length(newLength){
        if (newLength > 0) {
            this._length = newLength
        }
    }



    area(){
        return this._length * this._breadth
    }

}


const myRect = new Rectangle(10, 5)

console.log(myRect.area())


class Square extends Rectangle {
    constructor(side){
        // this.side
        super(side,side)
    }
}


const mySq = new Square(10)

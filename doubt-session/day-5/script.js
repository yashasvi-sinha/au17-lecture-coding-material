class Vehicle{
    constructor(y){
        this._year = y
    }

    get year(){
        return this._year
    }

    set year(a){

        if (a < 0) {
            throw new Error("Negative values are not accepted")
        }
        this._year = a
    }
}

class Bike extends Vehicle{

}


class AjaxReq  {

    static async fetch(url){

        const res = await window.fetch(url)

        return res.json()
    }

}


AjaxReq.fetch("Htpp")

class Car extends Vehicle{

    static carCount = new Car()

    constructor(name, year = 1999){
        super(year)
        this._name = name
        Car.carCount++
    }
    

    

    // getInfo(){
    //     console.log(`This instance is ${this.name} made in year ${this.year}`)
    // }

    // setName(nasdasd){
    //     this.name = nasdasd
    // }

    static getCount(){
        console.log("STATIC METHOD CALLED")
    }
}


const honda = new Car('civic', 2005)


const abc = new Car("ford", 2000)

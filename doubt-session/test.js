const human = {
    name: "ABC",
    greet: function (param1, param2) {
        console.log(`Hi from ${this.name}`)
        console.log(param1)
        console.log(param2)
    }
}


const cat = {
    name: "Kitty",
    greet: function() {
        console.log(`Hi from Cat`)
    }
}


// human.greet()
// const fn = human.greet.bind(cat, 55,88)


human.greet.call(cat, 120, 50)

human.greet.apply(cat, [120, 50])





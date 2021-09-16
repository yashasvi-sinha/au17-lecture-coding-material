class TodoList {

    constructor(){
        this.todoItems = []
    }


    getTodoItems(){
        return this.todoItems
    }


    addTask(taskObj){
        this.todoItems.push(taskObj)
    }


    removeTasks(){
        this.todoItems = []
    }

    removeTask(index){
        
        this.todoItems = this.todoItems.filter((item, ind) => {
            if (index != ind) {
                return true
            }
        })

    }
}

// let TodoList = 123;

export default TodoList

export const name = "yash"

function sayHello() {
    console.log('Hello')


}

let age = 123, gen = "Male"

export {age, gen, sayHello}
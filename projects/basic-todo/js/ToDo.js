const TODO_ITEM_KEY = "todoItems"

class TodoList {

    constructor(){
        const oldTodoItems = JSON.parse(localStorage.getItem(TODO_ITEM_KEY))
    
        if (!oldTodoItems) {
            this.todoItems = []
            return;    
        }

        this.todoItems = oldTodoItems 

    }


    getTodoItems(){
        return this.todoItems
    }


    addTask(taskObj){
        this.todoItems.push(taskObj)

        const todoItemsAsString = JSON.stringify(this.todoItems)
        
        localStorage.setItem(TODO_ITEM_KEY, todoItemsAsString)

        // console.log(sessionStorage.getItem("todoItems"))
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

export default TodoList



// let TodoList = 123;
// export const name = "yash"

// function sayHello() {
//     console.log('Hello')


// }

// let age = 123, gen = "Male"

// export {age, gen, sayHello}
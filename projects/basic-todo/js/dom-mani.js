import TodoList from './ToDo.js'

function sayHello(params) {
    console.log("MY HELLOWWWWWWW!!")
}

const deleteButton = document.getElementById('deleteBtn')
const todoList = document.getElementsByClassName('todo-list')[0]

//get the input text
const formElem = document.getElementById('taskForm')


// creating an instance of ToDoList
window.myTodoListObj = new TodoList()
updateListInUI()

function removeLiFromUI(e){
    const elementIndex = e.target.attributes.ind
    myTodoListObj.removeTask(elementIndex)
    updateListInUI()
}

function updateListInUI() {
    const items = myTodoListObj.getTodoItems()    
    console.log("🚀 ~ file: dom-mani.js ~ line 20 ~ updateListInUI ~ items", items)

    todoList.innerHTML = ""
    
    const liHTMLNodes = []
    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        const li = document.createElement('li')

        li.innerText = item.task
        li.className = "list-group-item mb-3 shadow"
        li.attributes.ind = index

        li.addEventListener('click', (e) => {
            removeLiFromUI(e)
        })

        liHTMLNodes.push(li)
        // liString += `<li class="list-group-item mb-3 shadow" ind=${index} >${item.task}</li>`    
    }

    todoList.replaceChildren(...liHTMLNodes)

    // console.log(liString)


}


formElem.addEventListener('submit', function (e) {
    e.preventDefault()

    const taskObj = {}

    var data = new FormData(formElem)
    
    for (var abc of data) {
        var key = abc[0]
        taskObj[key] = abc[1]
    }

    myTodoListObj.addTask(taskObj)

    updateListInUI()
})


deleteButton.addEventListener('click', () => {
    myTodoListObj.removeTasks()

    updateListInUI()

})







// //clearAll
// deleteButton.addEventListener('click', function () {
//     todoList.innerHTML = ""
// })




// function addTask(paramTask) {

//     var listItem = document.createElement('li') //created our li element

//     listItem.innerText = paramTask
//     listItem.className = 'list-group-item mb-3 shadow'

//     todoList.append(listItem)

// }



// sayHello()

// modSayHello()
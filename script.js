const input = document.querySelector('.input')
const addTodoBtn = document.querySelector('.add-todo')
const todoContainer = document.querySelector('.todo-box')
const errorBox = document.querySelector('.error')

const todoTemplate = document.querySelector('.todo-template')

let ID = 0

const createNewTask = () => {
	if (input.value !== '') {
		const newTodo = todoTemplate.content.cloneNode(true)
		const todoBox = newTodo.querySelector('.todo')
		const todoText = newTodo.querySelector('.todo-text')

		changeTodoOptions(todoBox)

		// const todoCompleteBtn = newTodo.querySelector('.todo-complete')
		// const todoEditBtn = newTodo.querySelector('.todo-edit')
		// const todoDeleteBtn = newTodo.querySelector('.todo-delete')
		todoBox.setAttribute('id', ID)
		todoText.textContent = input.value
		todoContainer.append(todoBox)

		ID++
		changeTodoOptions(todoBox)
		// todoCompleteBtn.addEventListener('click', completeTask)
		// todoEditBtn.addEventListener('click', editTask)
		// todoDeleteBtn.addEventListener('click', deleteTask)
	} else {
		errorBox.textContent = 'Enter your to-do'
	}
}

const changeTodoOptions = todoBox => {
	console.log(todoBox.querySelector('.todo-complete'))

	const todoCompleteBtn = todoBox.querySelector('.todo-complete')
	const todoEditBtn = todoBox.querySelector('.todo-edit')
	const todoDeleteBtn = todoBox.querySelector('.todo-delete')

	console.log(todoCompleteBtn)
	todoCompleteBtn.addEventListener('click', () => {
		console.log('gowno')
	})

	console.log(todoBox)

	// todoCompleteBtn.addEventListener('click', () => {
	// 	todoBox.classList.toggle('todo-done')
	//     console.log('jelo');
	// })
	// todoEditBtn.addEventListener('click', editTask)
	// todoDeleteBtn.addEventListener('click', deleteTask)
}

addTodoBtn.addEventListener('click', createNewTask)

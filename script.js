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

		todoBox.setAttribute('id', ID)
		todoText.textContent = input.value
		todoContainer.append(todoBox)

		changeTodoOptions(todoBox)

		ID++
	} else {
		errorBox.textContent = 'Enter your to-do'
	}
}

const changeTodoOptions = todoBox => {
	const todoCompleteBtn = todoBox.querySelector('.todo-complete')
	const todoEditBtn = todoBox.querySelector('.todo-edit')
	const todoDeleteBtn = todoBox.querySelector('.todo-delete')

	todoCompleteBtn.addEventListener('click', () => {
		todoBox.classList.toggle('todo-done')
		todoCompleteBtn.textContent == '✅' ? todoCompleteBtn.textContent = '✔' : todoCompleteBtn.textContent = '✅'
	})

	// todoEditBtn.addEventListener('click', editTask)
	// todoDeleteBtn.addEventListener('click', deleteTask)
}

addTodoBtn.addEventListener('click', createNewTask)

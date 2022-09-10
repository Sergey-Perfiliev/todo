import { useEffect, useState } from 'react';
import GlobalSvgSelector from '../../assets/GlobalSvgSelector'
import { useInput } from '../../hooks/useInput';
import { useTodoContext } from '../../hooks/useTodoContext';
import { Todo } from '../../types/Todo'
import { AddTaskForm } from './AddTaskForm/AddTaskForm'
import { SearchBar } from './SearchBar/SearchBar';
import TodoItem from './TodoItem/TodoItem'
import { resize } from './todolist.resize';
import './TodoList.scss'

type Props = {
	currentTodo: Todo | null
	setCurrentTodo: React.Dispatch<React.SetStateAction<Todo | null>>
}

const TodoList = ({ currentTodo, setCurrentTodo }: Props) => {
	const [addTaskMode, setAddTaskMode] = useState<boolean>(false)
	const { todoList, addTodoItem, deleteTodoItem } = useTodoContext()

	useEffect(() => {
		resize()
	})

	const handleTaskMode = () => setAddTaskMode(!addTaskMode)

	const handleSubmit = (todo: Todo) => {
		handleTaskMode()
		addTodoItem(todo)
	}

	const handleDeleteTodo = (e: React.MouseEvent<HTMLElement>, id: number) => {
		e.stopPropagation()
		if (id === currentTodo?.id) {
			setCurrentTodo(null)
		}
		deleteTodoItem(id)
	}

	const [searchText, handleSearchText, setSearchText] = useInput('')

	const handleClear = () => setSearchText('')

	const todoItems = todoList
		.filter(todo =>
			todo.title.toLowerCase().includes(searchText.toLowerCase()))
		.map(todo =>
			<TodoItem
				key={todo.id}
				todo={todo}
				setCurrentTodo={setCurrentTodo}
				deleteTodo={handleDeleteTodo}
			/>)

	return (
		<div className='todo-app-item todo-list'>
			<SearchBar
				text={searchText}
				handleSearchText={handleSearchText}
				handleClear={handleClear}
			/>
			{todoItems}

			{!addTaskMode ?
				<button className='todo-app__add-button' onClick={handleTaskMode}>
					<span><GlobalSvgSelector id='add-button' /></span>
					Add task
				</button> :
				<AddTaskForm
					handleTaskMode={handleTaskMode}
					handleSubmit={handleSubmit}
				/>}

			<div className='column-resize'></div>
		</div>
	)
}

export default TodoList

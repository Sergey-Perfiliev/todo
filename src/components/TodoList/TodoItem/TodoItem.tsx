import GlobalSvgSelector from '../../../assets/GlobalSvgSelector'
import { Todo } from '../../../types/Todo'
import './TodoItem.scss'

type Props = {
	todo: Todo,
	setCurrentTodo: React.Dispatch<React.SetStateAction<Todo | null>>,
	deleteTodo: (e: React.MouseEvent<HTMLElement>, id: number) => void
}

const TodoItem = ({ todo, setCurrentTodo, deleteTodo }: Props) => {
	const { title, description, status } = todo
	const todoItemClassName = `todo-item ${status}`

	return (
		<div className={todoItemClassName} onClick={() => setCurrentTodo(todo)}>
			<div className='todo-item-container'>
				<h3 className='todo-item__title'>{title}</h3>
				<h4 className='todo-item__description'>{description}</h4>
			</div>
			<div className='todo-item__delete-button' onClick={(e) => deleteTodo(e, todo.id)}>
				<GlobalSvgSelector id='delete-button' />
			</div>
		</div>
	)
}

export default TodoItem

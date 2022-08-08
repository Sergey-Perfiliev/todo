import { useEffect } from 'react'
import { useInput } from '../../hooks/useInput'
import { useTodoContext } from '../../hooks/useTodoContext'
import { Todo } from '../../types/Todo'
import './TodoUpdateForm.scss'

type Props = {
	currentTodo: Todo,
}

const TodoUpdateForm = ({ currentTodo }: Props) => {
	const [title, handleTitleChange, setTitle] = useInput(currentTodo.title)
	const [description, handleDescriptionChange, setDescription] = useInput(currentTodo.description)
	const [status, handleStatusChange, setStatus] = useInput(currentTodo.description)
	const { updateTodoItem } = useTodoContext()

	useEffect(() => {
		setTitle(currentTodo.title)
		setDescription(currentTodo.description)
		setStatus(currentTodo.status)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTodo])

	const handleUpdate = () => {
		updateTodoItem({ title, description, id: currentTodo.id, status })
	}

	return (
		<form className='todo-update-form'>
			<div className='todo-update-form__input-wrapper'>
				<input
					type="text"
					className='todo-update-name'
					placeholder='Todo title'
					autoFocus
					value={title}
					onChange={handleTitleChange}
				/>
			</div>
			<div className='todo-update-form__input-wrapper'>
				<select className='todo-update-form__select' value={status} onChange={handleStatusChange}>
					<option value="pending">pending</option>
					<option value="in-progress">in progress</option>
					<option value="done">done</option>
				</select>
			</div>
			<div className='todo-update-form__input-wrapper'>
				<textarea
					name='description'
					className='todo-update-description'
					placeholder='Todo description'
					rows={5}
					value={description}
					onChange={handleDescriptionChange}
				/>
			</div>
			<div className='buttons'>
				<button disabled={!title} type='button' className='todo-button button-submit'
					onClick={handleUpdate}>
					Update
				</button>
			</div>
		</form>
	)
}

export default TodoUpdateForm

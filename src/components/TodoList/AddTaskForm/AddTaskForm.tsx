import { useInput } from "../../../hooks/useInput"
import { Todo } from "../../../types/Todo"
import { generateId } from "../../../utils/generateId"
import './AddTaskForm.scss'

type Props = {
	handleTaskMode: () => void,
	handleSubmit: (todo: Todo) => void
}

export const AddTaskForm = ({ handleTaskMode, handleSubmit }: Props) => {
	const [title, handleTitleChange] = useInput('')
	const [description, handleDescriptionChange] = useInput('')

	const handleAddTodo = () => {
		handleSubmit({ title, description: description, id: generateId(), status: 'pending' })
	}

	return <form className='add-todo-form'>
		<div>
			<input type="text" placeholder='Todo title' value={title} onChange={handleTitleChange} />
		</div>
		<div>
			<textarea
				name="todo-description" id="todo-description" placeholder='Todo description'
				value={description} onChange={handleDescriptionChange}
			></textarea>
		</div>
		<div className='buttons add-todo-form__buttons'>
			<button type='button' onClick={handleTaskMode} className='todo-button button-cancel'>Cancel</button>
			<button disabled={!title} type='button' onClick={handleAddTodo} className='todo-button button-submit'>Add</button>
		</div>
	</form>
}

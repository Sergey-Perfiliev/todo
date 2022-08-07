import { Todo } from '../../types/Todo'
import TodoUpdateForm from './TodoUpdateForm'
import './TodoUpdateForm.scss'

type Props = {
	currentTodo: Todo | null
}

const TodoUpdate = ({ currentTodo }: Props) => {
	return (
		<div className='todo-app-item todo-update' style={{ flex: '1' }}>
			{
				!!currentTodo ?
					<TodoUpdateForm currentTodo={currentTodo} /> :
					<h2 className='todo-choose noselect'>Choose Todo to Update</h2>
			}
		</div>
	)
}

export default TodoUpdate

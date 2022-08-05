import GlobalSvgSelector from '../../assets/GlobalSvgSelector'
import TodoItem from './TodoItem'
import './TodoList.scss'

type Props = {}

const TodoList = (props: Props) => {
	return (
		<div className='todo-app-item todo-list'>
			<TodoItem />
			<button className='todo-app__add-button'>
				<span><GlobalSvgSelector id='add-button' /></span>
				Add task
			</button>
		</div>
	)
}

export default TodoList

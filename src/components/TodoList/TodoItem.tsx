import './TodoItem.scss'

type Props = {}

const TodoItem = (props: Props) => {
	return (
		<div className='todo-item'>
			<h2 className='todo-item__title'>Todo Title</h2>
			<h3 className='todo-item__description'>Todo description</h3>
		</div>
	)
}

export default TodoItem

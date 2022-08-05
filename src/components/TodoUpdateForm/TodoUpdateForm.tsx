import './TodoUpdateForm.scss'

type Props = {}

const TodoUpdateForm = (props: Props) => {
	return (
		<div className='todo-app-item todo-update-form'>
			<div className='todo-update-form__input-wrapper'>
				<input
					type="text"
					className='todo-update-name'
					placeholder='Todo title'
					autoFocus
				/>
			</div>
			<div className='todo-update-form__input-wrapper'>
				<select className='todo-update-form__select'>
					<option value="option-pending">pending</option>
					<option value="option-in-progress">in progress</option>
					<option value="option-done">done</option>
				</select>
			</div>
			<div className='todo-update-form__input-wrapper'>
				<textarea
					name='description'
					className='todo-update-description'
					placeholder='Todo description'
					rows={5}
				/>
			</div>
		</div>
	)
}

export default TodoUpdateForm

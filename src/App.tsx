import './styles/App.scss';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import { Todo } from './types/Todo';
import TodoUpdate from './components/TodoUpdateForm/TodoUpdate';

function App() {
	const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

	return (
		<div className='todo-app'>
			<div className="todo-app__container">
				<TodoList
					currentTodo={currentTodo}
					setCurrentTodo={setCurrentTodo}
				/>
				<TodoUpdate
					currentTodo={currentTodo}
				/>
			</div>
		</div>
	);
}

export default App;

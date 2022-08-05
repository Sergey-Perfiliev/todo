import './styles/App.scss';
import TodoList from './components/TodoList/TodoList';
import TodoUpdateForm from './components/TodoUpdateForm/TodoUpdateForm';

function App() {
	return (
		<div className='todo-app'>
			<div className="todo-app__container">
				<TodoList />
				<TodoUpdateForm />
			</div>
		</div>
	);
}

export default App;

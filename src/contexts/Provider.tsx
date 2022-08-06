import { createContext, useReducer } from "react";
import { ActionKind } from '../state/Actions';
import { initialTodoState, TodoReducer } from "../state/Reducer";
import { StateType } from "../state/Reducer";
import { Todo } from "../types/Todo";

export const TodoContext = createContext<{
	todoList: StateType;
	addTodoItem: (todo: Todo) => void;
	updateTodoItem: (todo: Todo) => void;
	deleteTodoItem: (id: number) => void;
}>({
	todoList: initialTodoState,
	addTodoItem: () => null,
	updateTodoItem: () => null,
	deleteTodoItem: () => null,
});

export const Provider = ({ children }: any) => {
	const [state, dispatch] = useReducer(TodoReducer, initialTodoState);

	const value = {
		todoList: state,
		addTodoItem: (todo: Todo) => {
			dispatch({ type: ActionKind.Add, todo });
		},
		updateTodoItem: (todo: Todo) => {
			dispatch({ type: ActionKind.Update, todo })
		},
		deleteTodoItem: (id: number) => {
			dispatch({ type: ActionKind.Delete, id });
		},
	};

	return (
		<TodoContext.Provider value={value}>
			{children}
		</TodoContext.Provider>
	);
};

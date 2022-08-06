import { Todo } from "../types/Todo"
import { generateId } from "../utils/generateId";
import { ActionKind, ActionType } from './Actions';

type StateType = Todo[]
export type { StateType }

export const initialTodoState: StateType = [
	{
		title: 'Today I should clean my room',
		description: `Today is ${new Date(Date.now()).toLocaleDateString()}`,
		id: generateId(),
		status: 'pending'
	}
]

export const TodoReducer = (state: StateType = initialTodoState, action: ActionType) => {
	switch (action.type) {
		case ActionKind.Add:
			return [
				...state, { ...action.todo }
			]

		case ActionKind.Update:
			return [
				...state.map(todo =>
					todo.id === action.todo.id ? { ...action.todo } : todo)
			]

		case ActionKind.Delete:
			return [
				...state.filter(todo =>
					todo.id !== action.id)
			]

		default:
			return state
	}
}

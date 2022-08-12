import { Todo } from "../types/Todo"
import { generateId } from "../utils/generateId";
import { ActionKind, ActionType } from './Actions';

type StateType = Todo[]
export type { StateType }

const LS_TODO_KEY = 'todo-4c4e8594-cde4-489d-b574-d70f8ac4fcc6'

const defaultItem = JSON.stringify({
	title: 'Today I should clean my room',
	description: `Today is ${new Date(Date.now()).toLocaleDateString()}`,
	id: generateId(),
	status: 'pending'
})

export const initialTodoState: StateType = [
	...JSON.parse(localStorage.getItem(LS_TODO_KEY) ?? `[${defaultItem}]`)
]

export const TodoReducer = (state: StateType = initialTodoState, action: ActionType) => {
	switch (action.type) {
		case ActionKind.Add: {
			const newState = [...state, { ...action.todo }]
			localStorage.setItem(LS_TODO_KEY, JSON.stringify(newState))
			return newState
		}

		case ActionKind.Update: {
			const newState = [...state.map(todo => todo.id === action.todo.id ? { ...action.todo } : todo)]
			localStorage.setItem(LS_TODO_KEY, JSON.stringify(newState))
			return newState
		}

		case ActionKind.Delete: {
			const newState = [...state.filter(todo => todo.id !== action.id)]
			localStorage.setItem(LS_TODO_KEY, JSON.stringify(newState))
			return newState
		}

		default:
			return state
	}
}

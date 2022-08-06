import { Todo } from "../types/Todo";

export enum ActionKind {
	Add = 'ADD',
	Update = 'UPDATE',
	Delete = 'DELETE'
}

export type ActionType =
	| { type: ActionKind.Add, todo: Todo }
	| { type: ActionKind.Delete, id: number }
	| { type: ActionKind.Update, todo: Todo }

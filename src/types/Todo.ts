export type Todo = {
	title: string,
	description: string,
	status: 'in progress' | 'done' | 'pending',
	id: number,
}

import React from 'react'

import Todo from './Todo'

export default function TodoList ({todos, removeTodo, toggleChecked}) {
	
	return (
		<div className="todolist">
			{todos.map(todo => {
				return (
					<Todo key={todo.id} todo={todo} removeTodo={removeTodo} toggleChecked={toggleChecked}></Todo>
				)
			})}
		</div>
	)
}

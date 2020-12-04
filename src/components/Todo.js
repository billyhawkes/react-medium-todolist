import React from 'react'



export default function Todo ({todo, removeTodo, toggleChecked}) {

	function handleRemove() {
		removeTodo(todo.id);
	}

	function handleChecked() {
		toggleChecked(todo.id)
	}

	function checkStyle() {
		if (todo.completed) {
			return "line-through";
		}
		else {
			return "none";
		}
	}

	return (
		<div className="todo">
			<input type="checkbox" onChange={handleChecked}/>
			<div style={{textDecoration: checkStyle()}}>
			{todo.task}</div>
			<button onClick={handleRemove}>X</button>
		</div>
	)
}

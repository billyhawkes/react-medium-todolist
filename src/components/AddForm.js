import React, {useState} from 'react'


export default function AddForm({addTodo}) {
	const [value, changeValue] = useState('');



	function handleTodo (e) {
		e.preventDefault();
		if (value === '') return;
		addTodo(value)
		e.target.reset();
		changeValue('');
	}

	return (
		<form className="addform" onSubmit={handleTodo}>
			<input type="text" onChange={(e) => changeValue(e.target.value)}/>
			<button type="submit">Add</button>
		</form>
	)
}


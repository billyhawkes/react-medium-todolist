import './App.css';
import React, {useState} from 'react'
import {v4 as uuidv4 } from 'uuid'

import AddForm from './components/AddForm'
import TodoList from './components/TodoList'

const initialTodos = [
	{
		id: uuidv4(),
		task: "Add some Todos!",
		completed: false,
	}
]


function App() {
	const [todos, setTodos] = useState(initialTodos)

	function addTodo (value) {
		// New Todo
		const newTodo = {
			id: uuidv4(),
			task: value,
			completed: false
		}
		// Adds Todos
		const newTodos = todos.concat(newTodo)
		setTodos(newTodos);
	}

	function removeTodo (id) {
		setTodos(todos.filter(todo => todo.id !== id ? todo : null))	
	}

	function toggleChecked (id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		}))
	}

  return (
    <div>
		<header>
			<h1>Todo List</h1>
			<p>By: Billy Hawkes</p>
		</header>
		<div className="app">
			<AddForm addTodo={addTodo}></AddForm>
			<TodoList todos={todos} removeTodo={removeTodo} toggleChecked={toggleChecked}></TodoList>	
		</div>
    </div>
  );
}

export default App;

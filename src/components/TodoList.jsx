import React, { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([
		"Buy groceries",
		"Clean the house",
		"Walk the dog",
	]);
	const [selectedTodoIndex, setSelectedTodoIndex] = useState(-1);

	const handleTodoClick = (index) => {
		setSelectedTodoIndex(index);
	};

	return (
		<div className="w-50 mx-auto mt-5">
			<h2>To-Do List</h2>
			{!todos.length && (
				<h3 className="mt-2 mb-2">You have no tasks on your list.</h3>
			)}
			<ul className="list-group">
				{todos.map((todo, index) => (
					<strong>
						<li
							className={`list-group-item ${
								index === selectedTodoIndex ? "active" : ""
							}`}
							key={index}
							onClick={() => handleTodoClick(index)}
						>
							{todo}
						</li>
					</strong>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

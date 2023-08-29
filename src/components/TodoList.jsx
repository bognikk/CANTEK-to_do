import React from "react";

const TODO_TASKS = ["Buy groceries", "Clean the house", "Walk the dog"];

const TodoList = () => {
	const tasks = TODO_TASKS.map((task) => (
		<li key={Math.random()} className="list-group-item">
			{task}
		</li>
	));

	return (
		<>
			<div className="card mx-auto mt-5" style={{ width: "18rem" }}>
				<div className="card-body">
					{!TODO_TASKS.length && <h2>You have no tasks on your list.</h2>}
					<ul className="list-group">{tasks}</ul>
				</div>
			</div>
		</>
	);
};

export default TodoList;

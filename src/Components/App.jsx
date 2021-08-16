import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const App = () => {
	const [todoListItems, setTodoListItems] = useState([]);

	const generateKey = pre => {
		return `${pre}_${new Date().getTime()}`;
	};

	return (
		<main className='App'>
			<TodoForm
				onSubmit={text =>
					text &&
					setTodoListItems([
						{ id: generateKey(text), text, complete: false },
						...todoListItems,
					])
				}
			/>
			{todoListItems.length > 0 ? (
				<>
					<TodoList
						todoListItems={todoListItems}
						setTodoListItems={setTodoListItems}
					/>
					<button
						onClick={() => setTodoListItems([])}
						className='clear-list'
					>
						<FontAwesomeIcon icon={faTrash} /> clear list
					</button>
				</>
			) : null}
		</main>
	);
};

export default App;

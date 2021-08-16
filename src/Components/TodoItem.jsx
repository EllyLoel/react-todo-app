import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './App.css';

const TodoItem = ({ todoItem, todoListItems, setTodoListItems }) => {
	const { id, text, complete } = todoItem;

	const completedStyle = {
		textDecoration: 'line-through',
		color: 'rgba(0, 0, 0, 0.25)',
	};

	const completeTodo = id =>
		setTodoListItems(
			todoListItems.map(todo =>
				todo.id === id
					? {
							...todo,
							complete: !todo.complete,
					  }
					: todo
			)
		);

	const updateTodo = (e, id) =>
		setTodoListItems(
			todoListItems.map(todo =>
				todo.id === id
					? {
							...todo,
							text: e.target.value,
					  }
					: todo
			)
		);

	const deleteTodo = id =>
		setTodoListItems([...todoListItems].filter(todo => todo.id !== id));

	return (
		<div key={id} className='todo-item'>
			<label>
				<input
					type='checkbox'
					checked={complete}
					onClick={() => completeTodo(id)}
					style={{ display: 'none' }}
				/>

				{complete ? (
					<FontAwesomeIcon icon={faCheckCircle} />
				) : (
					<FontAwesomeIcon icon={faCircle} />
				)}
			</label>
			<input
				type='text'
				value={text}
				onChange={e => updateTodo(e, id)}
				className='todo-item'
				style={complete ? completedStyle : null}
			/>
			<label>
				<input
					type='checkbox'
					onClick={() => deleteTodo(id)}
					style={{ display: 'none' }}
				/>
				<FontAwesomeIcon icon={faTimesCircle} />
			</label>
		</div>
	);
};

export default TodoItem;

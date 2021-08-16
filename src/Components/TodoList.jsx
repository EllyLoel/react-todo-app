import React from 'react';
import TodoItem from './TodoItem';
import './App.css';

const TodoList = ({ todoListItems, setTodoListItems }) => {
	return (
		<div className='todo-list'>
			{todoListItems.map(todoItem => (
				<TodoItem
					todoItem={todoItem}
					todoListItems={todoListItems}
					setTodoListItems={setTodoListItems}
				/>
			))}
		</div>
	);
};

export default TodoList;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const useInputValue = initialValue => {
	const [value, setValue] = useState(initialValue);

	return {
		value,
		onChange: e => setValue(e.target.value),
		resetValue: () => setValue(''),
	};
};

const TodoForm = ({ onSubmit }) => {
	const { resetValue, ...text } = useInputValue('');

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(text.value);
		resetValue();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className='form-input'
				type='text'
				placeholder='I need to...'
				{...text}
			/>
			<button className='form-btn'>
				<FontAwesomeIcon icon={faPlusCircle} />
			</button>
		</form>
	);
};

export default TodoForm;

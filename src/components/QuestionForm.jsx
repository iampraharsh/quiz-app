import React, { useState } from 'react';

const initialOptions = ['', '', '', ''];
const QuestionForm = ({ onAdd }) => {
	const [question, setQuestion] = useState('');

	const [options, setOptions] = useState(initialOptions);
	const [answer, setAnswer] = useState('');

	// handle particular option value
	const handleOptionChange = (i, value) => {
		const update = [...options];
		update[i] = value;
		setOptions(update);
	};

	const handleAddQuestion = (e) => {
		e.preventDefault();

		if (
			!question.trim() ||
			options.some((opt) => !opt.trim()) ||
			!answer.trim()
		) {
			alert('Please fill all the fields');
		}

		const newQ = {
			question,
			options,
			answer,
		};

		onAdd(newQ);

		//reset form
		setQuestion('');
		setOptions(initialOptions);
		setAnswer('');
	};

	return (
		<div>
			<h1>Question Form</h1>

			<input
				type='text'
				placeholder='Enter question'
				value={question}
				onChange={(e) => setQuestion(e.target.value)}
			/>

			<h3>Options</h3>

			{options.map((opt, i) => (
				<input
					key={i}
					type='text'
					placeholder={`Option ${i + 1}`}
					value={opt}
					onChange={(e) => handleOptionChange(i, e.target.value)}
				/>
			))}

			<h3>Correct Answer</h3>

			<input
				type='text'
				placeholder='Enter correct answer'
				value={answer}
				onChange={(e) => setAnswer(e.target.value)}
			/>

			<button onClick={handleAddQuestion}>Add Question</button>
		</div>
	);
};

export default QuestionForm;

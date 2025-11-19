import React, { useEffect, useState } from 'react';
import QuestionForm from '../components/QuestionForm';

const Admin = () => {
	const [quiz, setQuiz] = useState([]);

	useEffect(() => {
		const savedQuiz = JSON.parse(localStorage.getItem('quiz')) || [];
		setQuiz(savedQuiz);
	}, []);

	const addQuestion = (newQ) => {
		const updatedQuiz = [...quiz, newQ];

		setQuiz(updatedQuiz);

		localStorage.setItem('quiz', JSON.stringify(updatedQuiz));
	};

	return (
		<div style={{ marginLeft: '20px' }}>
			<h1 style={{ marginLeft: '20px' }}>Admin Page</h1>

			<QuestionForm onAdd={addQuestion} />

			<h3 style={{ marginLeft: '20px' }}>Saved Questions</h3>

			{quiz.length === 0 && <p>No questions added yet.</p>}

			{quiz.map((q, index) => (
				<div
					key={index}
					style={{ marginBottom: '20px', marginLeft: '20px' }}
				>
					<strong>
						Q{index + 1}: {q.question}
					</strong>
				</div>
			))}
		</div>
	);
};

export default Admin;

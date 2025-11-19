import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
	const [quiz, setQuiz] = useState([]);

	const [currentQ, setCurrentQ] = useState(0);

	const [selected, setSelected] = useState(null);

	const [score, setScore] = useState(0);

	const navigate = useNavigate();

	useEffect(() => {
		const savedQuiz = JSON.parse(localStorage.getItem('quiz')) || [];
		setQuiz(savedQuiz);
	}, []);

	const handleSelect = (option) => {
		setSelected(option);

		if (option === quiz[currentQ].answer) {
			setScore((s) => s + 1);
		}
	};

	const handleNext = () => {
		if (currentQ + 1 < quiz.length) {
			setCurrentQ((q) => q + 1);
			setSelected(null);
		} else {
			navigate('/result', { state: { score, total: quiz.length } });
		}
	};

	if (quiz.length === 0) return <div>No quiz available</div>;

	return (
		<div style={{ marginLeft: '20px' }}>
			<h2>Quiz</h2>

			<h3>
				Question {currentQ + 1}/{quiz.length}
			</h3>

			{/* show current Question  */}

			<h3>{quiz[currentQ].question}</h3>

			{/* button options */}
			{quiz[currentQ].options.map((opt) => (
				<button
					key={opt}
					disabled={selected !== null}
					onClick={() => handleSelect(opt)}
					style={{
						marginRight: '10px',

						background:
							selected === opt
								? selected === quiz[currentQ].answer
									? 'lightgreen'
									: 'lightcoral'
								: '',
					}}
				>
					{opt}
				</button>
			))}

			{selected && (
				<div style={{ marginTop: '20px' }}>
					<button onClick={handleNext}>Next Question</button>
				</div>
			)}
		</div>
	);
};

export default Quiz;

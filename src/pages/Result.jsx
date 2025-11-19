import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Result = () => {
	const location = useLocation();
	const { score, total } = location.state || {};
	return (
		<div style={{ marginLeft: '20px' }}>
			<h1>Result</h1>

			<h3>
				Your Score: {score}/{total}
			</h3>

			<Link to='/quiz'>
				<button>Retake Quiz</button>
			</Link>
		</div>
	);
};

export default Result;

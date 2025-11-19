import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Admin from './pages/Admin';
import Result from './pages/Result';

const App = () => {
	return (
		<BrowserRouter>
			<div
				style={{
					marginLeft: '20px',
				}}
			>
				<h1>Quiz App</h1>
			</div>

			<nav
				style={{
					display: 'flex',
					gap: '30px',
					marginBottom: '20px',
					marginLeft: '20px',
				}}
			>
				<Link to='/quiz'>Take Quiz</Link>
				<Link to='/admin'>Admin Panel</Link>
			</nav>

			<Routes>
				<Route path='/admin' element={<Admin />} />
				<Route path='/quiz' element={<Quiz />} />
				<Route path='/result' element={<Result />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

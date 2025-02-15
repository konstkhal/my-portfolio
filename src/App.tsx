import React from 'react';
import './App.css';
import profilePic from './assets/profile.jpg';

const App: React.FC = () => {
	return (
		<div className='container'>
			<div className='profile-card'>
				<img
					src={profilePic}
					alt='Profile'
					className='avatar'
				/>
				<h1>Konstantin Haletckii</h1>
				<p>
					Full Stack Developer | React &
					Node.js
				</p>
				<div className='links'>
					<a
						href='https://github.com/konstkhal'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<a href='mailto:konstkhal+portfolio@gmail.com'>
						Email
					</a>
				</div>
			</div>
		</div>
	);
};

export default App;

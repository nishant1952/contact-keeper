import React from 'react';

const About = () => {
	return (
		<div className='form-container'>
			<div className=' bg-light m-3'>
				<h1>
					About This <span className='text-primary'>App</span>
				</h1>
			</div>

			<h2 className='text-center under'>
				Full stack Contact Manager with React hooks, context and JWT
				authentication.
			</h2>
			<div className='text-center under my-3'>
				<h2>
					Source Code hosted on -{' '}
					<a href='https://github.com/nishant1952' className='underline'>
						{' '}
						<i className='fab fa-github'> Github </i>
					</a>
				</h2>
			</div>
		</div>
	);
};
export default About;

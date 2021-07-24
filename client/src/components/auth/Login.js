import React, { useState, useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		if (error === 'Invalid Credentials') {
			setAlert(error, 'danger');
			clearErrors();
		}

		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { email, password } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<div className='bg-light m-3'>
				<h1>
					Account <span className='text-primary'>Login</span>
				</h1>
			</div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<div class='form__group field'>
						<input
							id='email'
							class='form__field'
							type='email'
							name='email'
							placeholder='Email Address'
							value={email}
							onChange={onChange}
							autoComplete='off'
						/>
						<label for='email' class='form__label'>
							Email Address
						</label>
					</div>
				</div>
				<div className='form-group'>
					<div class='form__group field'>
						<input
							id='password'
							class='form__field'
							type='password'
							name='password'
							placeholder='Password'
							value={password}
							onChange={onChange}
							autoComplete='off'
						/>
						<label for='password' class='form__label'>
							Password
						</label>
					</div>
				</div>

				<input
					type='submit'
					value='Login'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};
export default Login;

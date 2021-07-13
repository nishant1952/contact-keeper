import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = user;

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setAlert('Please enter all fields', 'danger');
		} else if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className='form-container'>
			<h1>
				<div className='bg-light m-3'>
					Account <span className='text-primary'>Register</span>
				</div>
			</h1>
			<form onSubmit={onSubmit}>
				<div className='form-group form__group field'>
					<input
						class='form__field'
						id='name'
						type='input'
						name='name'
						placeholder='Name'
						value={name}
						onChange={onChange}
						autoComplete='off'
					/>
					<label for='name' class='form__label'>
						Name
					</label>
				</div>
				<div className='form-group form__group field'>
					<input
						class='form__field'
						id='email'
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
				<div className='form-group form__group field'>
					<input
						class='form__field'
						id='password'
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={onChange}
						minLength='6'
						autoComplete='off'
					/>
					<label for='password' class='form__label'>
						Password
					</label>
				</div>
				<div className='form-group form__group field'>
					<input
						class='form__field'
						id='password2'
						type='password'
						name='password2'
						placeholder='Confirm Password'
						value={password2}
						onChange={onChange}
						minLength='6'
						autoComplete='off'
					/>
					<label for='password2' class='form__label'>
						Confirm Password
					</label>
				</div>
				<input
					type='submit'
					value='Register'
					className='btn btn-primary btn-block'
				/>
			</form>
		</div>
	);
};
export default Register;

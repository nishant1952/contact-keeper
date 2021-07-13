import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, clearCurrent, current } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({ name: '', email: '', phone: '', type: 'personal' });
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
	});
	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({ ...contact, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}
		clearAll();
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<form onSubmit={onSubmit}>
			<h1 className='text-light'>{current ? 'Edit Contact' : 'Add Contact'}</h1>
			<div class='form__group field'>
				<input
					class='form__field'
					type='text'
					placeholder='Name'
					name='name'
					value={name}
					onChange={onChange}
					autoComplete='off'
				/>
				<label for='name' class='form__label'>
					Name
				</label>
			</div>
			<div class='form__group field'>
				<input
					class='form__field'
					type='email'
					placeholder='Email'
					name='email'
					value={email}
					onChange={onChange}
					autoComplete='off'
				/>
				<label for='name' class='form__label'>
					Email
				</label>
			</div>
			<div class='form__group field'>
				<input
					class='form__field'
					type='text'
					placeholder='Phone'
					name='phone'
					value={phone}
					onChange={onChange}
					autoComplete='off'
				/>
				<label for='name' class='form__label'>
					Phone
				</label>
			</div>

			<div class='container-radio'>
				<label>
					<input
						type='radio'
						name='type'
						value='personal'
						checked={type === 'personal'}
						onChange={onChange}
					/>
					<span>Personal</span>
				</label>
				<label>
					<input
						type='radio'
						name='type'
						value='professional'
						checked={type === 'professional'}
						onChange={onChange}
					/>
					<span>Professional</span>
				</label>
			</div>
			<div>
				<input
					type='submit'
					value={current ? 'Update Contact' : 'Add Contact'}
					className='btn btn-primary btn-block'
				/>
			</div>
			{current && (
				<div>
					<button className='btn btn-light btn-block' onClick={clearAll}>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};
export default ContactForm;

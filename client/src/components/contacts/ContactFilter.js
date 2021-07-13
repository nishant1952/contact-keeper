import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef('');

	const { filterContacts, clearFilter, filtered } = contactContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = '';
		}
	});

	const onChange = (e) => {
		if (text.current.value !== '') {
			filterContacts(e.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<div className='form__group field'>
				<input
					id='filter'
					class='form__field'
					ref={text}
					type='text'
					placeholder='Filter Contacts...'
					onChange={onChange}
				/>
				<label for='filter' class='form__label'>
					Filter contacts...
				</label>
			</div>
		</form>
	);
};

export default ContactFilter;

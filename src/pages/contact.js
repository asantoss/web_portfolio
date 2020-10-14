/* eslint-disable  */
import React, { useState, useRef, useEffect } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function encode(data) {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}

function ContactPage({ location }) {
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	});
	const firstInput = useRef(null);
	useEffect(() => {
		if (firstInput.current) {
			firstInput.current.scrollIntoView({ behavior: 'smooth' });
			console.log('scrolled');
		}
	}, [firstInput]);
	const handleSubmit = (e) => {
		const { firstName, lastName, email, message } = values;
		const form = e.target;
		e.preventDefault();
		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: encode({
				'form-name': form.getAttribute('name'),
				firstName,
				lastName,
				email,
				message,
			}),
		})
			.then(() => {
				alert('Success!');
				form.reset();
			})
			.catch((error) => alert(error));
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<Layout {...{ location }}>
			<SEO
				keywords={[
					`web developer`,
					`atlanta`,
					`react`,
					`tailwindcss`,
					`graphql`,
					`full stack developer`,
					`atlanta`,
					`atlanta developer`,
				]}
				title='Contact'
			/>
			<section>
				<form
					onSubmit={handleSubmit}
					className='mx-auto md:w-1/2'
					name='contact'
					data-netlify='true'>
					<p className='mb-8 leading-loose text-gray-700 font-bold text-3xl'>
						Send me an email.
					</p>

					<label
						className='block mb-2 text-xs font-bold uppercase'
						htmlFor='first-name'>
						First Name
					</label>

					<input
						ref={firstInput}
						name='firstName'
						value={values.firstName}
						onChange={handleChange}
						className='w-full mb-6 form-input'
						id='first-name'
						placeholder='Bill'
						type='text'
					/>

					<label
						className='block mb-2 text-xs font-bold uppercase'
						htmlFor='last-name'>
						Last Name
					</label>

					<input
						name='lastName'
						value={values.lastName}
						onChange={handleChange}
						className='w-full mb-6 form-input'
						id='last-name'
						placeholder='Murray'
						type='text'
					/>

					<label
						className='block mb-2 text-xs font-bold uppercase'
						htmlFor='email'>
						Email
					</label>

					<input
						name='email'
						value={values.email}
						onChange={handleChange}
						className='w-full mb-6 form-input'
						id='email'
						placeholder='BMurray@email.com'
						type='text'
					/>

					<label
						className='block mb-2 text-xs font-bold uppercase'
						htmlFor='message'>
						Message
					</label>

					<textarea
						name='message'
						value={values.message}
						onChange={handleChange}
						className='w-full mb-6 form-textarea text-gray-800'
						id='message'
						placeholder='Say something...'
						rows='8'
					/>

					<button className='px-4 py-2 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600'>
						Submit
					</button>
				</form>
			</section>
		</Layout>
	);
}

export default ContactPage;

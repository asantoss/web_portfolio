/* eslint-disable react/prop-types */
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function ContactPage({ location }) {
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
					className='mx-auto md:w-1/2'
					name='contact'
					method='POST'
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
						className='w-full mb-6 form-input'
						id='last-name'
						placeholder='Murray'
						type='text'
					/>

					<label
						className='block mb-2 text-xs font-bold uppercase'
						htmlFor='message'>
						Message
					</label>

					<textarea
						className='w-full mb-6 form-textarea'
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

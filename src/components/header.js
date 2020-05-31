import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import TxtType from '../utils/typeWriter';
import { FaGithub, FaLinkedin, FaBook } from 'react-icons/fa';
export default function Header(props) {
	const types = [
		'Software Developer.',
		'Dog lover.',
		'Creative problem solver.',
		'Hire me!',
	];

	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "profile.jpg" }) {
				childImageSharp {
					# Specify a fixed image and fragment.
					# The default width is 400 pixels
					fixed {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	const typeEl = useRef();

	useEffect(() => {
		if (typeEl.current) {
			new TxtType(typeEl.current, types, 2000);
		}
	}, []);
	return (
		<section
			{...props}
			className='text-center profile right-0 lg:left-0 bg-gray-900 h-screen fixed w-full lg:w-1/2 flex items-center justify-center text-5xl font-bold flex-col'>
			<div className='mb-10 profile-picture'>
				<Img
					className='rounded-full shadow-xl'
					fixed={data.file.childImageSharp.fixed}
					alt=''
				/>
			</div>
			<h1>Alexander Santos</h1>
			<div className='links flex justify-between'>
				<a
					className='mx-2 hover:opacity-25'
					target='_blank'
					rel='noreferrer'
					href='https://github.com/asantoss
				'>
					<FaGithub />
				</a>
				<a
					className='mx-2 hover:opacity-25'
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/asantoss96/
				'>
					<FaLinkedin />
				</a>
				<a
					className='mx-2 hover:opacity-25'
					target='_blank'
					rel='noreferrer'
					href='https://drive.google.com/file/d/1IZavKy0F3btaHORN16nIAlLu6Hu2fUpi/view?usp=sharing
				'>
					<FaBook />
				</a>
			</div>
			<div className='h-64'>
				<h2 ref={typeEl} className='inline-block p-3 mb-4' />
			</div>
		</section>
	);
}

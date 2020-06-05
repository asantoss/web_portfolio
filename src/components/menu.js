/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import React from 'react';

function Menu({ location }) {
	return (
		<nav className='absolute right-0 top-0 z-20 text-2xl mx-3 hover:underline'>
			<Link
				className='block text-white no-underline'
				to={location.pathname !== '/' ? '/' : '/contact'}>
				{location.pathname !== '/' ? 'Home' : 'Contact Me!'}
			</Link>
		</nav>
	);
}

export default Menu;

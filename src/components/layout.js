import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Menu from './menu';

// eslint-disable-next-line react/prop-types
function Layout({ children, location }) {
	return (
		<div className='flex flex-col min-h-screen w-full font-sans bg-gray-900 text-white '>
			<Menu location={location} />
			<Header />
			<div
				style={{ top: '93vh' }}
				className='fixed flex items-center w-full justify-center text-4xl lg:w-1/2 lg:right-0'>
				<div>
					<i className='scroll fas fa-chevron-down'></i>
				</div>
			</div>
			<main
				style={{ top: '100vh' }}
				className='flex-1 lg:right-0 w-screen bg-gray-900 z-10 lg:w-1/2 min-h-screen absolute px-4 py-8 text-center mx-auto md:px-8 md:py-16'>
				{children}
			</main>
			{/* 
			<footer className='bg-gray-800'>
				<nav className='flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8'>
					<p className='text-white'>
						Created by{` `}
						<a
							className='font-bold no-underline'
							href='https://www.linkedin.com/in/asantoss96/'
							target='_blank'
							rel='noopener noreferrer'>
							Alexander Santos
						</a>
					</p>

					<div className='flex justify-between w-1/3'>
						<a
							className='font-bold text-white no-underline'
							href='https://github.com/asantoss'
							target='_blank'
							rel='noopener noreferrer'>
							GitHub
						</a>
						<a
							className='font-bold text-white no-underline'
							href='https://github.com/asantoss'
							target='_blank'
							rel='noopener noreferrer'>
							LinkedIn
						</a>
					</div>
				</nav>
			</footer> */}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

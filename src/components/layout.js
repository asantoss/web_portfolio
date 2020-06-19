import PropTypes from 'prop-types';
import React from 'react';

import Header from './header';
import Menu from './menu';

// eslint-disable-next-line react/prop-types
function Layout({ children, location }) {
	const handleClick = () => {
		if (typeof window !== 'undefined') {
			window.scrollTo({
				top: window.innerHeight,
				left: 100,
				behavior: 'smooth',
			});
		}
	};
	return (
		<div className='flex flex-col min-h-screen w-full font-sans bg-gray-900 text-white '>
			<Menu location={location} />
			<Header />
			<div
				onClick={handleClick}
				style={{ top: '90vh' }}
				className='fixed flex items-center  w-full justify-center text-4xl lg:w-1/2 lg:right-0 cursor-pointer'>
				<div>
					<i className='scroll fas fa-chevron-down'></i>
				</div>
			</div>
			<main
				style={{ top: '100vh' }}
				className='flex-1 lg:right-0 w-screen bg-gray-900 z-10 lg:w-1/2 min-h-screen absolute px-4 py-8 text-center mx-auto md:px-8 md:py-16'>
				{children}
			</main>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

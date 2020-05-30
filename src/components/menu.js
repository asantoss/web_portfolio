/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import React from 'react';

function Menu({ location }) {
	// const [isExpanded, toggleExpansion] = useState(false);
	// const { site } = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
	// `);

	return (
		<>
			{/* <button
				className='flex absolute right-0 z-30  items-center focus:outline-none block px-3 py-2 text-white '
				onClick={() => toggleExpansion(!isExpanded)}>
				<div className={`${isExpanded ? 'active' : ''} burger`}>
					<div className='bg-gray-300' />
					<div className='bg-gray-300' />
					<div className='bg-gray-300' />
				</div>
						className={`${
					isExpanded ? `block` : `hidden`
				} absolute w-48 h-32 z-20 bg-gray-700 rounded p-2 text-2xl`}
			</button> */}
			<nav className='absolute right-0 top-0 z-20 text-2xl mx-3 hover:underline'>
				<Link
					className='block text-white no-underline'
					to={location.pathname !== '/' ? '/' : '/contact'}>
					{location.pathname !== '/' ? 'Home' : 'Contact Me!'}
				</Link>
			</nav>
		</>
	);
}

export default Menu;

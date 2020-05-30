import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// eslint-disable-next-line react/prop-types
function NotFoundPage({ location }) {
	return (
		<Layout location={location}>
			<SEO title='404: Not found' />
			<div>
				<h2 className='bg-yellow-400 text-2xl font-bold inline-block my-8 p-3'>
					Looks like this page is a ghost that got abducted by aliens...
				</h2>
			</div>
		</Layout>
	);
}

export default NotFoundPage;

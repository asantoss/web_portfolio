import React from 'react';

export default function Skills(props) {
	return (
		<div {...props}>
			<h3 className='text-2xl font-bold self-start underline'>Skills:</h3>
			<div className='skills flex flex-wrap justify-between  w-full'>
				<i className='devicon-express-original mx-5 my-4'></i>
				<i className='devicon-react-plain mx-5 my-4'></i>
				<i className='devicon-html5-plain mx-5 my-4'></i>
				<i className='devicon-css3-plain mx-5 my-4'></i>
				<i className='devicon-github-plain mx-5 my-4'></i>
				<i className='devicon-postgresql-plain mx-5 my-4'></i>
				<i className='devicon-nodejs-plain mx-5 my-4'></i>
			</div>
		</div>
	);
}

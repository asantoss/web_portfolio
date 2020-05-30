const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Alexander Santos`,
		description: `Web Development portfolio`,
		author: `@asantoss`,
		// eslint-disable-next-line no-irregular-whitespace
		about: `Welcome to my site I'm glad to see you visit​ed​ me. I'​m​
    a full stack developer living in Atlanta with my wife and two beautiful doggos. I​’m​ experienced in
    multiple web technologies including HTML/CSS, JavaScript, React,
    Node.JS GraphQL & PostgresQL. I enjoy creating utilities and bringing ideas to life
	through code.I recently graduated from DigitalCrafts bootcamp in
    Atlanta and I’m looking for employment. I would like to add my
    passion for development started in my early years, I am a hardware
    geek, I have been building computers since I was 11 years old.​ From
    this day forward,​ I started to get very interested in all things
    technoloy. Today I am happy to finally become a software developer &
	I am ready to begin my journey in the field.`,
		projects: [
			{
				title: 'Client Manager',
				description: `CLIENT MANAGER
			Client manager is a full stack application that makes creating invoices a breeze through our easy to use web app. This is a solo project that consists of a PostgreSQL database with an Apollo GraphQL layer served by Express, and a React front end written in Typescript and built with Apollo Client, Redux, & Styled-Components.`,
				site: `https://client-man.netlify.com/`,
				repo: `https://github.com/asantoss/client-manager`,
				image: `client-manager`,
			},
			{
				title: 'JUST MUSIC',
				description: `This project is a full stack project using NodeJS,GraphQL, ReactJS, & PostgresQL. It is a fully featured spotify web player where users can create rooms for their friends and listen together synchronized.`,
				site: `https://justmusic.live/`,
				repo: `https://github.com/asantoss/JustMusic.live`,
				image: `justMusic`,
			},
			{
				title: 'TRIVIA DOM',
				description: `This project is build entirely using React and is hosted on Firebase. With React trivia you can create a rooms and start a trivia game with your friends. Just create a room and invite your friends to join you. Everything is in realtime and you can send them questions and find out who's been studying!`,
				site: `https://react-trivia-project.web.app/`,
				repo: `https://github.com/asantoss/reactTrivia`,
				image: `trivia-dom`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Alexander Santos Portfolio`,
				short_name: `Santos Portfolio`,
				start_url: `/`,
				background_color: fullConfig.theme.colors,
				theme_color: fullConfig.theme.colors.teal['400'],
				display: `minimal-ui`,
				icon: `src/images/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV === `production`
						? [require(`cssnano`)]
						: []),
				],
			},
		},
		`gatsby-plugin-offline`,
	],
};

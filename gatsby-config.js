const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Alexander Santos`,
		description: `Web Development portfolio`,
		author: `@asantoss`,
		// eslint-disable-next-line no-irregular-whitespace
		about: `I'​m​ a full stack developer living in Atlanta with my wife and two beautiful doggos. I loves all things tech, my hobbies include building extravagant computers with crazy RGB and creating beautiful web applications that can fix everyday problems.I​’m​ experienced in
    multiple web technologies including HTML/CSS, JavaScript, ReactJS,
    Node.JS GraphQL & PostgresQL. I also enjoy biking and long park days with my dogs. I'm a Certified Full Stack Developer and I’m seeking employment in Atlanta.`,
		projects: [
			{
				title: 'Client Manager',
				description: `
			Client manager is a full stack application that makes creating invoices a breeze through our easy to use web app. This is a full stack application that uses a micro services architecture to tie it all together. Using an Express Server with PostgreSQL to serve our GraphQL api on Heroku, we connect our client side React all written in Typescript and hosted on Netlify. This approach allows our app to grow and be easier to test each component.`,
				site: `https://client-man.netlify.com/`,
				repo: `https://github.com/asantoss/client-manager`,
				image: `client-manager`,
			},
			{
				title: 'JUST MUSIC',
				description: `This project is a full stack project using NodeJS,GraphQL, ReactJS, & PostgresQL. It is a fully featured spotify web player where users can create rooms for their friends and listen together synchronized. This a group project that consisted of 4 individuals. I was in charge of creating the backend portion, using Express along with Socket.IO we were able to connect users of our React front end to share state between their players.`,
				site: `https://justmusic.live/`,
				repo: `https://github.com/asantoss/JustMusic.live`,
				image: `justMusic`,
			},
			{
				title: 'TRIVIA DOM',
				description: `This project is build entirely using React and is hosted on Firebase. With React trivia you can create a rooms and start a trivia game with your friends. Just create a room and invite your friends to join you. Everything is in realtime and you can send them questions and find out who's been studying! Using React's great data binding to the view our users update our Firestore documents to drive the game, meanwhile our React app is synchronized with our firestore document.`,
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

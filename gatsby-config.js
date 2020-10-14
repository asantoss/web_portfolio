const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `Alexander Santos`,
		description: `Web Development portfolio`,
		author: `@asantoss`,
		// eslint-disable-next-line no-irregular-whitespace
		about: `I'​m​ a full stack developer living in Atlanta with my wife and two beautiful doggos. I loves all things tech, my hobbies include building extravagant computers with crazy RGB and dual boot configurations with Windows & Manjaro Linux. I also love creating beautiful web applications that can fix everyday problems.I​’m​ experienced in
    multiple web technologies including HTML/CSS, JavaScript, ReactJS, VueJs, ASP.NET,
    Node.JS GraphQL & PostgresQL. I also enjoy gaming and long park days with my dogs. I'm current a Front End Developer working for Netsoft Inc in Snellville, Ga.`,
		projects: [
			{
				title: 'Cultura Salon',
				description: `This is a site for a small business in Atlanta. Using Gatsby and React I was able to create a very performant site with great SEO. These and other reasons led me down the path of choosing this stack for this site. The increase in load times was definitely important for this project and that was another reason to go with a static site generator like gatsby.`,
				site: `https://culturasalon.com/`,
				repo: `https://github.com/asantoss/cultura-salon`,
				image: `cultura-salon`,
			},
			{
				title: 'Client Manager',
				description: `
			Client manager is a full stack application that makes creating invoices a breeze through our easy to use web app. This is a full stack application that uses a micro services architecture to tie it all together. Using an Express Server with PostgreSQL to serve our GraphQL api on Heroku, we connect our client side React all written in Typescript and hosted on Netlify. This approach allows our app to grow and allows isolated testing of each component.`,
				site: `https://client-man.netlify.com/`,
				repo: `https://github.com/asantoss/client-manager`,
				image: `client-manager`,
			},
			{
				title: 'Brookhave Plus',
				description: `This is a website for a small business in Brookhaven, GA. It is built with Nuxt using the VueJS framework.`,
				site: `https://brookhavenplus.com/`,
				repo: `https://github.com/asantoss/brookhavenplus`,
				image: `bhplus`,
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
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-145109659-2`,
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

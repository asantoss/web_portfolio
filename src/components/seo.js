import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
	const { site } = useStaticQuery(graphql`
		query DefaultSEOQuery {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? { name: `keywords`, content: keywords.join(`, `) }
						: []
				)
				.concat(meta)}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}>
			<link
				rel='stylesheet'
				href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
			/>
			<script
				src='https://kit.fontawesome.com/a75777859b.js'
				crossOrigin='anonymous'></script>
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: `en`,
	keywords: [],
	meta: [],
};

SEO.propTypes = {
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	lang: PropTypes.string,
	meta: PropTypes.array,
	title: PropTypes.string.isRequired,
};

export default SEO;

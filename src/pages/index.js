import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Projects from '../components/projects';
import Skills from '../components/skills';
import { graphql, useStaticQuery } from 'gatsby';

function IndexPage(props) {
	const { site } = useStaticQuery(graphql`
		query SiteAboutQuery {
			site {
				siteMetadata {
					title
					about
					projects {
						title
						description
						site
						repo
						image
					}
				}
			}
			allFile {
				edges {
					node {
						name
						publicURL
						extension
					}
				}
			}
		}
	`);
	return (
		// eslint-disable-next-line react/prop-types
		<Layout location={props.location}>
			<SEO
				keywords={[
					`web developer`,
					`atlanta`,
					`react`,
					`tailwindcss`,
					`graphql`,
					`full stack developer`,
				]}
				title='Home'
			/>
			<section className='flex shadow flex-col w-full items-center justify-start w-full text-5xl'>
				<div className='w-full flex flex-col text-left items-center my-10'>
					<h3 className='text-2xl font-bold self-start underline '>About: </h3>
					<p className='text-lg'>{site.siteMetadata.about}</p>
				</div>
				<Skills className='w-full flex flex-col text-left items-center my-10' />
				<Projects className='w-full flex flex-col text-left items-center my-10 projects' />
			</section>
		</Layout>
	);
}

export default IndexPage;

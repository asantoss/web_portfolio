import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaGithub, FaInternetExplorer } from 'react-icons/fa';
const GifPlayer = React.lazy(() => import('react-gif-player'));
export default function Projects(props) {
	const isSSR = typeof window === 'undefined';

	const { site, allFile } = useStaticQuery(graphql`
		query ProjectsQuery {
			site {
				siteMetadata {
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
		<div {...props}>
			<h3 className='text-2xl font-bold self-start underline'>Projects:</h3>
			{site.siteMetadata.projects.map((project, i) => {
				const imageGif =
					project.image &&
					allFile.edges.find(
						(e) => e.node.name === project.image && e.node.extension === 'gif'
					);
				return (
					<div className='text-sm my-20' key={i}>
						<h4 className='text-base font-semibold'>{project.title}</h4>
						<p>{project.description}</p>
						<div className='w-full text-center'>
							{!isSSR && (
								<React.Suspense fallback={<div />}>
									{project.image && (
										<GifPlayer
											autoplay={true}
											className='mx-auto'
											gif={imageGif?.node?.publicURL}
										/>
									)}
								</React.Suspense>
							)}
						</div>
						<div className='links flex justify-center w-full my-2'>
							<a
								aria-label={`github repo url for ${[project.title]}`}
								className='mx-5 border-solid border-4 w-24 text-blue-800 font-semibold text-lg rounded-full text-center border-blue-800'
								href={project.site}
								target='_blank'
								rel='noreferrer'>
								<FaGithub />
							</a>
							<a
								className='mx-5 border-solid border-4 w-24 text-blue-800 font-semibold text-lg rounded-full text-center border-blue-800'
								href={project.repo}
								aria-label={`Site url for ${[project.title]}`}
								target='_blank'
								rel='noreferrer'>
								<FaInternetExplorer />
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

import React from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import Blog from '../components/Blog/Blog';
import Requirements from '../components/Requirements/Requirements';
import Footer from '../components/Footer/Footer';

const StyledProjects = styled.section`
	margin: 50px 0;

	.projects {
		display: flex;
		justify-content: center;
		align-items: center;

		&__wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 50px 0;
		}

		&__desc {
			width: 50%;
			text-align: center;
		}
	}

	.projects {
		.container {
			align-items: center;
		}
	}
`;

export default function Websites() {
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledProjects>
				<div className="projects">
					<div className="container">
						<h1 className="section-title">Websites</h1>
						<div className="projects__wrapper">
							<p className="projects__desc">
								Supported mobile devices, easy to use independently, SEO
								friendly and ready for any expansion at any time. We create
								websites ideally suited to the needs of both you and your
								recipients. Check below what features they have.
							</p>
						</div>
					</div>
				</div>
			</StyledProjects>
			<Blog></Blog>
			<Requirements></Requirements>
			<Footer></Footer>
		</>
	);
}

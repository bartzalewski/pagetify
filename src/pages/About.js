import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import bz from '../images/bz.png';
import dg from '../images/dg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledAbout = styled.section`
	.sites__desc {
		margin-bottom: 50px;
	}

	.about {
		&__dev {
			font-weight: 500;
			font-size: 24px;
			margin-top: 1rem;
		}

		&__role {
			font-size: 16px;
			color: #7f7f7f;
			font-weight: 500;
		}

		&__wrapper {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 30px;
		}

		&__box {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 15px;
			transition: 0.2s ease-in-out;
			box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			}
		}

		&__social {
			margin: 1rem 0;
		}

		&__link {
			margin: 0 0.5rem;
			font-size: 18px;
		}

		&__link {
			&:hover {
				.about__icon {
					color: #49a9e0;
					transition: 0.2s ease-in-out;
				}
			}
		}

		&__icon {
			transition: 0.2s ease-in-out;
		}
	}
`;

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledAbout className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">About</h1>
						<div className="sites__wrapper">
							<p className="sites__desc">
								Supported mobile devices, easy to use independently, SEO
								friendly and ready for any expansion at any time. We create
								websites ideally suited to the needs of both you and your
								recipients. Check below what features they have.
							</p>
							<div className="about__wrapper">
								<div className="about__box">
									<img src={bz} alt="bart zalewski" className="about__avatar" />
									<p className="about__dev">Bart Zalewski</p>
									<p className="about__role">Front-end Developer</p>
									<div className="about__social">
										<a
											href="https://bartzalewski.com/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Website"
										>
											<FontAwesomeIcon icon="globe" className="about__icon" />
										</a>
										<a
											href="https://www.linkedin.com/in/bartzalewski/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="LinkedIn"
										>
											<FontAwesomeIcon
												icon={['fab', 'linkedin']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://twitter.com/bartzalewski_"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Twitter"
										>
											<FontAwesomeIcon
												icon={['fab', 'twitter']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://github.com/bartzalewski"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="GitHub"
										>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												className="about__icon"
											/>
										</a>
									</div>
								</div>
								<div className="about__box">
									<img src={dg} alt="david grzanka" className="about__avatar" />
									<p className="about__dev">David Grzanka</p>
									<p className="about__role">Back-end Developer</p>
									<div className="about__social">
										<a
											href="https://revore.pl/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Website"
										>
											<FontAwesomeIcon icon="globe" className="about__icon" />
										</a>
										<a
											href="https://www.linkedin.com/in/dawid-grzanka-a84a98180/"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="LinkedIn"
										>
											<FontAwesomeIcon
												icon={['fab', 'linkedin']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://twitter.com/Daw_Grzanka"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="Twitter"
										>
											<FontAwesomeIcon
												icon={['fab', 'twitter']}
												className="about__icon"
											/>
										</a>
										<a
											href="https://github.com/revoree"
											target="_blank"
											rel="noopener noreferrer"
											className="about__link"
											title="GitHub"
										>
											<FontAwesomeIcon
												icon={['fab', 'github']}
												className="about__icon"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</StyledAbout>
		</>
	);
}

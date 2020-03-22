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

	.section__subtitle {
		margin-bottom: 50px;
	}

	.about {
		&__dev {
			font-weight: 500;
			font-size: 24px;
			margin-top: 1rem;
			transition: 0.2s ease-in-out;
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
			outline: 2px solid transparent;

			&:hover {
				transition: 0.2s ease-in-out;
				box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				outline: 2px solid #49a9e0;

				.about__dev {
					color: #49a9e0;
					transition: 0.2s ease-in-out;
				}

				.about__avatar {
					border: 2px solid #49a9e0;
					border-radius: 100%;
					transition: 0.2s ease-in-out;
				}
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

		&__avatar {
			border: 2px solid transparent;
			border-radius: 100%;
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
								At Pagetify, we create high-performance websites, apps, and
								stunning graphics that deliver ultimate experiences for
								businesses, bloggers and more. We believe that creating
								modern-looking websites.
							</p>
							<p className="sites__desc">
								We are a small and therefore very suitable team. We focus on
								everything that your company needs - starting from creating a
								website or store, through the development of the website.
							</p>
							<p className="sites__desc">
								By working with us, you know who you are talking to and who is
								responsible for what. We completely reject the general and
								template approach - each order is considered by us completely
								individually, tailored to your needs.
							</p>
							<p className="sites__desc">
								This is what makes us different from the big companies - contact
								with us is fast and efficient. We also provide support after any
								project. Just contact us and we will try to help in every
								situation.
							</p>
							<p className="sites__desc">
								Our small team is made up of hard-working, motivated and
								continuously learning developers that know how to deliver the
								perfect final product.
							</p>
							<p className="sites__desc">
								Web Development is our passion, and we’re passionate about
								helping people reach their goals. So when you choose us as your
								web developers, you won’t be disappointed — you'll get a custom
								brief that fits your needs, and your goals.
							</p>
							<p className="sites__desc">
								Want to learn more about us making our clients happy? Check out
								our portfolio and client testimonials to hear directly from the
								business owners who've worked with us.
							</p>
							<p className="section__subtitle">Our team</p>
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

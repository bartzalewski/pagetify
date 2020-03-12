import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo-black.png';
import { Link } from 'react-router-dom';

const StyledFooter = styled.footer`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 80px;

	.footer {
		&__wrapper {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 30px;
		}

		&__box {
			p {
				margin: 5px 0;
			}

			img {
				width: 75%;
			}
		}

		&__title {
			font-weight: 600;
			font-size: 18px;
			margin-bottom: 1rem;
		}

		&__content {
			display: flex;
			flex-direction: column;

			a:not(.footer__homepage) {
				margin: 2.5px 0;
				position: relative;
				width: fit-content;

				&::before {
					content: '';
					height: 1px;
					width: 100%;
					background: #293347;
					transform: scaleX(0);
					position: absolute;
					bottom: 0;
					transition: 0.2s ease-in-out;
				}

				&:hover::before {
					transition: 0.2s ease-in-out;
					transform: scaleX(1);
				}
			}

			img {
				margin-bottom: 1rem;
			}
		}

		&__line {
			width: 100%;
			margin-top: 50px;
		}

		&__copyright {
			margin: 50px 0;
			font-size: 14px;
			font-weight: 500;
		}
	}
`;

export default function Footer() {
	return (
		<StyledFooter>
			<div className="footer">
				<div className="container">
					<div className="footer__wrapper">
						<div className="footer__box">
							<div className="footer__title">Info</div>
							<div className="footer__content">
								<Link
									to="/"
									className="footer__homepage"
									onClick={() => window.scrollTo(0, 0)}
								>
									<img src={logo} alt="pagetify logo" />
								</Link>
								<a href="tel:+48531797647">✆ +48 531 797 647</a>
								<a href="tel:+48882193371">✆ +48 882 193 371</a>
								<a href="mailto:mail@pagetify.com">✉ mail@pagetify.com</a>
							</div>
						</div>
						<div className="footer__box">
							<div className="footer__title">Services</div>
							<div className="footer__content">
								<Link to="/websites">Websites</Link>
								<Link to="/stores">Online stores</Link>
								<Link to="/graphics">Graphic design</Link>
							</div>
						</div>
						<div className="footer__box">
							<div className="footer__title">More</div>
							<div className="footer__content">
								<Link to="/projects">Projects</Link>
								<Link to="/about">About</Link>
								<Link to="/blog">Blog</Link>
								<Link to="/contact">Contact</Link>
								<Link to="/price">Price</Link>
								<Link to="/privacy-policy">Privacy Policy</Link>
							</div>
						</div>
						<div className="footer__box">
							<div className="footer__title">Newest posts</div>
							<div className="footer__content">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Maxime, aspernatur?
								</p>
							</div>
						</div>
					</div>
					<hr className="footer__line" />
					<p className="footer__copyright">
						Pagetify &copy; 2019-2020. All rights reserved.
					</p>
				</div>
			</div>
		</StyledFooter>
	);
}

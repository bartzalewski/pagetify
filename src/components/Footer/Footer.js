import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo-black.png';

const StyledFooter = styled.nav`
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
							<img src={logo} alt="pagetify logo" />
							<p>+48 531 797 647</p>
							<p>+48 882 193 371</p>
							<p>mail@pagetify.com</p>
						</div>
						<div className="footer__box">
							<div className="footer__title">Services</div>
							<p>Websites</p>
							<p>Online stores</p>
							<p>Graphic design</p>
						</div>
						<div className="footer__box">
							<div className="footer__title">More</div>
							<p>Projects</p>
							<p>About</p>
							<p>Blog</p>
							<p>Contact</p>
							<p>Price</p>
							<p>Privacy Policy</p>
						</div>
						<div className="footer__box">
							<div className="footer__title">Newest posts</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Maxime, aspernatur?
							</p>
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

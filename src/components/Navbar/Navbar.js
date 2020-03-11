import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo-white.png';

const StyledNavbar = styled.nav`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 80px;

	.navbar-container {
		width: 1140px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		.right {
			display: flex;
			font-weight: 500;
			align-items: center;
			justify-content: space-between;
			width: 50%;

			a {
				color: #fff;
				position: relative;
			}

			.navbar__link::before {
				content: '';
				height: 1px;
				width: 100%;
				background: #fff;
				transform: scaleX(0);
				position: absolute;
				bottom: 0;
				transition: 0.2s ease-in-out;
			}

			.navbar__link:hover::before {
				transition: 0.2s ease-in-out;
				transform: scaleX(1);
			}

			.navbar-price {
				border: none;
				border-radius: 25px;
				background-image: linear-gradient(to right, #36d1dc, #5b86e5);
				color: #fff;
				padding: 10px 30px;
				font-weight: 600;
				box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
				transition: 0.2s ease-in-out;

				&:hover {
					transition: 0.2s ease-in-out;
					box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
				}
			}
		}
	}
`;

export default function Navbar() {
	return (
		<StyledNavbar>
			<div className="container navbar-container">
				<div className="left">
					<a href="!#">
						<img src={logo} alt="" />
					</a>
				</div>
				<ul className="right">
					<a className="navbar__link" href="!#">
						<li>Services</li>
					</a>
					<a className="navbar__link" href="!#">
						<li>Projects</li>
					</a>
					<a className="navbar__link" href="!#">
						<li>About</li>
					</a>
					<a className="navbar__link" href="!#">
						<li>Blog</li>
					</a>
					<a className="navbar__link" href="!#">
						<li>Contact</li>
					</a>
					<a href="!#" className="navbar-price">
						<li>Price</li>
					</a>
				</ul>
			</div>
		</StyledNavbar>
	);
}

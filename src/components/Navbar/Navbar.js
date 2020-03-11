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
			}

			.navbar-price {
				border: none;
				border-radius: 25px;
				background-image: linear-gradient(to right, #36d1dc, #5b86e5);
				color: #fff;
				padding: 10px 30px;
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
					<a href="!#">
						<li>Services</li>
					</a>
					<a href="!#">
						<li>Projects</li>
					</a>
					<a href="!#">
						<li>About</li>
					</a>
					<a href="!#">
						<li>Blog</li>
					</a>
					<a href="!#">
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

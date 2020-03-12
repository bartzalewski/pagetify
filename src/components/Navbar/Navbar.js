import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-white.png';
import tickright from '../../images/tick-right.svg';
import tickdown from '../../images/tick-down.svg';

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

				li::after {
					content: 'a';
					color: transparent;
					background: url(${tickright}) center no-repeat;
					margin-left: 0.5rem;
				}

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
					<NavLink exact to="/">
						<img src={logo} alt="" />
					</NavLink>
				</div>
				<ul className="right">
					<div className="navbar__wrapper navbar__link navbar__services">
						<NavLink activeClassName="active" to="/services">
							<li>Services</li>
						</NavLink>
						<div className="navbar__more">
							<div className="navbar__more__content">
								<NavLink to="/websites">Websites</NavLink>
								<NavLink to="/stores">Online stores</NavLink>
								<NavLink to="/graphics">Graphic design</NavLink>
							</div>
						</div>
					</div>
					<NavLink
						activeClassName="active"
						to="/projects"
						className="navbar__link"
					>
						<li>Projects</li>
					</NavLink>
					<NavLink
						activeClassName="active"
						to="/about"
						className="navbar__link"
					>
						<li>About</li>
					</NavLink>
					<NavLink activeClassName="active" to="/blog" className="navbar__link">
						<li>Blog</li>
					</NavLink>
					<NavLink
						activeClassName="active"
						to="/contact"
						className="navbar__link"
					>
						<li>Contact</li>
					</NavLink>
					<NavLink to="/price" className="navbar-price">
						<li>Price</li>
					</NavLink>
				</ul>
			</div>
		</StyledNavbar>
	);
}

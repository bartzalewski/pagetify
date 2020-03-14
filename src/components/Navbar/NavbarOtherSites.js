import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-black.png';
import tickright from '../../images/tick-right.svg';

const StyledNavbarOtherSites = styled.nav`
	display: flex;
	justify-content: center;
	width: 100vw;
	height: 80px;

	.navbar-container {
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
				color: inherit;
				position: relative;
			}

			.navbar__link::before {
				content: '';
				height: 1px;
				width: 100%;
				background: #293347;
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
					transform: scale(1.05);
				}
			}
		}
	}
`;

class NavbarOtherSites extends Component {
	state = {
		condition: false
	};
	handleClick = () => {
		this.setState({
			condition: !this.state.condition
		});
	};
	render() {
		return (
			<StyledNavbarOtherSites className="navbar">
				<div
					id="sidenav"
					class={this.state.condition ? 'sidenav sidenav--open' : 'sidenav'}
				>
					<NavLink
						to="/services"
						activeClassName="active"
						class="navbar__services"
					>
						Services
					</NavLink>
					<NavLink
						to="/projects"
						activeClassName="active"
						class="navbar__projects"
					>
						Projects
					</NavLink>
					<NavLink to="/about" activeClassName="active" class="navbar__about">
						About
					</NavLink>
					<NavLink to="/blog" activeClassName="active" class="navbar__blog">
						Blog
					</NavLink>
					<NavLink
						to="/contact"
						activeClassName="active"
						class="navbar__contact"
					>
						Contact
					</NavLink>
				</div>
				<div className="container navbar-container">
					<div className="left navbar__left">
						<NavLink exact to="/">
							<img src={logo} alt="" />
						</NavLink>
					</div>
					<div class="hamburger" onClick={this.handleClick}>
						<div
							class={
								this.state.condition
									? 'hamburger__wrapper icon close'
									: 'hamburger__wrapper icon'
							}
						>
							<span class="hamburger--line top"></span>
							<span class="hamburger--line middle"></span>
							<span class="hamburger--line bottom"></span>
						</div>
					</div>
					<ul className="right navbar__right">
						<div className="navbar__wrapper navbar__link navbar__services">
							<NavLink activeClassName="active" to="/services">
								<li>Services</li>
							</NavLink>
							<div className="navbar__more">
								<div className="navbar__more__content">
									<NavLink to="/websites">
										<svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M14.1667 47.5H12.5001C12.2791 47.5 12.0671 47.4122 11.9108 47.256C11.7545 47.0997 11.6667 46.8877 11.6667 46.6667C11.6667 46.4457 11.7545 46.2337 11.9108 46.0775C12.0671 45.9212 12.2791 45.8334 12.5001 45.8334H14.1667C14.3878 45.8334 14.5997 45.9212 14.756 46.0775C14.9123 46.2337 15.0001 46.4457 15.0001 46.6667C15.0001 46.8877 14.9123 47.0997 14.756 47.256C14.5997 47.4122 14.3878 47.5 14.1667 47.5Z" />
											<path d="M42.5 6.66663H25.8333C25.6123 6.66663 25.4004 6.75442 25.2441 6.9107C25.0878 7.06698 25 7.27895 25 7.49996V20.8333C25 21.0543 25.0878 21.2663 25.2441 21.4225C25.4004 21.5788 25.6123 21.6666 25.8333 21.6666H42.5C42.721 21.6666 42.933 21.5788 43.0893 21.4225C43.2455 21.2663 43.3333 21.0543 43.3333 20.8333V7.49996C43.3333 7.27895 43.2455 7.06698 43.0893 6.9107C42.933 6.75442 42.721 6.66663 42.5 6.66663ZM41.6667 8.33329V10.8333H26.6667V8.33329H41.6667ZM26.6667 12.5H33.3333V20H26.6667V12.5ZM35 20V12.5H41.6667V20H35Z" />
											<path d="M45.8333 0H4.16667C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667V34.1667C0.0012121 35.1268 0.333408 36.0572 0.940598 36.801C1.54779 37.5448 2.39284 38.0566 3.33333 38.25V45.8333C3.33466 46.938 3.77407 47.997 4.55518 48.7781C5.3363 49.5593 6.39534 49.9987 7.5 50H40.8333C41.0543 50 41.2663 49.9122 41.4226 49.7559C41.5789 49.5996 41.6667 49.3877 41.6667 49.1667V47.5C41.6653 46.3953 41.2259 45.3363 40.4448 44.5552C39.6637 43.7741 38.6047 43.3347 37.5 43.3333H31.6667V38.3333H45.8333C46.938 38.332 47.997 37.8926 48.7781 37.1115C49.5593 36.3304 49.9987 35.2713 50 34.1667V4.16667C49.9987 3.062 49.5593 2.00296 48.7781 1.22185C47.997 0.440735 46.938 0.00132321 45.8333 0V0ZM21.6667 45.8333C21.6667 46.4964 21.4033 47.1323 20.9344 47.6011C20.4656 48.0699 19.8297 48.3333 19.1667 48.3333H7.5C6.83696 48.3333 6.20107 48.0699 5.73223 47.6011C5.26339 47.1323 5 46.4964 5 45.8333V45H21.6667V45.8333ZM21.6667 43.3333H5V24.1667C5 23.5036 5.26339 22.8677 5.73223 22.3989C6.20107 21.9301 6.83696 21.6667 7.5 21.6667H19.1667C19.8297 21.6667 20.4656 21.9301 20.9344 22.3989C21.4033 22.8677 21.6667 23.5036 21.6667 24.1667V43.3333ZM19.1667 20H7.5C6.59544 20.0031 5.71699 20.3035 5 20.855V5H45V30H23.3333V24.1667C23.332 23.062 22.8926 22.003 22.1115 21.2218C21.3304 20.4407 20.2713 20.0013 19.1667 20V20ZM23.3333 38.3333H30V43.3333H23.3333V38.3333ZM37.5 45C38.163 45 38.7989 45.2634 39.2678 45.7322C39.7366 46.2011 40 46.837 40 47.5V48.3333H22.4783C23.0298 47.6163 23.3303 46.7379 23.3333 45.8333V45H37.5ZM48.3333 34.1667C48.3333 34.8297 48.0699 35.4656 47.6011 35.9344C47.1323 36.4033 46.4964 36.6667 45.8333 36.6667H23.3333V36.0167C23.6917 36.3424 24.137 36.5571 24.6151 36.6345C25.0932 36.7119 25.5834 36.6489 26.0263 36.4529C26.4692 36.257 26.8457 35.9366 27.1099 35.5307C27.3742 35.1249 27.5149 34.651 27.5149 34.1667C27.5149 33.6824 27.3742 33.2085 27.1099 32.8026C26.8457 32.3967 26.4692 32.0764 26.0263 31.8804C25.5834 31.6845 25.0932 31.6214 24.6151 31.6988C24.137 31.7763 23.6917 31.9909 23.3333 32.3167V31.6667H45.8333C46.0543 31.6667 46.2663 31.5789 46.4226 31.4226C46.5789 31.2663 46.6667 31.0543 46.6667 30.8333V4.16667C46.6667 3.94565 46.5789 3.73369 46.4226 3.57741C46.2663 3.42113 46.0543 3.33333 45.8333 3.33333H4.16667C3.94565 3.33333 3.73369 3.42113 3.57741 3.57741C3.42113 3.73369 3.33333 3.94565 3.33333 4.16667V36.5133C2.84758 36.3416 2.42674 36.024 2.12841 35.6039C1.83007 35.1839 1.6688 34.6819 1.66667 34.1667V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H45.8333C46.4964 1.66667 47.1323 1.93006 47.6011 2.3989C48.0699 2.86774 48.3333 3.50363 48.3333 4.16667V34.1667ZM24.1667 34.1667C24.1667 34.0018 24.2155 33.8407 24.3071 33.7037C24.3987 33.5667 24.5288 33.4598 24.6811 33.3968C24.8334 33.3337 25.0009 33.3172 25.1626 33.3493C25.3242 33.3815 25.4727 33.4609 25.5893 33.5774C25.7058 33.694 25.7852 33.8424 25.8173 34.0041C25.8495 34.1657 25.833 34.3333 25.7699 34.4856C25.7068 34.6378 25.6 34.768 25.463 34.8596C25.3259 34.9511 25.1648 35 25 35C24.779 35 24.567 34.9122 24.4107 34.7559C24.2545 34.5996 24.1667 34.3877 24.1667 34.1667Z" />
											<path d="M19.1667 23.3334H7.50008C7.27907 23.3334 7.06711 23.4212 6.91083 23.5775C6.75455 23.7337 6.66675 23.9457 6.66675 24.1667V35.8334C6.66675 36.0544 6.75455 36.2663 6.91083 36.4226C7.06711 36.5789 7.27907 36.6667 7.50008 36.6667H19.1667C19.3878 36.6667 19.5997 36.5789 19.756 36.4226C19.9123 36.2663 20.0001 36.0544 20.0001 35.8334V24.1667C20.0001 23.9457 19.9123 23.7337 19.756 23.5775C19.5997 23.4212 19.3878 23.3334 19.1667 23.3334ZM12.5001 35H8.33341V28.3334H12.5001V35ZM18.3334 35H14.1667V28.3334H18.3334V35ZM18.3334 26.6667H8.33341V25H18.3334V26.6667Z" />
											<path d="M19.1667 37.5H7.50008C7.27907 37.5 7.06711 37.5878 6.91083 37.7441C6.75455 37.9004 6.66675 38.1123 6.66675 38.3333C6.66675 38.5543 6.75455 38.7663 6.91083 38.9226C7.06711 39.0789 7.27907 39.1667 7.50008 39.1667H19.1667C19.3878 39.1667 19.5997 39.0789 19.756 38.9226C19.9123 38.7663 20.0001 38.5543 20.0001 38.3333C20.0001 38.1123 19.9123 37.9004 19.756 37.7441C19.5997 37.5878 19.3878 37.5 19.1667 37.5Z" />
											<path d="M19.1667 40H7.50008C7.27907 40 7.06711 40.0878 6.91083 40.2441C6.75455 40.4004 6.66675 40.6123 6.66675 40.8333C6.66675 41.0543 6.75455 41.2663 6.91083 41.4226C7.06711 41.5789 7.27907 41.6667 7.50008 41.6667H19.1667C19.3878 41.6667 19.5997 41.5789 19.756 41.4226C19.9123 41.2663 20.0001 41.0543 20.0001 40.8333C20.0001 40.6123 19.9123 40.4004 19.756 40.2441C19.5997 40.0878 19.3878 40 19.1667 40Z" />
											<path d="M42.5 25H25.8333C25.6123 25 25.4004 24.9122 25.2441 24.756C25.0878 24.5997 25 24.3877 25 24.1667C25 23.9457 25.0878 23.7337 25.2441 23.5775C25.4004 23.4212 25.6123 23.3334 25.8333 23.3334H42.5C42.721 23.3334 42.933 23.4212 43.0893 23.5775C43.2455 23.7337 43.3333 23.9457 43.3333 24.1667C43.3333 24.3877 43.2455 24.5997 43.0893 24.756C42.933 24.9122 42.721 25 42.5 25Z" />
											<path d="M42.5 28.3333H25.8333C25.6123 28.3333 25.4004 28.2455 25.2441 28.0892C25.0878 27.9329 25 27.721 25 27.5C25 27.2789 25.0878 27.067 25.2441 26.9107C25.4004 26.7544 25.6123 26.6666 25.8333 26.6666H42.5C42.721 26.6666 42.933 26.7544 43.0893 26.9107C43.2455 27.067 43.3333 27.2789 43.3333 27.5C43.3333 27.721 43.2455 27.9329 43.0893 28.0892C42.933 28.2455 42.721 28.3333 42.5 28.3333Z" />
											<path d="M20.8333 11.6666H9.16659C8.94557 11.6666 8.73361 11.5788 8.57733 11.4225C8.42105 11.2663 8.33325 11.0543 8.33325 10.8333V7.49996C8.33325 7.27895 8.42105 7.06698 8.57733 6.9107C8.73361 6.75442 8.94557 6.66663 9.16659 6.66663H20.8333C21.0543 6.66663 21.2662 6.75442 21.4225 6.9107C21.5788 7.06698 21.6666 7.27895 21.6666 7.49996V10.8333C21.6666 11.0543 21.5788 11.2663 21.4225 11.4225C21.2662 11.5788 21.0543 11.6666 20.8333 11.6666ZM9.99992 9.99996H19.9999V8.33329H9.99992V9.99996Z" />
											<path d="M20.8333 18.3334H9.16659C8.94557 18.3334 8.73361 18.2456 8.57733 18.0893C8.42105 17.933 8.33325 17.7211 8.33325 17.5V14.1667C8.33325 13.9457 8.42105 13.7337 8.57733 13.5775C8.73361 13.4212 8.94557 13.3334 9.16659 13.3334H20.8333C21.0543 13.3334 21.2662 13.4212 21.4225 13.5775C21.5788 13.7337 21.6666 13.9457 21.6666 14.1667V17.5C21.6666 17.7211 21.5788 17.933 21.4225 18.0893C21.2662 18.2456 21.0543 18.3334 20.8333 18.3334ZM9.99992 16.6667H19.9999V15H9.99992V16.6667Z" />
										</svg>
										<div className="navbar__more--flex">
											<p>Websites</p>
											<span>
												Responsible, SEO-friendly and convenient websites.
											</span>
										</div>
									</NavLink>
									<NavLink to="/stores">
										<svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M49.1667 5C48.9457 5 48.7337 5.0878 48.5774 5.24408C48.4211 5.40036 48.3333 5.61232 48.3333 5.83333V34.1667C48.3333 34.8297 48.0699 35.4656 47.6011 35.9344C47.1323 36.4033 46.4964 36.6667 45.8333 36.6667H4.16667C3.50363 36.6667 2.86774 36.4033 2.3989 35.9344C1.93006 35.4656 1.66667 34.8297 1.66667 34.1667V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H40C40.221 1.66667 40.433 1.57887 40.5893 1.42259C40.7455 1.26631 40.8333 1.05435 40.8333 0.833333C40.8333 0.61232 40.7455 0.400358 40.5893 0.244078C40.433 0.0877973 40.221 0 40 0H4.16667C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667V34.1667C0.00132321 35.2713 0.440735 36.3304 1.22185 37.1115C2.00296 37.8926 3.062 38.332 4.16667 38.3333H18.3333V43.3333H12.5C11.3953 43.3347 10.3363 43.7741 9.55518 44.5552C8.77407 45.3363 8.33466 46.3953 8.33333 47.5V49.1667C8.33333 49.3877 8.42113 49.5996 8.57741 49.7559C8.73369 49.9122 8.94565 50 9.16667 50H40.8333C41.0543 50 41.2663 49.9122 41.4226 49.7559C41.5789 49.5996 41.6667 49.3877 41.6667 49.1667V47.5C41.6653 46.3953 41.2259 45.3363 40.4448 44.5552C39.6637 43.7741 38.6047 43.3347 37.5 43.3333H31.6667V38.3333H45.8333C46.938 38.332 47.997 37.8926 48.7781 37.1115C49.5593 36.3304 49.9987 35.2713 50 34.1667V5.83333C50 5.61232 49.9122 5.40036 49.7559 5.24408C49.5996 5.0878 49.3877 5 49.1667 5ZM40 47.5V48.3333H10V47.5C10 46.837 10.2634 46.2011 10.7322 45.7322C11.2011 45.2634 11.837 45 12.5 45H37.5C38.163 45 38.7989 45.2634 39.2678 45.7322C39.7366 46.2011 40 46.837 40 47.5V47.5ZM30 43.3333H20V38.3333H30V43.3333Z" />
											<path d="M46.6666 30.8334V5.83337C46.6666 5.61236 46.5788 5.4004 46.4225 5.24412C46.2662 5.08784 46.0543 5.00004 45.8333 5.00004C45.6122 5.00004 45.4003 5.08784 45.244 5.24412C45.0877 5.4004 44.9999 5.61236 44.9999 5.83337V30H4.99992V10H18.3333C18.5543 10 18.7662 9.91224 18.9225 9.75596C19.0788 9.59968 19.1666 9.38772 19.1666 9.16671C19.1666 8.94569 19.0788 8.73373 18.9225 8.57745C18.7662 8.42117 18.5543 8.33337 18.3333 8.33337H4.99992V5.00004H39.9999C40.2209 5.00004 40.4329 4.91224 40.5892 4.75596C40.7455 4.59968 40.8333 4.38772 40.8333 4.16671C40.8333 3.94569 40.7455 3.73373 40.5892 3.57745C40.4329 3.42117 40.2209 3.33337 39.9999 3.33337H4.16659C3.94557 3.33337 3.73361 3.42117 3.57733 3.57745C3.42105 3.73373 3.33325 3.94569 3.33325 4.16671V30.8334C3.33325 31.0544 3.42105 31.2664 3.57733 31.4226C3.73361 31.5789 3.94557 31.6667 4.16659 31.6667H45.8333C46.0543 31.6667 46.2662 31.5789 46.4225 31.4226C46.5788 31.2664 46.6666 31.0544 46.6666 30.8334Z" />
											<path d="M27.5 34.1666C27.5 33.6722 27.3534 33.1888 27.0787 32.7777C26.804 32.3666 26.4135 32.0461 25.9567 31.8569C25.4999 31.6677 24.9972 31.6182 24.5123 31.7147C24.0273 31.8111 23.5819 32.0492 23.2322 32.3989C22.8826 32.7485 22.6445 33.1939 22.548 33.6789C22.4516 34.1639 22.5011 34.6665 22.6903 35.1233C22.8795 35.5801 23.2 35.9706 23.6111 36.2453C24.0222 36.52 24.5055 36.6666 25 36.6666C25.663 36.6666 26.2989 36.4032 26.7678 35.9344C27.2366 35.4656 27.5 34.8297 27.5 34.1666ZM25 35C24.8352 35 24.6741 34.9511 24.537 34.8595C24.4 34.768 24.2932 34.6378 24.2301 34.4855C24.167 34.3333 24.1505 34.1657 24.1827 34.0041C24.2148 33.8424 24.2942 33.6939 24.4107 33.5774C24.5273 33.4608 24.6758 33.3815 24.8374 33.3493C24.9991 33.3172 25.1666 33.3337 25.3189 33.3967C25.4712 33.4598 25.6013 33.5666 25.6929 33.7037C25.7845 33.8407 25.8333 34.0018 25.8333 34.1666C25.8333 34.3876 25.7455 34.5996 25.5893 34.7559C25.433 34.9122 25.221 35 25 35Z" />
											<path d="M20.8333 6.66667C20.7066 6.66667 20.5816 6.69555 20.4678 6.75111C20.354 6.80668 20.2543 6.88746 20.1764 6.98732C20.0984 7.08718 20.0443 7.2035 20.0181 7.32742C19.9918 7.45135 19.9942 7.57963 20.025 7.7025L23.3583 21.0358C23.4035 21.216 23.5075 21.376 23.654 21.4903C23.8004 21.6046 23.9809 21.6667 24.1666 21.6667H25.65C25.3242 22.0251 25.1096 22.4703 25.0321 22.9484C24.9547 23.4265 25.0178 23.9168 25.2137 24.3597C25.4097 24.8026 25.7301 25.179 26.1359 25.4433C26.5418 25.7075 27.0157 25.8482 27.5 25.8482C27.9843 25.8482 28.4582 25.7075 28.864 25.4433C29.2699 25.179 29.5903 24.8026 29.7862 24.3597C29.9822 23.9168 30.0453 23.4265 29.9678 22.9484C29.8904 22.4703 29.6757 22.0251 29.35 21.6667H33.9833C33.6576 22.0251 33.4429 22.4703 33.3655 22.9484C33.288 23.4265 33.3511 23.9168 33.5471 24.3597C33.743 24.8026 34.0634 25.179 34.4693 25.4433C34.8751 25.7075 35.349 25.8482 35.8333 25.8482C36.3176 25.8482 36.7915 25.7075 37.1974 25.4433C37.6032 25.179 37.9236 24.8026 38.1196 24.3597C38.3155 23.9168 38.3786 23.4265 38.3011 22.9484C38.2237 22.4703 38.0091 22.0251 37.6833 21.6667H39.1666C39.185 21.6667 39.2008 21.6575 39.2191 21.6558C39.2484 21.6611 39.2779 21.6647 39.3075 21.6667C39.494 21.6666 39.675 21.604 39.8217 21.4889C39.9684 21.3738 40.0723 21.2128 40.1166 21.0317L44.8625 1.66667H49.1666C49.3877 1.66667 49.5996 1.57887 49.7559 1.42259C49.9122 1.26631 50 1.05435 50 0.833334C50 0.61232 49.9122 0.400358 49.7559 0.244078C49.5996 0.0877976 49.3877 2.25127e-07 49.1666 2.25127e-07H44.2091C44.0225 -0.000136898 43.8413 0.06237 43.6944 0.177506C43.5475 0.292643 43.4436 0.453745 43.3991 0.635L41.9208 6.66667H20.8333ZM40.8991 10.8333H37.7225L38.1908 8.33333H41.5125L40.8991 10.8333ZM39.6741 15.8333H36.785L37.41 12.5H40.4933L39.6741 15.8333ZM38.6525 20H36L36.4691 17.5H39.2616L38.6525 20ZM22.9425 12.5H25.9233L26.5483 15.8333H23.7758L22.9425 12.5ZM27.6183 12.5H30.8333V15.8333H28.2433L27.6183 12.5ZM30.8333 10.8333H27.3058L26.8333 8.33333H30.8333V10.8333ZM32.5 8.33333H36.5L36.0308 10.8333H32.5V8.33333ZM32.5 12.5H35.715L35.09 15.8333H32.5V12.5ZM25.1425 8.33333L25.6108 10.8333H22.5275L21.9025 8.33333H25.1425ZM24.1925 17.5H26.8591L27.3283 20H24.8175L24.1925 17.5ZM27.5 24.1667C27.3352 24.1667 27.174 24.1178 27.037 24.0262C26.9 23.9347 26.7932 23.8045 26.7301 23.6522C26.667 23.5 26.6505 23.3324 26.6827 23.1708C26.7148 23.0091 26.7942 22.8606 26.9107 22.7441C27.0273 22.6275 27.1758 22.5482 27.3374 22.516C27.4991 22.4839 27.6666 22.5004 27.8189 22.5634C27.9712 22.6265 28.1013 22.7333 28.1929 22.8704C28.2844 23.0074 28.3333 23.1685 28.3333 23.3333C28.3333 23.5543 28.2455 23.7663 28.0892 23.9226C27.933 24.0789 27.721 24.1667 27.5 24.1667ZM29.0241 20L28.5558 17.5H30.8333V20H29.0241ZM32.5 17.5H34.7775L34.3091 20H32.5V17.5ZM35.8333 24.1667C35.6685 24.1667 35.5074 24.1178 35.3703 24.0262C35.2333 23.9347 35.1265 23.8045 35.0634 23.6522C35.0003 23.5 34.9838 23.3324 35.016 23.1708C35.0481 23.0091 35.1275 22.8606 35.2441 22.7441C35.3606 22.6275 35.5091 22.5482 35.6707 22.516C35.8324 22.4839 35.9999 22.5004 36.1522 22.5634C36.3045 22.6265 36.4346 22.7333 36.5262 22.8704C36.6178 23.0074 36.6666 23.1685 36.6666 23.3333C36.6666 23.5543 36.5788 23.7663 36.4226 23.9226C36.2663 24.0789 36.0543 24.1667 35.8333 24.1667Z" />
											<path d="M6.66659 5.83337C6.44557 5.83337 6.23361 5.92117 6.07733 6.07745C5.92105 6.23373 5.83325 6.44569 5.83325 6.66671C5.83325 6.88772 5.92105 7.09968 6.07733 7.25596C6.23361 7.41224 6.44557 7.50004 6.66659 7.50004H7.49992C7.72093 7.50004 7.93289 7.41224 8.08917 7.25596C8.24545 7.09968 8.33325 6.88772 8.33325 6.66671C8.33325 6.44569 8.24545 6.23373 8.08917 6.07745C7.93289 5.92117 7.72093 5.83337 7.49992 5.83337H6.66659Z" />
											<path d="M10.0001 5.83337C9.77907 5.83337 9.56711 5.92117 9.41083 6.07745C9.25455 6.23373 9.16675 6.44569 9.16675 6.66671C9.16675 6.88772 9.25455 7.09968 9.41083 7.25596C9.56711 7.41224 9.77907 7.50004 10.0001 7.50004H10.8334C11.0544 7.50004 11.2664 7.41224 11.4227 7.25596C11.579 7.09968 11.6667 6.88772 11.6667 6.66671C11.6667 6.44569 11.579 6.23373 11.4227 6.07745C11.2664 5.92117 11.0544 5.83337 10.8334 5.83337H10.0001Z" />
											<path d="M13.3333 5.83337C13.1123 5.83337 12.9004 5.92117 12.7441 6.07745C12.5878 6.23373 12.5 6.44569 12.5 6.66671C12.5 6.88772 12.5878 7.09968 12.7441 7.25596C12.9004 7.41224 13.1123 7.50004 13.3333 7.50004H14.1667C14.3877 7.50004 14.5996 7.41224 14.7559 7.25596C14.9122 7.09968 15 6.88772 15 6.66671C15 6.44569 14.9122 6.23373 14.7559 6.07745C14.5996 5.92117 14.3877 5.83337 14.1667 5.83337H13.3333Z" />
											<path d="M9.16659 21.6667H19.1666C19.3876 21.6667 19.5996 21.5789 19.7558 21.4226C19.9121 21.2663 19.9999 21.0544 19.9999 20.8334V14.1667C19.9999 13.9457 19.9121 13.7337 19.7558 13.5775C19.5996 13.4212 19.3876 13.3334 19.1666 13.3334H9.16659C8.94557 13.3334 8.73361 13.4212 8.57733 13.5775C8.42105 13.7337 8.33325 13.9457 8.33325 14.1667V20.8334C8.33325 21.0544 8.42105 21.2663 8.57733 21.4226C8.73361 21.5789 8.94557 21.6667 9.16659 21.6667ZM9.99992 15H18.3333V20H9.99992V15Z" />
											<path d="M9.16659 25H22.4999C22.7209 25 22.9329 24.9122 23.0892 24.756C23.2455 24.5997 23.3333 24.3877 23.3333 24.1667C23.3333 23.9457 23.2455 23.7337 23.0892 23.5775C22.9329 23.4212 22.7209 23.3334 22.4999 23.3334H9.16659C8.94557 23.3334 8.73361 23.4212 8.57733 23.5775C8.42105 23.7337 8.33325 23.9457 8.33325 24.1667C8.33325 24.3877 8.42105 24.5997 8.57733 24.756C8.73361 24.9122 8.94557 25 9.16659 25V25Z" />
											<path d="M9.16659 28.3333H25.8333C26.0543 28.3333 26.2662 28.2455 26.4225 28.0892C26.5788 27.9329 26.6666 27.721 26.6666 27.5C26.6666 27.2789 26.5788 27.067 26.4225 26.9107C26.2662 26.7544 26.0543 26.6666 25.8333 26.6666H9.16659C8.94557 26.6666 8.73361 26.7544 8.57733 26.9107C8.42105 27.067 8.33325 27.2789 8.33325 27.5C8.33325 27.721 8.42105 27.9329 8.57733 28.0892C8.73361 28.2455 8.94557 28.3333 9.16659 28.3333V28.3333Z" />
											<path d="M30.8333 26.6666C30.6123 26.6666 30.4004 26.7544 30.2441 26.9107C30.0878 27.067 30 27.2789 30 27.5C30 27.721 30.0878 27.9329 30.2441 28.0892C30.4004 28.2455 30.6123 28.3333 30.8333 28.3333H42.5C42.721 28.3333 42.933 28.2455 43.0893 28.0892C43.2455 27.9329 43.3333 27.721 43.3333 27.5C43.3333 27.2789 43.2455 27.067 43.0893 26.9107C42.933 26.7544 42.721 26.6666 42.5 26.6666H30.8333Z" />
										</svg>
										<div className="navbar__more--flex">
											<p>Online stores</p>
											<span>Easy to manage e-commerce websites.</span>
										</div>
									</NavLink>
									<NavLink to="/graphics">
										<svg
											width="50"
											height="51"
											viewBox="0 0 50 51"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M30.8333 0H0.833333C0.612319 0 0.400358 0.0877973 0.244078 0.244078C0.0877973 0.400358 0 0.612319 0 0.833333V10.8333C0 11.0543 0.0877973 11.2663 0.244078 11.4226C0.400358 11.5789 0.612319 11.6667 0.833333 11.6667H30.8333C31.0543 11.6667 31.2663 11.5789 31.4226 11.4226C31.5789 11.2663 31.6667 11.0543 31.6667 10.8333V0.833333C31.6667 0.612319 31.5789 0.400358 31.4226 0.244078C31.2663 0.0877973 31.0543 0 30.8333 0V0ZM30 10H1.66667V1.66667H3.33333V5H5V1.66667H6.66667V5H8.33333V1.66667H10V5H11.6667V1.66667H13.3333V5H15V1.66667H16.6667V5H18.3333V1.66667H20V5H21.6667V1.66667H23.3333V5H25V1.66667H26.6667V5H28.3333V1.66667H30V10Z" />
											<path d="M24.1667 26.6667H15.8333C15.6123 26.6667 15.4004 26.5789 15.2441 26.4226C15.0878 26.2663 15 26.0544 15 25.8334V19.1667C15 18.9457 15.0878 18.7337 15.2441 18.5775C15.4004 18.4212 15.6123 18.3334 15.8333 18.3334H24.1667C24.3877 18.3334 24.5996 18.4212 24.7559 18.5775C24.9122 18.7337 25 18.9457 25 19.1667V25.8334C25 26.0544 24.9122 26.2663 24.7559 26.4226C24.5996 26.5789 24.3877 26.6667 24.1667 26.6667ZM16.6667 25H23.3333V20H16.6667V25Z" />
											<path d="M24.1667 37.5H15.8333C15.6123 37.5 15.4004 37.4122 15.2441 37.2559C15.0878 37.0996 15 36.8876 15 36.6666V30C15 29.7789 15.0878 29.567 15.2441 29.4107C15.4004 29.2544 15.6123 29.1666 15.8333 29.1666H24.1667C24.3877 29.1666 24.5996 29.2544 24.7559 29.4107C24.9122 29.567 25 29.7789 25 30V36.6666C25 36.8876 24.9122 37.0996 24.7559 37.2559C24.5996 37.4122 24.3877 37.5 24.1667 37.5ZM16.6667 35.8333H23.3333V30.8333H16.6667V35.8333Z" />
											<path d="M24.1667 41.6667H15.8333C15.6123 41.6667 15.4004 41.5789 15.2441 41.4226C15.0878 41.2663 15 41.0543 15 40.8333C15 40.6123 15.0878 40.4004 15.2441 40.2441C15.4004 40.0878 15.6123 40 15.8333 40H24.1667C24.3877 40 24.5996 40.0878 24.7559 40.2441C24.9122 40.4004 25 40.6123 25 40.8333C25 41.0543 24.9122 41.2663 24.7559 41.4226C24.5996 41.5789 24.3877 41.6667 24.1667 41.6667Z" />
											<path d="M24.1667 45H15.8333C15.6123 45 15.4004 44.9122 15.2441 44.756C15.0878 44.5997 15 44.3877 15 44.1667C15 43.9457 15.0878 43.7337 15.2441 43.5775C15.4004 43.4212 15.6123 43.3334 15.8333 43.3334H24.1667C24.3877 43.3334 24.5996 43.4212 24.7559 43.5775C24.9122 43.7337 25 43.9457 25 44.1667C25 44.3877 24.9122 44.5997 24.7559 44.756C24.5996 44.9122 24.3877 45 24.1667 45Z" />
											<path d="M4.16668 13.3334C3.06201 13.3347 2.00298 13.7741 1.22186 14.5552C0.440747 15.3363 0.0013349 16.3954 1.16822e-05 17.5V43.3334C-0.000764895 43.4795 0.0371888 43.6233 0.110012 43.75L3.44334 49.5834C3.51626 49.7108 3.62156 49.8168 3.74858 49.8904C3.8756 49.9641 4.01984 50.0029 4.16668 50.0029C4.31352 50.0029 4.45775 49.9641 4.58477 49.8904C4.71179 49.8168 4.81709 49.7108 4.89001 49.5834L8.22334 43.75C8.29617 43.6233 8.33412 43.4795 8.33334 43.3334V17.5C8.33202 16.3954 7.89261 15.3363 7.11149 14.5552C6.33038 13.7741 5.27134 13.3347 4.16668 13.3334V13.3334ZM6.66668 21.6667H1.66668V20H6.66668V21.6667ZM1.66668 23.3334H3.33334V39.655L1.66668 41.3217V23.3334ZM4.16668 41.1784L6.46084 43.4725L5.88251 44.4842C4.77287 44.0883 3.56049 44.0883 2.45084 44.4842L1.87251 43.4725L4.16668 41.1784ZM5.00001 39.655V23.3334H6.66668V41.3217L5.00001 39.655ZM1.66668 17.5C1.66668 16.837 1.93007 16.2011 2.39891 15.7323C2.86775 15.2634 3.50364 15 4.16668 15C4.82972 15 5.4656 15.2634 5.93444 15.7323C6.40328 16.2011 6.66668 16.837 6.66668 17.5V18.3334H1.66668V17.5ZM4.16668 47.4867L3.29168 45.9559C3.86526 45.805 4.46809 45.805 5.04168 45.9559L4.16668 47.4867Z" />
											<path d="M37.5 16.6666C37.9945 16.6666 38.4778 16.52 38.8889 16.2453C39.3 15.9706 39.6205 15.5802 39.8097 15.1233C39.9989 14.6665 40.0484 14.1639 39.952 13.6789C39.8555 13.1939 39.6174 12.7485 39.2678 12.3989C38.9181 12.0492 38.4727 11.8111 37.9877 11.7147C37.5028 11.6182 37.0001 11.6677 36.5433 11.8569C36.0865 12.0461 35.696 12.3666 35.4213 12.7777C35.1466 13.1888 35 13.6722 35 14.1666C35 14.8297 35.2634 15.4656 35.7322 15.9344C36.2011 16.4032 36.837 16.6666 37.5 16.6666ZM37.5 13.3333C37.6648 13.3333 37.8259 13.3822 37.963 13.4737C38.1 13.5653 38.2068 13.6955 38.2699 13.8477C38.333 14 38.3495 14.1676 38.3173 14.3292C38.2852 14.4909 38.2058 14.6393 38.0893 14.7559C37.9727 14.8724 37.8242 14.9518 37.6626 14.9839C37.5009 15.0161 37.3334 14.9996 37.1811 14.9365C37.0288 14.8735 36.8987 14.7666 36.8071 14.6296C36.7155 14.4926 36.6667 14.3314 36.6667 14.1666C36.6667 13.9456 36.7545 13.7337 36.9107 13.5774C37.067 13.4211 37.279 13.3333 37.5 13.3333Z" />
											<path d="M49.1667 13.3333H43.2667C43.1281 12.3834 42.7576 11.4824 42.1878 10.7098C41.618 9.93728 40.8666 9.3171 40 8.90416V2.5C39.9967 1.83797 39.7323 1.20399 39.2641 0.735863C38.796 0.267733 38.162 0.00328556 37.5 0C36.837 0 36.2011 0.263392 35.7322 0.732233C35.2634 1.20107 35 1.83696 35 2.5V8.90416C34.1334 9.3171 33.382 9.93728 32.8122 10.7098C32.2424 11.4824 31.8719 12.3834 31.7333 13.3333H10.8333C10.6123 13.3333 10.4004 13.4211 10.2441 13.5774C10.0878 13.7337 10 13.9456 10 14.1667V49.1667C10 49.3877 10.0878 49.5996 10.2441 49.7559C10.4004 49.9122 10.6123 50 10.8333 50H49.1667C49.3877 50 49.5996 49.9122 49.7559 49.7559C49.9122 49.5996 50 49.3877 50 49.1667V14.1667C50 13.9456 49.9122 13.7337 49.7559 13.5774C49.5996 13.4211 49.3877 13.3333 49.1667 13.3333ZM45.5925 39.3083H45.5875C45.375 39.3646 45.1488 39.3347 44.9583 39.225C44.8641 39.1702 44.7817 39.0972 44.716 39.0102C44.6503 38.9232 44.6027 38.824 44.5758 38.7183L39.4592 19.6542C39.998 19.4611 40.5054 19.1896 40.965 18.8483L46.1775 38.2875C46.2329 38.5004 46.2026 38.7264 46.0933 38.9173C45.9839 39.1081 45.8041 39.2485 45.5925 39.3083ZM37.5 25.8333C37.279 25.8333 37.067 25.9211 36.9107 26.0774C36.7545 26.2337 36.6667 26.4456 36.6667 26.6667V27.45C36.182 27.4209 35.6994 27.3653 35.2208 27.2833L37.1775 19.985C37.285 19.9908 37.3908 20.0017 37.5 20.0017C37.6092 20.0017 37.715 19.9908 37.8225 19.985L39.7792 27.2833C39.3006 27.3653 38.818 27.4209 38.3333 27.45V26.6667C38.3333 26.4456 38.2455 26.2337 38.0892 26.0774C37.933 25.9211 37.721 25.8333 37.5 25.8333ZM36.6667 2.5C36.6667 2.27899 36.7545 2.06702 36.9107 1.91074C37.067 1.75446 37.279 1.66667 37.5 1.66667C37.6111 1.66631 37.7211 1.68875 37.8231 1.73261C37.9252 1.77648 38.0171 1.84082 38.0933 1.92167C38.1703 1.99689 38.2312 2.0869 38.2725 2.18629C38.3137 2.28568 38.3344 2.3924 38.3333 2.5V8.4C37.7813 8.31111 37.2187 8.31111 36.6667 8.4V2.5ZM37.5 10C38.3241 10 39.1297 10.2444 39.8149 10.7022C40.5001 11.16 41.0341 11.8108 41.3495 12.5721C41.6649 13.3335 41.7474 14.1713 41.5866 14.9795C41.4258 15.7878 41.029 16.5302 40.4463 17.1129C39.8636 17.6957 39.1211 18.0925 38.3129 18.2533C37.5046 18.414 36.6668 18.3315 35.9055 18.0162C35.1441 17.7008 34.4934 17.1667 34.0355 16.4815C33.5777 15.7963 33.3333 14.9908 33.3333 14.1667C33.3346 13.062 33.7741 12.003 34.5552 11.2218C35.3363 10.4407 36.3953 10.0013 37.5 10V10ZM34.035 18.8483C34.4946 19.1896 35.002 19.4611 35.5408 19.6542L30.4275 38.7225C30.3703 38.9334 30.2326 39.1134 30.044 39.2238C29.8554 39.3341 29.631 39.366 29.4192 39.3125H29.4117C29.2 39.2535 29.0198 39.114 28.9097 38.9238C28.7996 38.7337 28.7683 38.5079 28.8225 38.295L34.035 18.8483ZM48.3333 48.3333H11.6667V15H31.7333C31.858 15.8796 32.1833 16.7187 32.6842 17.4525L27.2108 37.8625C27.0816 38.3598 27.1088 38.8848 27.2886 39.3662C27.4684 39.8475 27.7922 40.2617 28.2158 40.5525L27.5283 43.1175C27.5 43.2232 27.4927 43.3335 27.507 43.442C27.5212 43.5505 27.5567 43.6552 27.6115 43.7499C27.6662 43.8447 27.739 43.9278 27.8258 43.9945C27.9127 44.0611 28.0118 44.11 28.1175 44.1383C28.1879 44.157 28.2605 44.1666 28.3333 44.1667C28.5168 44.1667 28.6951 44.1062 28.8406 43.9945C28.9862 43.8829 29.0908 43.7263 29.1383 43.5492L29.8267 40.98C30.342 40.948 30.8338 40.7532 31.2313 40.4238C31.6288 40.0943 31.9113 39.6471 32.0383 39.1467L34.7817 28.9167C35.4046 29.0319 36.0342 29.1073 36.6667 29.1425V30C36.6667 30.221 36.7545 30.433 36.9107 30.5892C37.067 30.7455 37.279 30.8333 37.5 30.8333C37.721 30.8333 37.933 30.7455 38.0892 30.5892C38.2455 30.433 38.3333 30.221 38.3333 30V29.1425C38.9658 29.1079 39.5954 29.033 40.2183 28.9183L42.9608 39.1442C43.0874 39.645 43.37 40.0925 43.7677 40.4221C44.1654 40.7517 44.6577 40.9462 45.1733 40.9775L45.8617 43.5475C45.9089 43.725 46.0134 43.8819 46.1589 43.9939C46.3045 44.1058 46.483 44.1666 46.6667 44.1667C46.7395 44.1666 46.8121 44.157 46.8825 44.1383C46.9882 44.11 47.0873 44.0611 47.1741 43.9945C47.261 43.9278 47.3338 43.8447 47.3885 43.7499C47.4432 43.6552 47.4787 43.5505 47.493 43.442C47.5073 43.3335 47.5 43.2232 47.4717 43.1175L46.7842 40.5533C47.207 40.261 47.5297 39.8457 47.7086 39.3638C47.8874 38.8818 47.9138 38.3566 47.7842 37.8592L42.3158 17.4525C42.8166 16.7187 43.142 15.8796 43.2667 15H48.3333V48.3333Z" />
										</svg>
										<div className="navbar__more--flex">
											<p>Graphic design</p>
											<span>Most eye-catchy logos and more.</span>
										</div>
									</NavLink>
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
						<NavLink
							activeClassName="active"
							to="/blog"
							className="navbar__link"
						>
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
			</StyledNavbarOtherSites>
		);
	}
}

export default NavbarOtherSites;

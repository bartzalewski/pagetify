import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import Blog from '../components/Blog/Blog';
import Requirements from '../components/Requirements/Requirements';
import Footer from '../components/Footer/Footer';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const StyledAdmin = styled.section`
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

export default function Graphics() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledAdmin>
				<div className="projects">
					<div className="container">
						<h1 className="section-title">Admin panel</h1>
						<div className="projects__wrapper">
							<SignUp />
							<SignIn />
						</div>
					</div>
				</div>
			</StyledAdmin>
			<Blog></Blog>
			<Requirements></Requirements>
			<Footer></Footer>
		</>
	);
}

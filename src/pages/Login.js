import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import SignIn from '../components/auth/SignIn';

const StyledLogin = styled.section``;

export default function Login() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledLogin className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Log in</h1>
						<div className="sites__wrapper">
							<SignIn></SignIn>
						</div>
					</div>
				</div>
			</StyledLogin>
		</>
	);
}

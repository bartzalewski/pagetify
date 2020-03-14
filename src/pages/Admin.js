import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

const StyledAdmin = styled.section``;

export default function Graphics() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledAdmin className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Admin panel</h1>
						<div className="sites__wrapper">
							<SignUp></SignUp>
							<SignIn></SignIn>
						</div>
					</div>
				</div>
			</StyledAdmin>
		</>
	);
}

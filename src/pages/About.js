import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';

const StyledAbout = styled.section``;

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
								Supported mobile devices, easy to use independently, SEO
								friendly and ready for any expansion at any time. We create
								websites ideally suited to the needs of both you and your
								recipients. Check below what features they have.
							</p>
						</div>
					</div>
				</div>
			</StyledAbout>
		</>
	);
}

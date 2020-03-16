import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import Form from '../components/Form/Form';

const StyledPrice = styled.section``;

export default function Price() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledPrice className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Price</h1>
						<div className="sites__wrapper">
							<Form></Form>
						</div>
					</div>
				</div>
			</StyledPrice>
		</>
	);
}

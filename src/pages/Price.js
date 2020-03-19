import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import PriceForm from '../components/Form/PriceForm';

const StyledPrice = styled.section`
	.price__desc {
		margin-bottom: 50px;
	}
`;

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
						<div className="sites__wrapper form__container">
							<p className="sites__desc price__desc">
								Complete the following form to let us make a quote for your
								project.
							</p>
							<PriceForm></PriceForm>
						</div>
					</div>
				</div>
			</StyledPrice>
		</>
	);
}

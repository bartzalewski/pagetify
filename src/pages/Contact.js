import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import ContactForm from '../components/Form/ContactForm';

const StyledContact = styled.section``;

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledContact className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title">Contact</h1>
						<div className="sites__wrapper form__container">
							<ContactForm></ContactForm>
						</div>
					</div>
				</div>
			</StyledContact>
		</>
	);
}

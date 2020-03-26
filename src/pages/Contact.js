import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import ContactForm from '../components/Form/ContactForm';

const StyledContact = styled.section`
	.contact__desc {
		margin-bottom: 50px;
	}
`;

export default function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);

		const spans = document.querySelectorAll('.rubber-span');

		spans.forEach(span => {
			span.addEventListener('mouseover', function(e) {
				span.classList.add('animated', 'rubberBand');
			});
		});

		spans.forEach(span =>
			span.addEventListener('mouseout', function(e) {
				setTimeout(() => {
					span.classList.remove('animated', 'rubberBand');
				}, 1000);
			})
		);
	}, []);
	return (
		<>
			<NavbarOtherSites></NavbarOtherSites>
			<StyledContact className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">
							<span className="rubber-span">C</span>
							<span className="rubber-span">o</span>
							<span className="rubber-span">n</span>
							<span className="rubber-span">t</span>
							<span className="rubber-span">a</span>
							<span className="rubber-span">c</span>
							<span className="rubber-span">t</span>
						</h1>
						<div className="sites__wrapper form__container">
							<p className="sites__desc contact__desc">
								Get in touch with us by using the following form or via{' '}
								<a
									href="https://m.me/pagetify"
									target="_blank"
									rel="noopener noreferrer"
									className="default-link"
								>
									Messenger
								</a>
								!
							</p>
							<ContactForm></ContactForm>
						</div>
					</div>
				</div>
			</StyledContact>
		</>
	);
}

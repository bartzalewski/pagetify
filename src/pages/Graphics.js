import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';

const StyledGraphics = styled.section``;

export default function Graphics() {
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
			<StyledGraphics className="sites__hero">
				<div className="sites__container">
					<div className="container">
						<h1 className="section__title rubber-band">
							<span className="rubber-span">G</span>
							<span className="rubber-span">r</span>
							<span className="rubber-span">a</span>
							<span className="rubber-span">p</span>
							<span className="rubber-span">h</span>
							<span className="rubber-span">i</span>
							<span className="rubber-span">c</span>
							<span className="rubber-span rubber-hide">i</span>
							<span className="rubber-span">d</span>
							<span className="rubber-span">e</span>
							<span className="rubber-span">s</span>
							<span className="rubber-span">i</span>
							<span className="rubber-span">g</span>
							<span className="rubber-span">n</span>
						</h1>
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
			</StyledGraphics>
		</>
	);
}

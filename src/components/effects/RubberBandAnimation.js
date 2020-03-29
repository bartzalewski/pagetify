import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RubberBandAnimation() {
	const { pathname } = useLocation();

	useEffect(() => {
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
	}, [pathname]);

	return null;
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function RubberBandSplit() {
	const { pathname } = useLocation();

	useEffect(() => {
		const textEl = document.querySelector('.rubber-band');
		if (textEl) {
			const text = textEl.textContent;
			const swap = text.replace(/\s/g, ' ');
			const letters = swap.split('');

			let html = '';

			const makespan = letter => `<span class="rubber-span">${letter}</span>`;

			letters.forEach(letter => (html += makespan(letter)));

			textEl.innerHTML = html;
		}
	}, [pathname]);

	return null;
}

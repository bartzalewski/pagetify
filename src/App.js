import React from 'react';
import SignedIn from './components/layout/SignedIn';
import GlobalStyle from './theme/globalStyle';

function App() {
	return (
		<>
			<GlobalStyle></GlobalStyle>
			<SignedIn></SignedIn>
		</>
	);
}

export default App;

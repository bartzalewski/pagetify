import React from 'react';
import GlobalStyle from './theme/globalStyle';
import SignedIn from './components/layout/SignedIn';
import SignedOut from './components/layout/SignedOut';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
	const { auth, profile } = props;
	const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />;

	return (
		<BrowserRouter>
			<GlobalStyle></GlobalStyle>
			{links}
		</BrowserRouter>
	);
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	};
};

export default connect(mapStateToProps)(App);

import React from 'react';
import GlobalStyle from './theme/globalStyle';
import SignedIn from './components/layout/SignedIn';
import SignedOut from './components/layout/SignedOut';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGlobe,
	faPhone,
	faEnvelope,
	faUser,
	faComments
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGlobe, faPhone, faEnvelope, faUser, faComments);

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

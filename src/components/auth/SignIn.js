import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import firebase from '../../config/fbConfig';

const StyledSignIn = styled.section``;

class SignIn extends Component {
	state = {
		email: '',
		password: '',
		isSignedIn: false
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.signIn(this.state);
	};
	componentDidMount = () => {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({
				isSignedIn: !!user
			});
		});
	};
	render() {
		const { authError } = this.props;
		return (
			<StyledSignIn>
				<form className="signin-form" onSubmit={this.handleSubmit}>
					<h1 className="signin-title">sign in</h1>
					<div className="input-field">
						<input
							type="email"
							id="email"
							onChange={this.handleChange}
							placeholder="E-mail"
							aria-label="email"
						/>
					</div>
					<div className="input-field">
						<input
							type="password"
							id="password"
							onChange={this.handleChange}
							placeholder="Password"
							aria-label="password"
						/>
					</div>
					<div className="input-field">
						<button className="btn">Login</button>
						<div>{authError ? <p>{authError}</p> : null}</div>
					</div>
				</form>
			</StyledSignIn>
		);
	}
}

const mapStateToProps = state => {
	return {
		authError: state.auth.authError,
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn: creds => dispatch(signIn(creds))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledContactForm = styled.div`
	.input-field {
		width: 49.25%;
	}

	.input-field__textarea {
		width: 100%;
	}

	.input-field__checkbox {
		width: 100%;
		margin: 1rem 0;
		font-size: 14px;
	}

	input[type='checkbox'] {
		width: auto;
		margin-right: 0.5rem;
	}
`;

class Form extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		emailStatus: ''
	};

	handleChange = input => e => {
		this.setState({ [input]: e.target.value });
	};

	submitForm = e => {
		const { name, email, message } = this.state;

		var xhr = new XMLHttpRequest();

		xhr.addEventListener('load', () => {
			this.setState({
				emailStatus: xhr.responseText
			});
		});

		xhr.open(
			'GET',
			'https://pagetify-api.herokuapp.com/index.php?sendto=' +
				email +
				'&name=' +
				name +
				'&message=' +
				message
		);

		xhr.send();

		this.setState({
			name: '',
			email: '',
			message: ''
		});
		e.preventDefault();
	};

	render() {
		const { name, email, message, emailStatus } = this.state;
		return (
			<StyledContactForm className="form__wrapper" onSubmit={this.submitForm}>
				{emailStatus ? emailStatus : null}
				<form className="form--flex">
					<div className="input-field--flex">
						<div className="input-field">
							<label>
								<input
									type="text"
									value={name}
									onChange={this.handleChange('name')}
									placeholder="Your name *"
									required
								/>
							</label>
						</div>
						<div className="input-field input-field--right">
							<label>
								<input
									type="email"
									value={email}
									onChange={this.handleChange('email')}
									placeholder="Your email *"
									required
								/>
							</label>
						</div>
					</div>
					<div className="input-field input-field--mt1 input-field__textarea">
						<label>
							<textarea
								type="text"
								value={message}
								onChange={this.handleChange('message')}
								placeholder="Message *"
								required
							></textarea>
						</label>
					</div>
					<div className="input-field input-field__checkbox">
						<input type="checkbox" id="accept" required name="accept" />
						<label htmlFor="accept">
							I accept the information contained in the{' '}
							<a
								href="https://pagetify.com/privacy-policy"
								target="_blank"
								rel="noopener noreferrer"
								className="default-link"
							>
								privacy policy
							</a>
							. *
						</label>
					</div>
					<input type="submit" className="form__btn" value="Submit" />
				</form>
			</StyledContactForm>
		);
	}
}

export default Form;

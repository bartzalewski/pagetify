import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledPriceForm = styled.div`
	width: 50%;
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

	componentDidMount = () => {
		const inputs = document.querySelectorAll('.input-field__input');

		function addcl() {
			let parent = this.parentNode.parentNode.parentNode;
			parent.classList.add('focus');
		}

		function remcl() {
			let parent = this.parentNode.parentNode.parentNode;
			if (this.value === '') {
				parent.classList.remove('focus');
			}
		}

		inputs.forEach(input => {
			input.addEventListener('focus', addcl);
			input.addEventListener('blur', remcl);
		});
	};

	render() {
		const { name, email, message, emailStatus } = this.state;

		return (
			<StyledPriceForm className="form__wrapper" onSubmit={this.submitForm}>
				{emailStatus ? emailStatus : null}
				<form className="form--flex">
					<div className="input-field">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="user" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Name</span>
							<label>
								<input
									type="text"
									value={name}
									onChange={this.handleChange('name')}
									required
									className="input-field__input"
								/>
							</label>
						</div>
					</div>
					<div className="input-field">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="envelope" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Email</span>
							<label>
								<input
									type="email"
									value={email}
									onChange={this.handleChange('email')}
									required
									className="input-field__input"
								/>
							</label>
						</div>
					</div>
					<div className="input-field">
						<div className="input-field__icon">
							<FontAwesomeIcon icon="comments" className="input-field__fa" />
						</div>
						<div className="input-field__wrapper">
							<span>Message</span>
							<label>
								<textarea
									type="text"
									value={message}
									onChange={this.handleChange('message')}
									required
									className="input-field__input"
								></textarea>
							</label>
						</div>
					</div>
					<input
						type="submit"
						className="form__btn btn--gradient"
						value="Submit"
					/>
				</form>
			</StyledPriceForm>
		);
	}
}

export default Form;

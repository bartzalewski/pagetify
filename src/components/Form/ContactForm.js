import React, { Component } from 'react';

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
			<div className="form__wrapper" onSubmit={this.submitForm}>
				{emailStatus ? emailStatus : null}
				<form className="form--flex">
					<div className="input-field--flex">
						<div className="input-field">
							<label>
								<input
									type="text"
									value={name}
									onChange={this.handleChange('name')}
									placeholder="Your name"
									required
								/>
							</label>
						</div>
						<div className="input-field">
							<label>
								<input
									type="email"
									value={email}
									onChange={this.handleChange('email')}
									placeholder="Your email"
									required
								/>
							</label>
						</div>
					</div>
					<div className="input-field input-field--mt1">
						<label>
							<textarea
								type="text"
								value={message}
								onChange={this.handleChange('message')}
								placeholder="Message"
								required
							></textarea>
						</label>
					</div>
					<input type="submit" className="form__btn" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Form;

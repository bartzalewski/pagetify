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
			'http://api.pagetify.com/index.php?sendto=' +
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
			<div onSubmit={this.submitForm}>
				{emailStatus ? emailStatus : null}
				<form>
					<label>
						<input
							type="text"
							value={name}
							onChange={this.handleChange('name')}
							placeholder="Name"
						/>
					</label>
					<label>
						<input
							type="text"
							value={email}
							onChange={this.handleChange('email')}
							placeholder="Email"
						/>
					</label>
					<label>
						<textarea
							type="text"
							value={message}
							onChange={this.handleChange('message')}
							placeholder="Message"
						></textarea>
					</label>
					<label>
						<input type="submit" className="submitBtn" value="Submit" />
					</label>
				</form>
			</div>
		);
	}
}

export default Form;

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { storage } from '../../config/fbConfig';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledCreateProject = styled.section``;

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectName: '',
			content: '',
			url: '',
			projectBackground: null,
			projectURL: '',
			progress: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChoose = this.handleChoose.bind(this);
		this.handleURL = this.handleURL.bind(this);
	}
	handleURL = async e => {
		await this.setState({
			url:
				e.target.id === 'projectName'
					? e.target.value
							.split(' ')
							.join('-')
							.toLowerCase()
					: null,
			[e.target.id]: e.target.value
		});
	};
	handleChange = async e => {
		await this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createProject(this.state, this.state.url);
		this.props.history.push('/');
	};
	handleChoose = e => {
		if (e.target.files[0]) {
			const projectBackground = e.target.files[0];
			this.setState(() => ({ projectBackground }));
		}
	};
	handleUpload = () => {
		const { projectBackground } = this.state;
		const imageName = `${projectBackground.name +
			Math.round(Math.random() * 1000000000000)}`;
		const uploadTask = storage
			.ref(`images/projects/${imageName}`)
			.put(projectBackground);
		uploadTask.on(
			'state_changed',
			snapshot => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				this.setState({ progress });
			},
			error => {
				console.log(error);
			},
			() => {
				storage
					.ref('images/projects')
					.child(imageName)
					.getDownloadURL()
					.then(projectBackground => {
						this.setState({ projectBackground });
					});
			}
		);
		uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
			console.log('File available at', downloadURL);
			return downloadURL;
		});
	};
	render() {
		const { auth } = this.props;
		const uploadPostButton = document.getElementById('upload-post-btn');
		if (!auth.uid) return <Redirect to="/" />;
		if (
			this.state.projectName !== '' &&
			this.state.projectBackground !== null &&
			this.state.url !== '' &&
			this.state.progress === 100 &&
			this.state.content !== ''
		) {
			uploadPostButton.disabled = false;
			uploadPostButton.style.visibility = 'visible';
		}
		console.log(this.state);
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledCreateProject className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">Create new project</h1>
							<form
								className="sites__wrapper create-post__wrapper"
								onSubmit={this.handleSubmit}
							>
								<div className="input-field--flex">
									<div className="input-field">
										<label htmlFor="projectName" />
										<input
											type="text"
											placeholder="Title here..."
											id="projectName"
											onChange={this.handleURL}
											autoComplete="off"
										/>
									</div>
									<div className="input-field">
										<label htmlFor="projectURL" />
										<input
											type="text"
											placeholder="URL here..."
											id="projectURL"
											onChange={this.handleChange}
											autoComplete="off"
										/>
									</div>
									<div className="input-field">
										<label htmlFor="url" />
										<input
											type="text"
											placeholder="This project's URL"
											id="url"
											value={this.state.url}
											onChange={this.handleChange}
											autoComplete="off"
											disabled
										/>
									</div>
								</div>
								<div className="input-field">
									<label htmlFor="content" />
									<textarea
										placeholder="Type your project content here..."
										id="content"
										onChange={this.handleChange}
									/>
								</div>
								<button
									id="upload-post-btn"
									disabled
									className="post__btn"
									onClick={this.handleSubmit}
								>
									Upload Project
								</button>
							</form>
							<div className="upload__wrapper">
								<progress value={this.state.progress} max="100" />
								<br />
								<div className="upload__container">
									<input
										className="custom-file-input"
										type="file"
										onChange={this.handleChoose}
									/>
									<button
										className="custom-file-btn"
										onClick={this.handleUpload}
									>
										Upload an image
									</button>
								</div>
							</div>
						</div>
					</div>
				</StyledCreateProject>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createProject: (project, url) => dispatch(createProject(project, url))
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
	CreatePost
);

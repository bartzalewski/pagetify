import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { storage } from '../../config/fbConfig';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledCreatePost = styled.section``;

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorName: `${this.props.profile.firstName} ${this.props.profile.lastName}`,
			authorLogo: '',
			content: '',
			postBackground: null,
			progress: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleUpload = this.handleUpload.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChoose = this.handleChoose.bind(this);
	}
	handleChange = async e => {
		await this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.createPost(this.state);
		this.props.history.push('/');
	};
	handleChoose = e => {
		if (e.target.files[0]) {
			const postBackground = e.target.files[0];
			this.setState(() => ({ postBackground }));
		}
		console.log(this.state);
	};
	handleUpload = () => {
		const { postBackground } = this.state;
		const imageName = `${postBackground.name +
			Math.round(Math.random() * 1000000000000)}`;
		const uploadTask = storage
			.ref(`images/posts/${imageName}`)
			.put(postBackground);
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
					.ref('images/posts')
					.child(imageName)
					.getDownloadURL()
					.then(postBackground => {
						this.setState({ postBackground });
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
			this.state.schoolLogo !== '' &&
			this.state.postBackground !== null &&
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
				<StyledCreatePost className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">Create new post</h1>
							<form className="sites__wrapper" onSubmit={this.handleSubmit}>
								<div className="input-field">
									<label htmlFor="content" />
									<textarea
										placeholder="Type your post content here..."
										id="content"
										onChange={this.handleChange}
									/>
								</div>
								<button
									id="upload-post-btn"
									disabled
									className="btn"
									style={{ margin: '5rem 0 0 0' }}
									onClick={this.handleSubmit}
								>
									Upload Post
								</button>
							</form>
							<progress value={this.state.progress} max="100" />
							<br />
							<div className="upload-container">
								<input
									className="custom-file-input"
									type="file"
									onChange={this.handleChoose}
								/>
								<button
									className="btn btn-choose"
									style={{ margin: '0 0 0 0.5rem' }}
									onClick={this.handleUpload}
								>
									Upload an image
								</button>
							</div>
						</div>
					</div>
				</StyledCreatePost>
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
		createPost: post => dispatch(createPost(post))
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
	CreatePost
);

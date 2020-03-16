import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { storage } from '../../config/fbConfig';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledCreatePost = styled.section`
	#title,
	#url,
	#content {
		width: 100%;
		border: none;
		border-bottom: 1px solid #d9d9d9;
		padding: 10px 15px;
		font-family: 'Montserrat';
		font-size: 18px;
		outline: none;
		transition: 0.2s ease-in-out;

		&:focus {
			border-bottom: 1px solid #49a9e0;
			transition: 0.2s ease-in-out;
		}
	}

	#title,
	#url {
		/* font-weight: 600; */
	}

	#url {
		margin: 1rem 0;
	}

	#content {
		height: 10rem;
	}

	#upload-post-btn {
		border: none;
		border-radius: 25px;
		background-image: linear-gradient(to right, #36d1dc, #5b86e5);
		color: #fff;
		padding: 10px 30px;
		font-weight: 600;
		box-shadow: 0 2px 10px rgba(50, 50, 93, 0.1);
		transition: 0.2s ease-in-out;
		font-size: 16px;
		font-family: 'Montserrat';
		cursor: pointer;
		margin-top: 5rem;

		&:hover {
			transition: 0.2s ease-in-out;
			box-shadow: 0 9px 32px 0 rgba(0, 0, 0, 0.15);
			transform: scale(1.05);
		}
	}

	.create-post__wrapper {
		width: 100%;
		margin-bottom: 0;
	}

	.input-field {
		width: 100%;

		&--flex {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
		}
	}

	.upload__wrapper {
		align-self: flex-start;
		margin-top: -2rem;
	}
`;

class CreatePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorName: `${this.props.profile.firstName} ${this.props.profile.lastName}`,
			authorAvatar: this.props.profile.userAvatar,
			title: '',
			content: '',
			url: '',
			postBackground: null,
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
				e.target.id === 'title'
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
		this.props.createPost(this.state, this.state.url);
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
			this.state.authorName !== '' &&
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
							<form
								className="sites__wrapper create-post__wrapper"
								onSubmit={this.handleSubmit}
							>
								<div className="input-field--flex">
									<div className="input-field">
										<label htmlFor="title" />
										<input
											type="text"
											placeholder="Title here..."
											id="title"
											onChange={this.handleURL}
											autoComplete="off"
										/>
									</div>
									<div className="input-field">
										<label htmlFor="url" />
										<input
											type="text"
											placeholder="This post's URL"
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
										placeholder="Type your post content here..."
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
									Upload Post
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
		createPost: (post, url) => dispatch(createPost(post, url))
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
	CreatePost
);

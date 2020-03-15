import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledPostDetails = styled.section`
	.post__wrapper {
		align-items: flex-start;
		padding: 20px;
	}

	.post__info {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.post__author {
		margin-left: 0.5rem;
	}

	.post__name {
		font-weight: 500;
	}

	.post__date {
		font-size: 14px;
		color: #7f7f7f;
	}

	.post__background {
		margin: 3rem 0;
		width: 100%;
		height: 225px;
		position: relative;
		overflow: hidden;
		margin-bottom: 50px;
		border-radius: 6px;
		box-shadow: 0 36px 64px 0 rgba(0, 0, 0, 0.2);
		object-fit: cover;
	}

	.post__content {
		text-align: justify;
		font-size: 18px;
	}
`;

const PostDetails = props => {
	const { post } = props;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	if (post) {
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledPostDetails className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">{post.title}</h1>
							<div className="sites__wrapper post__wrapper">
								<div className="post__info">
									<img src={post.authorAvatar} alt="author avatar" />
									<div className="post__author">
										<p className="post__name">{post.authorName}</p>
										<p className="post__date">
											{moment(post.createdAt.toDate()).calendar()}
										</p>
									</div>
								</div>
								<img
									className="post__background"
									src={post.postBackground}
									alt="post background"
								/>
								<p className="post__content">{post.content}</p>
							</div>
						</div>
					</div>
				</StyledPostDetails>
			</>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading post...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const posts = state.firestore.data.posts;
	const post = posts ? posts[id] : null;
	return {
		post: post,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'posts'
		}
	])
)(PostDetails);

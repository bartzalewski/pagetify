import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const StyledPostList = styled.div`
	.post__item {
		transition: 0.2s;

		&:hover {
			transition: 0.2s;

			.blog__title {
				background: -webkit-linear-gradient(left, #36d1dc, #5b86e5);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				transition: 0.2s;
			}
		}
	}
`;

export default function PostList({ posts }) {
	return (
		<StyledPostList className="blog__wrapper">
			{posts &&
				posts.map(post => {
					return (
						<Link to={'/post/' + post.id} className="post__item">
							<PostSummary post={post} key={post.id} />
						</Link>
					);
				})}
		</StyledPostList>
	);
}

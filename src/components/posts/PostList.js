import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const StyledPostList = styled.div`
	.post__item {
		transition: 0.2s ease-in-out;

		.blog__title {
			transition: 0.2s ease-in-out;
		}

		&:hover {
			transition: 0.2s ease-in-out;

			.blog__title {
				color: #49a9e0;
				transition: 0.2s ease-in-out;
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

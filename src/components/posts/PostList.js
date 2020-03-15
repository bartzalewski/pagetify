import React from 'react';
import styled from 'styled-components';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

const StyledPostList = styled.div``;

export default function PostList({ posts }) {
	return (
		<StyledPostList className="blog__wrapper">
			{posts &&
				posts.map(post => {
					return (
						<Link to={'/post/' + post.id}>
							<PostSummary post={post} key={post.id} />
						</Link>
					);
				})}
		</StyledPostList>
	);
}

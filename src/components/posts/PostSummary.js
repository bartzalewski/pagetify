import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledPostSummary = styled.div``;

export default function PostSummary({ post }) {
	return (
		<StyledPostSummary>
			<div className="blog__box">
				<div className="blog__author">
					<img src={post.authorAvatar} alt="bart zalewski" />
					<div className="blog__author--flex">
						<p className="blog__name">{post.authorName}</p>
						<p className="blog__date">
							{moment(post.createdAt.toDate()).calendar()}
						</p>
					</div>
				</div>
				<div className="blog__title">{post.title}</div>
				<p className="blog__desc">{post.content}</p>
			</div>
		</StyledPostSummary>
	);
}

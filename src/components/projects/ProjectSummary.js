import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledProjectSummary = styled.div``;

export default function PostSummary({ project }) {
	return (
		<StyledProjectSummary>
			<div className="blog__box">
				<div className="blog__author">
					<img src={project.authorAvatar} alt="bart zalewski" />
					<div className="blog__author--flex">
						<p className="blog__name">{project.authorName}</p>
						<p className="blog__date">
							{moment(project.createdAt.toDate()).calendar()}
						</p>
					</div>
				</div>
				<div className="blog__title">{project.title}</div>
				<p className="blog__desc">{project.content}</p>
			</div>
		</StyledProjectSummary>
	);
}

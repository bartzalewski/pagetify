import React from 'react';
import styled from 'styled-components';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const StyledProjectList = styled.div``;

export default function ProjectList({ projects }) {
	return (
		<StyledProjectList className="blog__wrapper">
			{projects &&
				projects.map(project => {
					return (
						<Link to={'/project/' + project.id}>
							<ProjectSummary project={project} key={project.id} />
						</Link>
					);
				})}
		</StyledProjectList>
	);
}

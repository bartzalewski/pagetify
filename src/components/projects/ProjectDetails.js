import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import NavbarOtherSites from '../Navbar/NavbarOtherSites';

const StyledProjectDetails = styled.section``;

const ProjectDetails = props => {
	const { project } = props;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	if (project) {
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledProjectDetails className="sites__hero">
					<div className="sites__container">
						<div className="container project__container">
							<h1 className="section__title project__title">{project.title}</h1>
							<div className="sites__wrapper project__wrapper">
								<div className="project__info">
									<img src={project.authorAvatar} alt="author avatar" />
									<div className="project__author">
										<p className="project__name">{project.authorName}</p>
										<p className="project__date">
											{moment(project.createdAt.toDate()).calendar()}
										</p>
									</div>
								</div>
								<img
									className="project__background"
									src={project.projectBackground}
									alt="project background"
								/>
								<p className="project__content">{project.content}</p>
							</div>
						</div>
					</div>
				</StyledProjectDetails>
			</>
		);
	} else {
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledProjectDetails className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">Loading project...</h1>
						</div>
					</div>
				</StyledProjectDetails>
			</>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: 'projects'
		}
	])
)(ProjectDetails);

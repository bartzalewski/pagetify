import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarOtherSites from '../components/Navbar/NavbarOtherSites';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../components/projects/ProjectList';

const StyledProjects = styled.section``;

class Projects extends Component {
	componentDidUpdate = () => {
		window.scrollTo(0, 0);
	};
	render() {
		const { projects } = this.props;
		return (
			<>
				<NavbarOtherSites></NavbarOtherSites>
				<StyledProjects className="sites__hero">
					<div className="sites__container">
						<div className="container">
							<h1 className="section__title">Projects</h1>
							<div className="sites__wrapper projects__wrapper">
								<div className="sites__desc">Check our portfolio!</div>
								<ProjectList projects={projects}></ProjectList>
							</div>
						</div>
					</div>
				</StyledProjects>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.firestore.ordered.projects
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(Projects);

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Error from '../../pages/Error';
import About from '../../pages/About';
import BlogSite from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Websites from '../../pages/Websites';
import Stores from '../../pages/Stores';
import Graphics from '../../pages/Graphics';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import Price from '../../pages/Price';
import Footer from '../Footer/Footer';
import Requirements from '../Requirements/Requirements';
import Blog from '../Blog/Blog';
import Admin from '../../pages/Admin';
import CreatePost from '../posts/CreatePost';
import PostDetails from '../posts/PostDetails';
import CreateProject from '../projects/CreateProject';
import ProjectDetails from '../projects/ProjectDetails';

const SignedIn = props => {
	const { profile } = props;

	return (
		<>
			<Switch>
				<Route
					exact
					path="/"
					component={props => <Home {...props} profile={profile} />}
				/>
				<Route path="/websites" component={Websites} />
				<Route path="/stores" component={Stores} />
				<Route path="/graphics" component={Graphics} />
				<Route path="/projects" component={Projects} />
				<Route path="/about" component={About} />
				<Route path="/blog" component={BlogSite} />
				<Route path="/contact" component={Contact} />
				<Route path="/privacy-policy" component={PrivacyPolicy} />
				<Route path="/price" component={Price} />
				<Route path="/post/:id" component={PostDetails} />
				<Route path="/project/:id" component={ProjectDetails} />
				<Route
					path="/admin"
					component={props => <Admin {...props} profile={profile} />}
				/>
				<Route
					path="/create-post"
					component={props => <CreatePost {...props} profile={profile} />}
				/>
				<Route path="/create-project" component={CreateProject} />
				<Route component={Error} />
			</Switch>
			<Blog></Blog>
			<Requirements></Requirements>
			<Footer></Footer>
		</>
	);
};

export default SignedIn;

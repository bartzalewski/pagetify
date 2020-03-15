import React, { Component } from 'react';
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
import Footer from '../Footer/Footer';
import Requirements from '../Requirements/Requirements';
import Blog from '../Blog/Blog';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import Price from '../../pages/Price';
import Login from '../../pages/Login';
import PostDetails from '../posts/PostDetails';

export default class SignedOut extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/services" component={Websites} />
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
					<Route path="/login" component={Login} />
					<Route component={Error} />
				</Switch>
				<Blog></Blog>
				<Requirements></Requirements>
				<Footer></Footer>
			</>
		);
	}
}

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Error from '../../pages/Error';
import About from '../../pages/About';
import BlogSite from '../../pages/Blog';
import Contact from '../../pages/Contact';

export default class SignedIn extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/about" component={About} />
					<Route path="/blog" component={BlogSite} />
					<Route path="/contact" component={Contact} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}

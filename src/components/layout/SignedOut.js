import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Projects from '../../pages/Projects';
import Error from '../../pages/Error';
import About from '../../pages/About';
import BlogSite from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Websites from '../../pages/Websites';
import Stores from '../../pages/Stores';
import Graphics from '../../pages/Graphics';
import Admin from '../../pages/Admin';

export default class SignedOut extends Component {
	render() {
		return (
			<BrowserRouter>
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
					<Route path="/login" component={Admin} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>
		);
	}
}

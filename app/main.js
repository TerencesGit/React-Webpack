import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';
const mainImg = require('./images/react.jpg');
require('./css/style.scss');
var App = React.createClass({
	getInitialState() {
		return {
			count: 0
		}
	},
	handleClick(){
		this.setState({
			count: this.state.count + 1
		})
	},
	render() {
		return(
			<div>
				<header>
					<nav className="container">
						<a href="#" className="navbar-brand"></a>
						<ul>
							<li><Link activeClassName="active" to="/home">Home</Link></li>
							<li><Link activeClassName="active" to="/blog">Blog</Link></li>
							<li><Link activeClassName="active" to="/project">Project</Link></li>
							<li><Link activeClassName="active" to="/about">About</Link></li>
						</ul>
					</nav>
				</header>
				{this.props.children}
				<Footer title="&copy;Transform"/>
			</div>
		)
	}
})
render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="home" component={Home}/>
			<Route path="blog" component={Blog}/>
			<Route path="project" component={Project}/>
			<Route path="about" component={About}/>
		</Route>
	</Router>
),document.getElementById('app'))

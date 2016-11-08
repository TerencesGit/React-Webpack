import React, {Component} from 'react';
import {render} from 'react-dom';
import Routers from './Router'
import Footer from './components/Footer';
const mainImg = require('./images/react.jpg');
import './css/style.scss';
var App = React.createClass({
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
							<li><Link activeClassName="active" to="/about/contact">Contact</Link></li>
						</ul>
					</nav>
				</header>
				<div>{this.props.children}</div>
				<Footer title="&copy;Transform"/>
			</div>
		)
	}
})
render(<Routers />,document.getElementById('app'))

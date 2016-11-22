import React, {Component} from 'react';
import {Link} from 'react-router';
import Footer from './components/Footer';
export default class App extends Component{
	render(){
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
				<div>{this.props.children}</div>
				<Footer title="&copy;Transform"/>
			</div>
		)
	}
}
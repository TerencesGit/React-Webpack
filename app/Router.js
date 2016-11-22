import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import Project from './components/Project';
import About from './components/About';
//import Contact from './components/Contact';
const Contact = () => <div><h1>Contact0000</h1><Links /></div>;
export default class Routers extends Component{
	render(){
		return(
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="home" component={Home}/>
					<Route path="blog" component={Blog}/>
					<Route path="project" component={Project}/>
					<Route path="about" component={About}>
						<Route path="contact" component={Contact}/>
					</Route>
				</Route>
			</Router>
		)
	}
}
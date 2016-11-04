import React, { Component } from 'react';
export default class Header extends Component{
	render(){
		return (
			<header>
				<nav className="container">
					<a href="#" className="navbar-brand"></a>
					<ul>
						<li><a href="#">首页</a></li>
						<li><a href="#">博客</a></li>
						<li><a href="#">项目</a></li>
						<li><a href="#">关于</a></li>
					</ul>
				</nav>
			</header>
		)
	}
}
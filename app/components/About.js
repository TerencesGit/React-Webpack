import React, { Component } from 'react';
export default class About extends Component{
	render(){
		return (
			<div className="main">
				<h1>关于</h1>
				{this.props.children}
			</div>
		)
	}
}
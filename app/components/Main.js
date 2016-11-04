import React, { Component } from 'react';
export default class Main extends Component{
	render(){
		return (
			<div className="main">
				<h1>{this.props.title}</h1>
				<img src={this.props.source} />
			</div>
		)
	}
}
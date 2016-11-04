import React, { Component } from 'react';
export default class Footer extends Component{
	render(){
		return (
			<footer>
				<p>{this.props.title}</p>
			</footer>
		)
	}
}
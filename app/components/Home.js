import React from 'react';
var Home = React.createClass({
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
	render(){
		return (
			<div className="main">
				<h1>这是首页！</h1>
				<div>
					<p>你点了我 {this.state.count} 下</p>
					<button onClick={this.handleClick}>clike me</button>
				</div>
			</div>
		)
	}
})
module.exports = Home;
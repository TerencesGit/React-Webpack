import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
const mainImg = require('./images/react.jpg');
require('./css/style.css');
render(
	<div>
		<Header />
		<Main title="主区域内容" source={mainImg} />
		<Footer title="页脚部分"/>
	</div>, 
	document.getElementById('app')
)

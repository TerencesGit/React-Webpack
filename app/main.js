import React, {Component} from 'react';
import {render} from 'react-dom';
import Routers from './Router'

import './css/style.scss';
const mainImg = require('./images/react.jpg');

render(<Routers />,document.getElementById('app'))

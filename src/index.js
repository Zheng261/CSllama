import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'


// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
// Webpack CSS import

setTimeout(ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root')), 0.1)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
//serviceWorker.register();
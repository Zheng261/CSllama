import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import ButtonAppBar from './Toolbar';
import Content from './Content'
import { CSSTransitionGroup } from 'react-transition-group'
import './Transitions.css'

// import * as Ons from 'react-onsenui'; // Import everything and use it as 'Ons.Page', 'Ons.Button'
// Webpack CSS import

class App extends Component {
  render() {
    return (
      <div id="app">
       <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={300}
      transitionEnter={false}
      transitionLeave={true}>
       <ButtonAppBar/>
       <Content/>
       </CSSTransitionGroup>
      </div>
    );
  }
}


export {App};




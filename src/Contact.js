import React, { Component } from 'react';
import logo from './logo.svg';
import './Transitions.css'
import { CSSTransitionGroup } from 'react-transition-group'

class Contact extends Component {
  render() {
    return (
      <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={300}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionEnter={true}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Contact</h3>
        </header>
        
      </div>
      </CSSTransitionGroup>
    );
  }
}


export {Contact};
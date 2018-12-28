import React, { Component } from 'react';
import logo from './logo.svg';
import './Transitions.css'
import { CSSTransitionGroup } from 'react-transition-group'
class CS109 extends Component {
  render() {
    return (
       <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={300}
      transitionEnter={false}
      transitionLeave={true}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CS109</h3>
        </header>
        
      </div>
      </CSSTransitionGroup>
    );
  }
}


export {CS109};
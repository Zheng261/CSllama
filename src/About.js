import React, { Component } from 'react';
import logo from './logo.svg';
import './Transitions.css'
import { CSSTransitionGroup } from 'react-transition-group'
class About extends Component {
  render() {
    return (
       <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionEnter={false}
      transitionLeaveTimeout={300}
      transitionLeave={true}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>About</h3>
        </header>
        
      </div>
      </CSSTransitionGroup>
    );
  }
}


export {About};
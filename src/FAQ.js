import React, { Component } from 'react';
import logo from './logo.svg';
import './Transitions.css'
import { CSSTransitionGroup } from 'react-transition-group'
class FAQ extends Component {
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
          <h3>FAQ</h3>
        </header>
      Key philosophies:<br/>
      Too much information is intimidating. Notation and jargon are not inducive to initial learning.<br/>
      Humans are better at inferring the general from the specific than the specific from the general.<br/>
      Concepts should be taught intuitively. Visual learning is intuitive. <br/>
      Teaching is the best way to digest, connect, and retain information. 
      </div>
      </CSSTransitionGroup>
    );
  }
}


export {FAQ};
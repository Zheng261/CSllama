import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Transitions.css'
import { CSSTransitionGroup } from 'react-transition-group'
import PaperSheet from './Paper.js'

class Home extends Component {
  render() {
    return (
      <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeaveTimeout={500}
      transitionLeave={true}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Home.
          </p>
          <a
            className="App-link"
            href="https://www.reddit.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Waste some time here
          </a>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <PaperSheet header = "Hello! Welcome to CSllama :) " content = "Content will eventually go here, when I am less lazy and shit.">
        </PaperSheet>
      </div>
      </CSSTransitionGroup>
    );
  }
}



export {Home};
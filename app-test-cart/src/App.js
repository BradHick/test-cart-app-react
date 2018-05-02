import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import actions from './redux/actions'

const mapStateToProps = (state, ownProps) => ({
  name: state.name
})

const mapDispatchToProps = {
  changeName: actions.changeName
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.props.changeName('Russian Momo')}> Mudar nome</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

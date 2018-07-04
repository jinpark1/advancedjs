import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';

function turnCallbackIntoPromise(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      })
    })
  }
}

function superAgentGet(url, callback) {
  return request.get(url).end(callback)
}

function turnCallbackIntoPromisePractice(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      })
    })
  }
}

function doRequest(url) {
  return new Promise((resolve, reject) => {
    request.get(url).end((err, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    })
  })
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'hello, happy 4th',
      messagePractice: '',
      messagePracticeMass: '',
      messagePracticeSkinColor: '',
    };
  }

  componentDidMount() {
    const superAgentGetWithPromise = turnCallbackIntoPromise(superAgentGet);
    superAgentGetWithPromise('https://swapi.co/api/people/112edafdf').then(response => {
      this.setState({ message: 'The data from swapi is: ' + response.body.name });
    }).catch(error => {
      this.setState({ message: 'Got an error: ' + error.message });
    });

    const superAgentGetwithPromisePractice = turnCallbackIntoPromisePractice(superAgentGet);
    superAgentGetwithPromisePractice('https://swapi.co/api/people/3').then(response => {
      console.log('practice--------', response.body)
      this.setState({ messagePractice: 'The data from swapi is ' + response.body.name });
      this.setState({ messagePracticeMass: response.body.mass });
      this.setState({ messagePracticeSkinColor: response.body.skin_color });
    }).catch(error => {
      this.setState({ messagePractice: 'Got an error: '  + error.message });
    });

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Message: {this.state.message}</div>
        <div>MessagePractice: {this.state.messagePractice}</div>
        <div>Mass: {this.state.messagePracticeMass}</div>
        <div>Skin Color: {this.state.messagePracticeSkinColor}</div>
      </div>
    );
  }
}

export default App;

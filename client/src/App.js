import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      counter2: 2,
    };
  }

  increment = () => {
    // this.setState({ counter: this.state.counter + 2})
    // console.log('1')
    // this.setState({ counter: this.state.counter + 1})
    // console.log('2')
    // this.setState( prevState => {
    //   console.log('first')
    //   return { counter: prevState.counter + 1 }
    // })

    // this.setState( prevState => {
    //   console.log('second')
    //   return { counter: prevState.counter + 1 }
    // })

    this.setState( prevState => ({ counter: prevState.counter + 1 }))

    // this.setState({ counter: this.state.counter + 1 })
    // this.incrementBy5()
  }

  incrementBy5 = () => {
    this.setState({ counter: this.state.counter + 5 })
    this.setState({ counter2: this.state.counter2 + 5 })
  }
  

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>Increment Button</button>
        <div>-----------------</div>
        <button onClick={this.incrementBy5}>Increment2 Button</button>
        <div>counter: {this.state.counter}</div>
        <div>--------------------</div>
        <div>counter2: {this.state.counter2}</div>
      </div>
    );
  }
}

export default App;

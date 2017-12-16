import React, { Component } from 'react';
import axios from 'axios'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.handleAddCounter = this.handleAddCounter.bind(this)
    this.handleSubtractCounter = this.handleSubtractCounter.bind(this)
  }

  componentWillMount() {
    axios.get('/counter')
    .then( (response) => {
      let number = response.data.counter
      this.setState({counter: number})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleAddCounter() {
    axios.post('/counter/add')
    .then( (response) => {
      let number = response.data.counter
      this.setState({counter: number})
    })
  }

  handleSubtractCounter() {
    axios.post('/counter/subtract')
    .then( (response) => {
      console.log(response.data.counter)
      let number = response.data.counter
      this.setState({counter: number})
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleAddCounter}>+</button>
        <button onClick={this.handleSubtractCounter}>-</button>
      </div>
    );
  }
}

export default Counter;
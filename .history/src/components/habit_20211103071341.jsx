import React, { Component } from 'react';

class Habit extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i class="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

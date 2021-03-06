import React, { Component } from 'react';

class Habit extends Component {
  state = { count: 0 };

  // handleIncrement = e => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  // handleDecrement = () => {
  //   const count = this.state.count - 1;
  //   this.setState({ count: count < 0 ? 0 : count });
  // };

  // handleDelete = () => {
  //   this.setState({ count: 0 });
  // };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;

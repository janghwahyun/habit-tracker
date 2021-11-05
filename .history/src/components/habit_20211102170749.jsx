import React, { Component } from 'react';

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-button habit-increase">
          <i class="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i class="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-trash">
          <i class="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;

import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form className="add_form">
        <input type="text" className="add-input" placeholder="Habit"></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Input;

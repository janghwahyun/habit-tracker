import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <form className="add_form">
        <input type="text" className="add-input" placeholder="Habit"></input>
      </form>
      <button>Add</button>
    );
  }
}

export default Input;

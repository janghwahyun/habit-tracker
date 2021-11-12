import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="nabvar-logo fa-solid fa-angel"></i>
        <span>Habit Tracker</span>
        <span className="nabvar counter">9</span>
      </nav>
    );
  }
}

export default Navbar;
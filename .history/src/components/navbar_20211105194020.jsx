import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <FontAwesomeIcon icon="fa-solid fa-alicorn" />
        <span>Habit Tracker</span>
        <span className="nabvar counter">9</span>
      </nav>
    );
  }
}

export default Navbar;

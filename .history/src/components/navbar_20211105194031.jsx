import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i class="fa-solid fa-alicorn"></i>
        <span>Habit Tracker</span>
        <span className="nabvar counter">9</span>
      </nav>
    );
  }
}

export default Navbar;

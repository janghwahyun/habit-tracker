import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="nabvar">
        <i className="nabvar-logo fas fa-leaf-heart"></i>
        <span>Habit Tracker</span>
        <span className="nabvar counter">{this.props.totalcount}</span>
      </nav>
    );
  }
}

export default Navbar;

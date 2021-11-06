import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      // 사용자가 버튼을 누르면 onSumit의 콜백이 호출 됨
      <form className="add_form" onSubmit={this.onSubmit}>
        <input type="text" className="add-input" placeholder="Habit"></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default Input;

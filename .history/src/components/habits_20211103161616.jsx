import React, { Component } from 'react';

class Habits extends Component {
  state = {
    habits: [
      {
        name: 'Reading',
        count: 0,
      },
      {
        name: 'Running',
        count: 0,
      },
      {
        name: 'Coding',
        count: 0,
      },
    ],
  };

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit habit={habit} /> //habit이라는 이름에 props를 우리가 각각의 habit을 줄거임
        ))}
      </ul>
    );
  }
}

export default Habits;

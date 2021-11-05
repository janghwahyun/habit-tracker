import React, { Component } from 'react';
import Habit from './habit';

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
          //habit이라는 props이름에 우리가 각각의 habit을 줄거임
          //habit이라는 componenet 줄거임
          <Habit habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;

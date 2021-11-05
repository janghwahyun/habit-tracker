import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: 'Reading',
        count: 0,
      },
      {
        id: 2,
        name: 'Running',
        count: 0,
      },
      {
        id: 3,
        name: 'Coding',
        count: 0,
      },
    ],
  };
  handleIncrement = habit => {
    console.log(`handleIncrement ${habit}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); //key: value의 이름이 같으면 하나로 써도 무방
  };
  handleDecrement = habit => {
    console.log(`handleDecrement ${habit}`);
  };
  handleDelete = habit => {
    console.log(`handleDelete ${habit}`);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          //habit이라는 props이름에 우리가 각각의 habit을 줄거임
          //habit이라는 componenet 줄거임
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onIncrement={this.handleDecrement}
            onIncrement={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;

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
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1; // 음수 제거
    habits[index].count = count > 0 ? count : 0; //  배열의 count를 직접수정해 매우 냄새나는 코드임
    this.setState({ habits: habits });
  };
  handleDelete = habit => {
    console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter(item => item.id != habit.id);
    this.setState(habits);
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
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;

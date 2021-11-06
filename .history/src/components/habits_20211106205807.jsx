import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

//멤버함수 변수를 굳히 하지 않을 방법을 생각해봐
class Habits extends Component {
  handleIncrement = habit => {
    this.props.onIncrement(habit); //props에 전달된 onincrement의 habit을 전달해줌.
  };
  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };
  handleDelete = habit => {
    this.props.onDelete(habit);
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Input onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map(habit => (
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
      </>
    );
  }
}

export default Habits;

import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
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
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits }); //key: value의 이름이 같으면 하나로 써도 무방
  };
  handleDecrement = habit => {
    // console.log(`handleDecrement ${habit}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1; // 음수 제거, 배열 안에 들어 있는 아이템이 오브젝트를 바로 수정했죠
    // habits[index].count = count > 0 ? count : 0; //  배열의 count를 직접수정해 매우 냄새나는 코드임
    // this.setState({ habits: habits });
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: count > 0 ? habit.count - 1 : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handleDelete = habit => {
    console.log(`handleDelete ${habit}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  // handleadd를 만들고 이름의 맞는 새로운 습관을 추가해준다
  // state를 복하해오고 id를 고유한 아이디를 만들고, 주어진이름을 이용하고
  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };
  //handleReset은 아무것도 받지 않고 처리해 줄거임.
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalcount={this.state.habits.filter(item => item.count > 0).length}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

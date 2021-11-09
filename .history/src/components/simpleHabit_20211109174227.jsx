import React from 'react';

const SimpleHabit = props => {
  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span className="habit-button habit-increase" onClick={handleIncrement}>
        {count}
      </span>
      <button>
        <i class="fas fa-acorn"></i>
      </button>
    </li>
  );
};
export default SimpleHabit;

import React, { useState } from 'react';

const SimpleHabit = props => {
  const [count, setCount] = useState(0);
  const spanRef = React.createRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
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

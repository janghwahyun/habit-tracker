import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import Habits from './components/habits';
import Habit from './components/habit';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

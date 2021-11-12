import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';

import Habits from './components/habits';

ReactDOM.render(
  <React.StrictMode>
    <Habits />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

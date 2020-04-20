import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App
  defaultBreakLength='5' 
  defaultSessionLength='25' />, 
  document.getElementById('root')
);
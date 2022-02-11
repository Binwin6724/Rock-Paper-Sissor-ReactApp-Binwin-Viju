import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import Cred from './components/js/Cred';

ReactDOM.render(
  <Router basename='/'>
    <App /></Router>,
  document.getElementById('root')
);


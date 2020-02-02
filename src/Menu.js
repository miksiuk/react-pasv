import React from 'react';
import './App.css';
import MenuItem from './MenuItem'


function Menu() {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
      </ul>
    </div>
  );
}

export default Menu;

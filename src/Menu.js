import React from 'react';
import './App.css';
import MenuItem from './MenuItem'


function Menu() {
  return (
    <nav>
      <ul className="navbar-nav">
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
        <li className="nav-item"><MenuItem /></li>
      </ul>
    </nav>
  );
}

export default Menu;

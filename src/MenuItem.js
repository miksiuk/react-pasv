import React from 'react';
import './App.css';

function MenuItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.menuItem.link}> {props.menuItem.text}</a>
    </li>
  );
}

export default MenuItem;

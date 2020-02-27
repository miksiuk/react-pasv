import React from 'react';

function MenuItem(props) {
  return (
    <li className="nav-item">
      <a className="link text-light" href={props.menuItem.link}> {props.menuItem.text}</a>
    </li>
  );
}

export default MenuItem;

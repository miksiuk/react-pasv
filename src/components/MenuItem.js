import React from 'react';

function MenuItem(props) {
  return (
    <li>
      <a href={props.menuItem.link}> {props.menuItem.text}</a>
    </li>
  );
}

export default MenuItem;

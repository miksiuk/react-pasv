import React from 'react';
import './App.css';
import MenuItem from './MenuItem'


function Menu(props) {

  return (
    <nav>
      <ul className="navbar-nav">
        {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </ul>
    </nav>
  );
}

export default Menu;

import React from 'react';
import MenuItem from './MenuItem'


function Menu(props) {

  return (
    <div>
      <ul className="navbar-nav">
        {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </ul>
    </div>
  );
}

export default Menu;

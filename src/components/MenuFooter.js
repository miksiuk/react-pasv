import React from 'react';
import MenuItem from './MenuItem'


function Menu(props) {

  return (
    <nav>
      <ul className="footer-menu">
        {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </ul>
    </nav>
  );
}

export default Menu;

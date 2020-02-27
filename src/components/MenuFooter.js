import React from 'react';
import MenuItem from './MenuItemFooter'


function Menu(props) {

  return (
    <nav>
      <ul className="nav nav-pills flex-column" >
        {props.menuItems.map(el => <MenuItem key={el.text} menuItem={el} />)}
      </ul>
    </nav>
  );
}

export default Menu;

import React from 'react';
import Logo from './Logo';
import Menu from './MenuHeader';

function Header(props) {

  return (
    <header> <Logo /> <Menu menuItems={props.items} /> </header>
  );
}

export default Header;

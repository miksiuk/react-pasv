import React from 'react';
import Logo from './Logo';
import Menu from './MenuHeader';

function Header(props) {

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary">
        <Logo /> <Menu menuItems={props.items} />
      </nav>
    </header>
  );
}

export default Header;

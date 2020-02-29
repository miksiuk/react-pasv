import React from 'react';
import Logo from './Logo';
import Menu from './MenuHeader';

function Header(props) {

  return (
    <div>
      <nav className="navbar row navbar-expand-lg navbar-dark bg-secondary">
        <Logo /> <Menu menuItems={props.items} />
      </nav>
    </div>
  );
}

export default Header;

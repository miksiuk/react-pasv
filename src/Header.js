import React from 'react';
import './App.css';
import Logo from './Logo';
import Menu from './Menu';

function Header(props) {

  return (
    <header className="navbar navbar-expand-lg bg-light w-15 p-3"> <Logo /> <Menu menuItems={props.items} /> </header>
  );
}

export default Header;
